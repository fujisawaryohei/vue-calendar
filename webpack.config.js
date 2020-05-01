const path = require('path');
const outputPath = path.resolve(__dirname, 'dist')
const { VueLoaderPlugin } = require('vue-loader');
const MODE = 'development'
const enabledSourceMap = MODE === 'development'

module.exports = {
  mode: MODE,
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              //cssでのURLの取り込みを禁止する
              url: false,
              // sourceMapをdevの時のみ有効化
              sourceMap: enabledSourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', 'json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: outputPath,
    port: 8081,
    open: true
  }
}