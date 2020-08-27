#!/usr/bin/env node

var dictionary = {};
dictionary['a'] = 1.25;
dictionary['d'] = 'Nothing works';
var nested = {};
nested['first'] = 'Nested';
nested['second'] = 'Dictionary';
dictionary['nested'] = nested;
console.log(dictionary);
// console.log(dictionary.def);