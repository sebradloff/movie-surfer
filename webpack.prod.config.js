// using require is how you include node_modules and other files into the current module
// CommonJS and module pattern explanation: https://webpack.github.io/docs/commonjs.html
const path = require('path');
const webpack = require('webpack');

const Config = {
  context: path.join(__dirname, '/src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // list of webpack plugins: https://webpack.github.io/docs/list-of-plugins.html
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};

module.exports = Config;
