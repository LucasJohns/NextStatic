require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  },
  publicRuntimeConfig: {
    // Set public runtime variables here
    // ex: ENV_VARIABLE: process.env.ENV_VARIABLE
  },
  exportPathMap: async (defaultPathMap) => {
    return defaultPathMap;
  }
})
