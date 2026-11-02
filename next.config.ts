import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/', destination: '/fr', permanent: false },
      { source: '/about', destination: '/fr/about', permanent: true },
      { source: '/privacy-policy', destination: '/fr/privacy-policy', permanent: true },
      { source: '/pricing', destination: '/fr/#impact', permanent: true },
      { source: '/trips/:slug', destination: '/fr/trips/:slug', permanent: true },
    ]
  },
}

export default nextConfig
