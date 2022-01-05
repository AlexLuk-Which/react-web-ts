const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = ({ env }) => {
  //The 'env' variable is passed in from yarn start script in package.json
  const envConfig = require(`./webpack.${env}.js`)  
  const config = merge(commonConfig, envConfig)  
  return config
}