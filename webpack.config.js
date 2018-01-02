var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    index:["babel-polyfill", "./client/main"]
  },
  output: {
    path: __dirname + '/public',
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: 'vue-style-loader!css-loader',
                less: 'vue-style-loader!css-loader!less-loader'
            },
            postLoaders: {
                html: 'babel-loader'
            }
        }
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=./img/[name].[ext]'}
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, './public/index.html'),
      template: path.join(__dirname, './client/index.html')
    }),
  ],
  devtool: 'eval',
  watch: true
}