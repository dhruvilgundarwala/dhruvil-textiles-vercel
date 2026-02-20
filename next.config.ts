import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Security headers are handled in middleware for finer control,
  // but we can add some basics here if needed.
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
