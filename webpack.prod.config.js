// using require is how you include node_modules and other files into the current module
// CommonJS and module pattern explanation: https://webpack.github.io/docs/commonjs.html
const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, '/src'),
  distJS: path.join(__dirname, '/dist/js')
};

const Config = {
  context: PATHS.app,
  entry: './index.js',
  output: {
    path: PATHS.distJS,
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
        loader: 'babel',
        query: {
          cacheDirectory: true,
          babelrc: true
        },
        include: PATHS.app
      }
    ]
  }
};

module.exports = Config;
