// http://webpack.github.io/docs/shimming-modules.html#expose-loader
// http://webpack.github.io/docs/shimming-modules.html#script-loader


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
            // loader: "expose?Work!imports?workSettings=>{delay:500}!exports?Work"
            loader: 'script'
        }]
    },

    resolve: {
        root: __dirname + '/vendor',
        alias: {
            old: 'old/dist/old'
        }
    }

};
