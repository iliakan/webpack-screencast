"use strict";

let moment = require('moment');

let today = moment(new Date()).locale('ru');

alert(today.format('DD MMM YYYY'));

