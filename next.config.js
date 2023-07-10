/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ['ktbl-admin-uat.cmcg.work/', 'localhost'],
  },
};

module.exports = nextConfig;

// Other Config Here...
