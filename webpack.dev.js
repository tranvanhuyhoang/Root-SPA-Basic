const webpack = require('webpack')

module.exports =  {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 9000,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})