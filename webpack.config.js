// webpack --display-modules – показывает в какие файлы пошли модули при сборке
// webpack --display-modules -v – более подробная информация о модулях при сборке
// webpack --json --profile >stats.json – получение файла со статистикой http://webpack.github.io/analyse/ - сайт для анализа файла

'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend',
  entry: {
    home: './home',
    about: './about'
  },
  output: {
    path:     __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
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
    new webpack.NoErrorsPlugin(),
    // Определение переменных
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG:     JSON.stringify('ru')
    }),
    // Если плагин не настраивать, то он вынесет код, который используется во всех точках входа.
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'], // Где искать модули
    extensions:         ['', '.js'] // С какими расширениями
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'], // Где искать лоадеры
    moduleTemplates:    ['*-loader', '*'], // Шаблон поиска
    extensions:         ['', '.js'] // С какими расширениями
  },

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

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}