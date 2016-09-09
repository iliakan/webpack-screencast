var home =
webpackJsonp_name_([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.showMenu = function () {

	  __webpack_require__.e/* nsure */(1/* duplicate */, function (require) {
	    var Menu = __webpack_require__(1).default;

	    var menu = new Menu({
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

/***/ }
]);