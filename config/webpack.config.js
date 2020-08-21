const path = require('path');
const HtmlWebpackPlugin = require('../node_modules/html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
