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

const cssModulesNames = `${isDev ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l &&
    l.loader && l.loader.match(match));
  return found ? found[0] : null;
}

//existing css loader
const cssloader =
  findLoader(config.module.loaders, matchCssLoaders);

module.exports = config;
