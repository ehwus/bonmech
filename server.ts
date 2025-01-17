import { serve } from "bun";
import path from "path";
import fs from "fs/promises";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const PORT = process.env.PORT || 3000;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

serve({
  port: PORT,
  async fetch(req) {
    console.log("Received request:", req.method, req.url);

    const { pathname } = new URL(req.url);

    // Handle CORS preflight
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Enable CORS for all other requests
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
    };

    if (req.method === "POST" && pathname === "/submit-form") {
      try {
        const body = await req.json();
        const { name, email, message, phone, location, service } = body;

        // Basic validation
        if (!name || !email || !message) {
          return new Response("All fields are required.", {
            status: 400,
            headers: corsHeaders,
          });
        }

        // Basic security: rate limiting (simple in-memory example)
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("remote-addr") || "127.0.0.1";
        console.log("Client IP:", ip);

        const rateLimit = rateLimiter(ip);
        if (!rateLimit.allowed) {
          return new Response("Too many requests. Please try again later.", {
            status: 429,
            headers: corsHeaders,
          });
        }

        const msg = {
          to: process.env.TO_EMAIL,
          from: process.env.FROM_EMAIL,
          subject: "New Web Form Submission",
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nService: ${service}\nMessage: ${message}`,
        };

        await sgMail.send(msg);
        return new Response("Email sent successfully", {
          status: 200,
          headers: corsHeaders,
        });
      } catch (error) {
        console.error("Error sending the email:", error);
        return new Response("Error sending the email", {
          status: 500,
          headers: corsHeaders,
        });
      }
    }

    try {
      const filePath = path.join(
        __dirname,
        "dist",
        pathname === "/" ? "index.html" : pathname,
      );
      const fileContent = await fs.readFile(filePath);
      const ext = path.extname(filePath);
      const mimeTypes = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
      };
      const mimeType = mimeTypes[ext] || "application/octet-stream";

      return new Response(fileContent, {
        headers: {
          "Content-Type": mimeType,
          ...corsHeaders,
        },
      });
    } catch (err) {
      try {
        const index = await fs.readFile(
          path.join(__dirname, "dist", "index.html"),
        );
        return new Response(index, {
          headers: {
            "Content-Type": "text/html",
            ...corsHeaders,
          },
        });
      } catch (err) {
        return new Response("Error loading the page.", {
          status: 500,
          headers: corsHeaders,
        });
      }
    }
  },
});

console.log(`Server running at http://localhost:${PORT}`);

// Simple in-memory rate limiter
const rateLimitMap = new Map();

function rateLimiter(ip) {
  const now = Date.now();
  const windowTime = 60000; // 1 minute
  const maxRequests = 5;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return { allowed: true };
  }

  const { count, startTime } = rateLimitMap.get(ip);

  if (now - startTime > windowTime) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return { allowed: true };
  }

  if (count < maxRequests) {
    rateLimitMap.set(ip, { count: count + 1, startTime });
    return { allowed: true };
  }

  return { allowed: false };
}

