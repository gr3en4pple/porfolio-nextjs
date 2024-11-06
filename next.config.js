/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-email/render']
  },
  images: {
    domains: ['lh3.googleusercontent.com','drive.google.com']
  }
}

module.exports = nextConfig
