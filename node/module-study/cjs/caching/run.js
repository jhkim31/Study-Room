const st1 = new Date();
const a = require('./a');
const et1 = new Date();
a.show();
a.add();
a.show();

const st2 = new Date();
const b = require("./a");
const et2 = new Date();
b.show();
b.add();
b.show();

a.show();
b.show();

console.log(et1 - st1);
console.log(et2 - st2);