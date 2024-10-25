import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    // Remove any experimental options that might cause issues
  },
};

export default nextConfig;
