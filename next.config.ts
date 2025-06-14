// next.config.ts             ← or next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },

  typescript: {
    // 🚨 Turns off TypeScript errors during `next build`
    ignoreBuildErrors: true,
  },

  eslint: {
    // Don’t block the build on ESLint warnings/errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
