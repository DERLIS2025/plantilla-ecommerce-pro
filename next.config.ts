import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 390, 430, 640, 750, 828, 1080, 1200, 1440],
    imageSizes: [32, 48, 56, 64, 96, 140, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30
  },

  compress: true,

  poweredByHeader: false
};

export default nextConfig;
