/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ftp.goit.study',
        port: '',
        pathname: '/img/avatars/**',
      },
    ],
  },
};

export default nextConfig;

// https://ftp.goit.study/img/avatars/1.jpg
