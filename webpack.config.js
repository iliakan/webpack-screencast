// webpack --profile --display-modules --display-reasons

'use strict';

module.exports = {
    context: __dirname + '/frontend',
    entry:   './app',

    output: {
        path:       __dirname + '/public',
        filename:   "app.js"
    },

    module: {
        loaders: [{
            test:    /\.js$/,
            include: __dirname + '/frontend',
            // exclude: /\/node_modules\//,
            loader: 'babel',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }],

        noParse: /angular\/angular.js/
    }
};