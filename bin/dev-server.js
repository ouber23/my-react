'use strict'

const path = require("path");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const config = require('../webpack/webpack.dev.config');
const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '/'), // 默认会以根文件夹提供本地服务器，这里指定文件夹
    inline: true, // 自动刷新
    proxy: {
      '/api/*': {
        target: 'http://localhost:3003',
        ws: true,
        secure: false,
        changeOrigin: true
      }
    },
    hot: true, // 开启热模块替换
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    port: 9090, //如果省略，默认8080
    publicPath: "/"
});
server.listen(9090, 'localhost', function (err) {
    if (err) throw err
})