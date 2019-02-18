const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  mode: 'development',
  entry: [],// 指定入口文件，程序从这里开始编译,__dirname当前目录, ../表示上一级目录, ./同级目录
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: 'app/[name]_[hash:8].js', // 打包后文件
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader', // 加载器
        exclude: /node_modules/,
        include: '/mock'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        // loader: 'babel-loader'
    },{
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            javascriptEnabled: true
          },
        }],
      },
    ],
  },
};