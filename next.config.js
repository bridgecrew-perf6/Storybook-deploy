// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  webpack5: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    APOLLO_GRAPH_URI: process.env.APOLLO_GRAPH_URI,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET,
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME
  }
})
