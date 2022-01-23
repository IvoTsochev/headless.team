const withImages = require('next-images')
// module.exports = withImages();

module.exports = {
  ...withImages(),
  images: {
    domains: [
      'images.ctfassets.net'
    ]
  }
}