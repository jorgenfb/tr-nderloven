var webpack = require('webpack');

// Copy webpack config
var config = Object.create(require('./webpack.config.js'));

// Add hot module loader
config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.resolve = ['', '.js'];

// Set dev server specific config
config.devServer = {
  contentBase: './dist',
  port: 3000,
  hot: true,
  inline: true,
  noInfo: true,
  colors: true
}

// Export config for dev server
module.exports = config;
