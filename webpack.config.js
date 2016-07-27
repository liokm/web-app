var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
    'babel-polyfill',
    path.join(APP_DIR, 'index'),
  ]
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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader'
        })
      }
    ]
  },
  postcss: function(webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-cssnext')(),
      require('postcss-reporter')(),
    ];
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(APP_DIR, 'index.html')
    }),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
  ]
};

module.exports = config;
