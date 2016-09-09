// http://webpack.github.io/docs/loaders.html#pitching-loader
// https://github.com/webpack/style-loader/blob/master/index.js

'use strict';

let webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry:   {
        home: './home'
    },
    output:  {
        path:     __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },

    module: {

        loaders: [{
            test:   /\.js$/,
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        }, {
            test:   /\.jade$/,
            loader: "jade"
        }, {
            // autoprefixer?browsers=last 2 version!
            test:   /\.styl$/,
            loader: 'style!css!stylus?resolve urls'
        }, {
            test:   /\.css/,
            loader: 'style!css'
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            exclude: /\/node_modules\//,
            loader: 'file?name=[path][name].[ext]'
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            include: /\/node_modules\//,
            loader: 'file?name=[1].[ext]&regExp=node_modules/(.*)'
        }]
    }

};
