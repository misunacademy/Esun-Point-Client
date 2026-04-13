
import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // poweredByHeader: false, // Don't expose 'X-Powered-By: Next.js' header
  // compress: true, // Enable gzip/brotli compression for better LCP

  // // Security headers — improves Google trust signals and Core Web Vitals
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  //         { key: 'X-Content-Type-Options', value: 'nosniff' },
  //         { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  //         { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  //         {
  //           key: 'Strict-Transport-Security',
  //           value: 'max-age=63072000; includeSubDomains; preload',
  //         },
  //       ],
  //     },
  //   ];
  // },

  experimental: {
    optimizePackageImports: ['@/lib/metaPixel', 'lucide-react'],
  },

  images: {
    qualities: [65, 75],
    formats: ['image/avif', 'image/webp'], // Better compression formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'securepay.sslcommerz.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.fbcd.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
