// http://webpack.github.io/docs/shimming-modules.html#imports-loader
// http://webpack.github.io/docs/shimming-modules.html#exports-loader

'use strict';

module.exports = {
    context: __dirname + '/frontend',
    entry: './home',

    output: {
        path:       __dirname + '/public/',
        filename:   'home.js'
    },

    module: {
        loaders: [{
            test: /old.js$/,
            loader: "imports?workSettings=>{delay:500}!exports?Work"
        }]
    },

    resolve: {
        root: __dirname + '/vendor',
        alias: {
            old: 'old/dist/old'
        }
    }

};
