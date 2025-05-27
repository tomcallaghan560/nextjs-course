import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "upload.wikimedia.org" }],
  }
};

export default nextConfig;

// configuration file nextjs app. Every single package I use will have config file to adapt to project.
// can test experimental features in config file that maybe unstable in config here.
