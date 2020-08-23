const path = require('path');
var HtmlWebpackPlugin = require('../node_modules/html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {},
      },
    ],
  },
};
