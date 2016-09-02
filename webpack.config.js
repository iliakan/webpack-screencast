'use strict';

module.exports = {
  entry: './home',
  output: {
    filename: 'build.js',
    library: 'home'
  },

  watch: true,

  watchOptions: { // Опция для ускорения пересборки
    aggregateTimeout: 100 // default: 300
  },

  devtool: 'cheap-inline-module-source-map'
};