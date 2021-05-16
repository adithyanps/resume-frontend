const withImages = require('next-images');

module.exports = withImages({
  fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    return config;
  },
});
