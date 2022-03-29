/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: '/docs',
        destination: `/docs/`,
      }
    ]
  },
}

module.exports = nextConfig
