const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),    
    new Dotenv({
      path: '.env.dev'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,        
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:3]',
              }
          }
        }, 'sass-loader'],
      }
    ],
  },
}