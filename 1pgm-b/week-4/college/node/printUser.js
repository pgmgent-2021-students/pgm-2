const User = require('./user.js');
const user = new User('Philippe', 37, 'drdynscript@gmail.com')
console.log(user.toCLIString());