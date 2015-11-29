'use strict';

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    main: './main'
  },

  output: {
    path:       __dirname + '/public',
    publicPath: '/',
    filename:   '[name].js'
  },

  module: {

    loaders: [{
      test:    /\.js$/,
      include: __dirname + '/frontend',
      loader:  "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.styl$/,
      loader: 'style!css!stylus?resolve url'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]

  },

  devServer: {
    contentBase: __dirname + '/backend',
    hot: true
  }
};

