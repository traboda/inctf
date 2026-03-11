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

  cacheComponents: true,

  async redirects() {
    return [
      // Temporarily disabled pages — remove these entries to re-enable
      { source: '/organizers', destination: '/404', permanent: false },
      { source: '/advisory-board', destination: '/404', permanent: false },
      { source: '/sponsors', destination: '/404', permanent: false },
    ];
  },
};

module.exports = nextConfig;

