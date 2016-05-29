'use strict';
const path = require('path');
const webpack = require('webpack');
const ENV = process.env.ENV || 'local';

let Config = {
  context: path.join(__dirname, '/src'),
  entry: "./app.jsx",
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
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
