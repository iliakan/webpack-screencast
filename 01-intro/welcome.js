'use strict';

export default function(message) {

  if (NODE_ENV == 'development') {
    console.log(message);
  }

  alert(`Welcome ${message}`);
};