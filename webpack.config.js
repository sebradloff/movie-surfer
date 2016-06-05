const path = require('path');

const Config = {
  // tool used to help with debugging
  // more info: https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',
  // context sets the main folder for our app
  context: path.join(__dirname, '/src'),
  // the file that is the entry point to the application
  entry: './app.jsx',
  // the name of our bundled file will be placed in the /dist/js folder called bundle.js
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  // allows you to require your modules in other modules without specifying the extension
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        // this goes through all your files including the extension type specified in test key
        // we exclude all the files in node_modules
        // the loader is babel-loader: allows us to write es6 and transpile down to JS that current browsers understand
        // https://github.com/babel/babel-loader
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};

module.exports = Config;
