"use strict";

let moduleName = location.pathname.slice(1);

// http://webpack.github.io/docs/context.html
let route = require('./routes/' + moduleName);
route();