"use strict";

let _ = require('lodash');

let users = [
    {id: "abcd", name: "Vasya"},
    {id: "defa", name: "Petya"},
    {id: "1234", name: "Masha"}
];


console.log( _.pluck(users, 'name') );