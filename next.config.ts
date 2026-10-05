import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Imagery is pre-optimised to WebP in /public/media, so we serve it as-is.
  images: { unoptimized: true },
};

export default nextConfig;
