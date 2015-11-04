'use strict';

import './menu.styl';

import template from './menu.jade';

export default class Menu {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'menu';

    this.elem.innerHTML = template(options);

    this.elem.querySelector('.title').onclick = () => {
      this.elem.classList.toggle('open');
    };
  }
}

