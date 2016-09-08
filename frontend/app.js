"use strict";

// let pluck = require('lodash/collection/pluck');

let users = [
    {id: "abcd", name: "Vasya"},
    {id: "defa", name: "Petya"},
    {id: "1234", name: "Masha"}
];


console.log( pluck(users, 'name') );