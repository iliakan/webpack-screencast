'use strict';

module.exports = function(message) {

  if (NODE_ENV == 'development') {
    console.log(message);
  }
  
  alert(`Welcome ${message}`);
};