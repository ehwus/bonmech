import { serve } from "bun";
import path from "path";
import fs from "fs/promises";
import nodemailer from "nodemailer";

const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

serve({
  port: PORT,
  async fetch(req) {
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

        if (!name || !email || !message) {
          return new Response("All fields are required.", {
            status: 400,
            headers: corsHeaders,
          });
        }

        const mailOptions = {
          from: process.env.FROM_EMAIL,
          to: process.env.TO_EMAIL,
          subject: "New Web Form Submission",
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nService: ${service}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
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
      let filePath = path.join(
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
