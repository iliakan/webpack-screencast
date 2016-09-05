"use strict";

document.getElementById('loginButton').onclick = function() {

  // ======== Способ 1 (require.ensure) ==
  require.ensure([], function(require) {
    let login = require('./login');

    login();
  });

  // Способ 2 (AMD)
  // require(['./login'], function(login) {
  //   login();
  // });

};
