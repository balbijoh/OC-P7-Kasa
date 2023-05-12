/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
        port: '',
        pathname: '/course.oc-static.com/projects/front-end-kasa-project',
      },
    ],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
}

module.exports = nextConfig
