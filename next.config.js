/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
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
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '34.87.140.83',
        pathname: '/uploads/**',
      },
    ],
    domains: ['strapi-backend-demo-84315734ec99.herokuapp.com', 'localhost'],
  },
};

module.exports = nextConfig;

// Other Config Here...
