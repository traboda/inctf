/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to reduce hydration warnings in dev

  // Optimize images - using remotePatterns instead of deprecated domains
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'traboda.com',
      },
      {
        protocol: 'https',
        hostname: 'app.traboda.com',
      },
    ],
  },

  // Enable Emotion compiler for better performance
  compiler: {
    emotion: true,
  },

  // Only enable static export for production builds
  // output: 'export', // Uncomment this for production build only
};

module.exports = nextConfig;

