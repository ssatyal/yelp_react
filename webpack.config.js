const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

var config = getConfig({
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist'),
  //clears away previous build files:
  clearBeforeBuild: true
});

consfig.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
]);

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
});

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

var config = getConfig({
  isDev: isDev,
  in: join(src, 'app.js'),
  out: dest,
  clearBeforeBuild: true
});

module.exports = config;
