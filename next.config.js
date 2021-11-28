const path = require('path');
const withPWA = require('next-pwa')


module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withPWA({
  pwa: { dest: 'public' }
})