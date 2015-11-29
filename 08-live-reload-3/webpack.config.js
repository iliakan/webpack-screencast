'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',

  entry: {  // --inline --hot
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
      loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]?[hash]'
    }]

  },

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true, disable: process.env.NODE_ENV=='development'})
  ],

  devServer: {
    contentBase: __dirname + '/backend',
    hot: true
  }
};



