'use strict';

exports.showMenu = function() {

  require.ensure([], function(require) {
    let Menu = require('./menu');

    let menu = new Menu({
      title: "Комнаты дома",
      items: [{
        text: 'Детская',
        href: '#childroom'
      }, {
        text: 'Кухня',
        href: '#kitchen'
      }, {
        text: 'Гостиная',
        href: '#guestroom'
      }]
    });

    document.body.appendChild(menu.elem);
  });

};