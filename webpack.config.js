const path = require('path');
const outputPath = path.resolve(__dirname, 'dist')
const { VueLoaderPlugin } = require('vue-loader');
console.log(outputPath);

module.exports = {
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
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', 'json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8081,
    open: true
  }
}