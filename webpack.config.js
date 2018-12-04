const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    publicPath: '/js/',
    filename: 'app.js'
  },
  module: {
    rules: [
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ['style-loader', 'css-loader']
    }
    ]
  },
  resolve: {
      alias: {
        vue: 'vue/dist/vue.js',
      },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'html'),
    port: 9000
  }
};
