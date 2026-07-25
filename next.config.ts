import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure images from external domains load correctly
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
