const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const sourcePath = 'src';
const projectRoot = path.resolve(`${__dirname}/${sourcePath}`);

module.exports = {
  entry: `./${sourcePath}/index.js`,
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js?$/, use: "eslint-loader", exclude: /node_modules/, enforce: "pre" },
      { test: /\.js?$/, use: "imports-loader?_h=hyperapp/src/h,h=>_h.default,hyperx,html=>hyperx(h)", exclude: /node_modules/ },
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HtmlPlugin({ template: `./${sourcePath}/index.html` })
  ],
  devtool: 'source-map'
}
