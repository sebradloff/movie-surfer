'use strict';
const path = require('path');
const webpack = require('webpack');

let Config = {
  devtool: 'source-map',
  context: path.join(__dirname, '/src'),
  entry: "./app.jsx",
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
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
}

module.exports = Config;
