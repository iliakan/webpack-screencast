"use strict";

document.getElementById('loginButton').onclick = function() {

  // ======== Способ 1 (require.ensure) ==
  require.ensure([], function(require) {
    let login = require('./login');

    login();
  }, 'auth');

};

document.getElementById('logoutButton').onclick = function() {

  // ======== Способ 1 (require.ensure) ==
  require.ensure([], function(require) {
    let logout = require('./logout');

    logout();
  }, 'auth');

};
