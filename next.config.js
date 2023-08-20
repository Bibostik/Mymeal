/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


module.exports = {
  env: {
    next_public_stripe_publishable_key:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    stripe_webhook_endpoint_secret: process.env.STRIPE_WEBHOOK_ENDPOINT_SECRET,
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};
