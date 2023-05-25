/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["cloudflare-ipfs.com", "cdn.fakercloud.com",]
  }

}

module.exports = nextConfig
