var webpack = require('webpack');
// var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  },
  module: {
    loaders: [
            // { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
