const uppercaseModule = require('./uppercase');
console.log(uppercaseModule.uppercase('test'));
console.log(uppercaseModule.a);

const {a, b} = require('./uppercase');
console.log(a);