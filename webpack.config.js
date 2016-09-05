'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: './home',
  output: {
    filename: 'build.js',
    library: 'home'
  },

  watch: NODE_ENV == 'development',

  watchOptions: { // Опция для ускорения пересборки
    aggregateTimeout: 100 // default: 300
  },

  // eval – самый быстрый способ построения source-map, потому что его как такового не существует. Используется только для разработки
  // cheap-inline-module-source-map – тоже подходит для разработки
  // cheap-source-map – подходит для production
  // source-map – самый медленный способ построения source-map, используется на production
  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    // Определение переменных
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    })
  ],

  module: {
    loaders: [{
      test:    /\.js$/,
      // loader:  "babel?presets[]=es2015&plugins[]=transform-runtime",
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }]
  }
};