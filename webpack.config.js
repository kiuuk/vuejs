const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    publicPath: '/dist/',
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
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!sass-loader'
    }
    ]
  },
  resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      },
      extensions: ['*', '.js', '.vue', 'json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'html'),
    port: 9000
  }
};
