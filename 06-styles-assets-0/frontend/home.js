'use strict';

import Menu from './menu';

let pandaMenu = new Menu({
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
