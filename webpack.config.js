'use strict';

const webpack = require('webpack');

module.exports = {
    context: './frontend',
    entry: './app',

    output: {
        path:       __dirname + '/public',
        publicPath: '/',
        filename:   "app.js"
    },

    externals: {
        lodash: '_'
    }
};