'use strict';

let webpack = require('webpack');
let bootstrap = require('bootstrap-styl');

module.exports = {
  context: __dirname + '/frontend',
  entry:   {
    home: './home'
  },
  output:  {
    path:     __dirname + '/public',
    filename: '[name].js'
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      loader: "babel"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      // autoprefixer?browsers=last 2 version!
      test:   /\.styl$/,
      loader: 'style!css!stylus?resulve urls'
    }, {
      test:   /\.css/,
      loader: 'style!css'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },

  watch: true,

  stylus: {
    use: [
      bootstrap()
    ]
  }

};
