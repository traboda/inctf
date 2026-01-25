/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to reduce hydration warnings in dev
  swcMinify: true,

  // Webpack YAML loader removed - YAML files now loaded at build time via getStaticProps

  experimental: {
    // Disable strict mode hydration checks that can cause false positives
    strictNextHead: false,
  },

  // Optimize images
  images: {
    domains: ['traboda.com', 'app.traboda.com'],
  },
};

module.exports = nextConfig;
