// b.js
exports.b1 = 123;
const a = require('./a');
console.log('module b : ', a);
exports.b2 = 234;