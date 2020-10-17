const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')
const { VueLoaderPlugin } = require('vue-loader')
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
        options: {
          sourceMap: enabledSourceMap
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', 'json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: outputPath,
    port: 8081
  }
}
