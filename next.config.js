/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/NextJS-portfolio2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NextJS-portfolio2' : '',
}

module.exports = nextConfig
