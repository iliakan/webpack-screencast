"use strict";

let moduleName = location.pathname.slice(1);

// let context = require.context('./routes/', false);
//
// let route;
// try {
//     route = context('./routes/' + moduleName);
// } catch (e) {
//     alert(e);
// }
// if(route){
//     route();
// }
//
let context = require.context('./routes/', false, /\.js$/);

context.keys().forEach(function(path){
    let module = context(path);
    module();
});