/**
 * webpack --display-modules – показывает в какие файлы пошли модули при сборке
 *
 * http://webpack.github.io/docs/list-of-plugins.html#ignoreplugin
 *
 */

'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',

    entry: {
        app: './app'
    },

    output: {
        path: __dirname + '/public/js',
        publicPath: '/js/',  //   /js/app.js
        filename: "[name].js"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        // new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/)
        // new webpack.IgnorePlugin(/zh-/)
        new webpack.IgnorePlugin(/\.\/locale/)
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    }

};


if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
