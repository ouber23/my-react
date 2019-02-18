const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const paths = require('./paths');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../src/index.js'),
  ],
  // devServer: {
  //   proxy: {
  //     '/api/*': {
  //       target: 'http://localhost:3003',
  //       ws: true,
  //       secure: false,
  //       changeOrigin: true
  //     }
  //   }
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      title: '测试网站表',
      template: path.resolve(__dirname, '../src/index.template.html'),
      inject: true,
      favicon: path.resolve(__dirname, '../src/lufei-bg.ico')
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});