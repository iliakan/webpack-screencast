'use strict';

let Menu;

let pandaMenu;

function showMenu() {

  Menu = require('./menu').default;
  pandaMenu = new Menu({
    title: "Меню панды",
    items: [{
      text: 'Яйца',
      href: '#eggs'
    }, {
      text: 'Мясо',
      href: '#meat'
    }, {
      text: '99% еды - бамбук!',
      href: '#bamboo'
    }]
  });

  document.body.appendChild(pandaMenu.elem);
}

showMenu();

if (module.hot) {
  module.hot.accept('./menu', function() {
    document.body.removeChild(pandaMenu.elem);
    showMenu();
  });
}


