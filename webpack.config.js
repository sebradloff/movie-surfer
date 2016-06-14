// using require is how you include node_modules and other files into the current module
// CommonJS and module pattern explanation: https://webpack.github.io/docs/commonjs.html
const path = require('path');
const webpack = require('webpack');

const Config = {
  // tool used to help with debugging
  // more info: https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',
  // context sets the main folder for our app
  context: path.join(__dirname, '/src'),
  // the file that is the entry point to the application containing the routes
  entry: './index.js',
  // the name of our bundled file will be placed in the /dist/js folder called bundle.js
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  // allows you to require your modules in other modules without specifying the extension
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // make jquery available accross all modules, therefore you don't need to require it constantly
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
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
