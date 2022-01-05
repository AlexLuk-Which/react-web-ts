const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // new BundleAnalyzerPlugin(), //If you want to analyse your bundle size
    new Dotenv({
      path: '.env.production'
    }),
    
  ],
}