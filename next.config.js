/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/journal',
        destination: `https://75523-nextjs-with-trailing-slash.vercel-support.app/journal/`,
      },
      {
        source: '/journal/:path*',
        destination: `https://75523-nextjs-with-trailing-slash.vercel-support.app/journal/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
