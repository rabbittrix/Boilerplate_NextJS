// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true
})
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  //swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
})
