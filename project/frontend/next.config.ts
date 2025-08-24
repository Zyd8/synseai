import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Important for static hosting
  skipTrailingSlashRedirect: true,
  distDir: 'out', // Output directory
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
