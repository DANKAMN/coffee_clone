/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.buymeacoffee.com',
            port: '',
            pathname: '/assets/img/homepage/images/creator_tile_v8_8.png',
          },
        ],
      },
};

export default nextConfig;
