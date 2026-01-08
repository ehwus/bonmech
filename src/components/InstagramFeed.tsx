import { InstagramIcon } from "./SocialIcons";
import { useEffect } from "react";

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg shadow-md">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-3 flex items-center justify-center">
          <InstagramIcon className="w-8 h-8 mr-3 text-pink-600" />
          Follow Us on Instagram
        </h2>
        <p className="text-gray-700 mb-4">
          Check out our latest projects and updates @bonmech_southgeorgianbay
        </p>
        <a
          href="https://www.instagram.com/bonmech_southgeorgianbay/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 transition duration-300"
        >
          View on Instagram
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Instagram embed posts */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/bonmech_southgeorgianbay/"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        ></blockquote>
      </div>
    </div>
  );
};

export default InstagramFeed;
