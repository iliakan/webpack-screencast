'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/frontend',
    entry:  {
        main: './main',
        styles: './styles'
    },
    output:  {
        path:     __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.styl']
    },

    module: {

        loaders: [{
            test:   /\.js$/,
            loader: "babel?presets[]=es2015"
        }, {
            test:   /\.jade$/,
            loader: "jade"
        }, {
            test:   /\.styl$/,
            // // 1-й арг-т - это лоадер если стили остаются внутри JS (например если какой-то скрипт подкл-ся динамически)
            // loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
            loader: ExtractTextPlugin.extract('css!stylus?resolve url')
        }, {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        }]

    },

    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}) // // Вытаскивает стили в файл со всех скриптов, включая динамически подргужаемые
    ]
};



