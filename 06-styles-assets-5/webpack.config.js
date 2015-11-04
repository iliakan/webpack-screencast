'use strict';

module.exports = {
  context: __dirname + '/frontend',
  entry:   './main',
  output:  {
    path:     __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

  devtool: 'inline-source-map',

  module: {

    loaders: [{
      test:   /\.js$/,
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    }, {
      test:   /\.styl$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions!stylus?resolve url'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]

  }

};



