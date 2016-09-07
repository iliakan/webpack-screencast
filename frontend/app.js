"use strict";

let moduleName = location.pathname.slice(1);

let handler;
try {
    // handler = require('bundle!./routes/' + moduleName)
    // http://webpack.github.io/docs/context.html#require-context
    let context = require.context('bundle!./routes/', true, /^\.\//);
    handler = context('./' + moduleName);
} catch (e) {
    alert("No such path");
}

if (handler) {
    handler(function(route) {
        route();
    });
}