var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: path.join(APP_DIR, 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    // Need a absolute path to work with history api
    filename: '/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(APP_DIR, 'index.html')
    })
  ]
};

module.exports = config;
