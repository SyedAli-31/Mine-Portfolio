import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ Warning: This allows production builds to successfully complete even if
    // your project has type errors. Use with caution!
    ignoreBuildErrors: false, // Changed to false for better development
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stratix-labs.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
