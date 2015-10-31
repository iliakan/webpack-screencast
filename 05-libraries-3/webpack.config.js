'use strict';

module.exports = {
  context: __dirname + '/frontend',
  entry:   './app',

  output: {
    path:       __dirname + '/public',
    filename:   "app.js"
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      include: __dirname + '/frontend',
      loader: 'babel'
    }],

    noParse:  wrapRegexp(/\/node_modules\/(angular\/angular)/, 'noParse')

  }
};


function wrapRegexp(regexp, label) {
  regexp.test = function(path) {
    console.log(label, path);
    return RegExp.prototype.test.call(this, path);
  };
  return regexp;
}
