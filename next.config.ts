import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⚡ PRODUCTION IMAGE OPTIMIZATION
  images: {
    // Modern image formats for 70% smaller file sizes
    formats: ['image/avif', 'image/webp'],

    // Optimize for different device sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Long cache time for static images (1 year)
    minimumCacheTTL: 31536000,

    // Allowed image domains (currently none - using local images only)
    remotePatterns: [],

    // Enable image optimization
    unoptimized: false,
  },

  // ⚡ PRODUCTION PERFORMANCE OPTIMIZATIONS
  compress: true,

  // Production-only: Standard Next.js build (Turbopack for dev only)
  ...(process.env.NODE_ENV === 'production' ? {} : {
    turbopack: {
      root: process.cwd(),
    },
  }),

  // Enable React strict mode for better performance
  reactStrictMode: true,

  // Power mode for faster builds
  poweredByHeader: false,

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
};

export default nextConfig;
