/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to reduce hydration warnings in dev

  // Optimize images - using remotePatterns instead of deprecated domains
  images: {
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
};

module.exports = nextConfig;
