var webpack = require('webpack')
var vue = require('vue-loader')
var path = require('path')


module.exports = {

  entry: './src/main',

  output: {
    filename: 'build.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
      {
        test: /\.vue$/,
        loader: vue.withLoaders({
          js: 'babel?optional[]=runtime'
        })
      }
    ]
  },
  resolve: {
    extensions: ["", ".js"],
    alias: {
      filters: path.join(__dirname, './src/filters'),
      components: path.join(__dirname, './src/components')
    }
  },
  devtool: "#source-map"
}
