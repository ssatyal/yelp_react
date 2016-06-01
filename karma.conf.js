// Karma configuration
// Generated on Wed Jun 01 2016 16:43:44 GMT-0400 (EDT)
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha','chai'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack'
    ],
    files: [
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
