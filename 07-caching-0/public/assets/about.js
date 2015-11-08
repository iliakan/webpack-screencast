var about =
webpackJsonp_name_([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.showMenu = function () {

	  __webpack_require__.e/* nsure */(1, function (require) {
	    var Menu = __webpack_require__(1);

	    var menu = new Menu({
	      title: "О сайте 2",
	      items: [{
	        text: 'Кто придумал?',
	        href: '#think'
	      }, {
	        text: 'Кто сделал?',
	        href: '#do'
	      }, {
	        text: 'Кто оплатил?',
	        href: '#pay'
	      }]
	    });

	    document.body.appendChild(menu.elem);
	  });
	};

/***/ }
]);