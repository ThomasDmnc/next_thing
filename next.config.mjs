/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lesfoodies.com',
          },
        ],
      }
};

export default nextConfig;
