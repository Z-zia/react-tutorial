const merge = require('webpack-merge') // webpack-merge
const common = require('./webpack.common.js') // 汎用設定をインポート

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: __dirname + "/public/develop",
    filename: "client.min.js"
  },
  devServer: {
    contentBase: __dirname + '/src',
    publicPath: '/',
    noInfo: true,
    historyApiFallback: true
  }
})