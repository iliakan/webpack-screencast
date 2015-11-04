'use strict';

module.exports = {
  context: __dirname + '/frontend',
  entry:   './main',
  output:  {
    path:     __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.css$/,
      // .../node_modules/css-loader/index.js!.../node_modules/autoprefixer-loader/index.js?browsers=last 2 versions!.../frontend/menu/menu.css
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]

  }

};



