const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Root config',
      filename: 'index.html',
      template: './template.html'
    })
  ],
  // module: {
  //   rules: [
  //     // JavaScript
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: ['babel-loader'],
  //     },
  //     {
  //       test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
  //       type: 'asset/resource',
  //     },
  //     {
  //       test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
  //       type: 'asset/inline',
  //     },
  //   ],
  // }
};