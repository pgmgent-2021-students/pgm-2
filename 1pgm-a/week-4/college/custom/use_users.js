const User = require('./user');

let user = new User('Philippe', 32);
console.log(user.toCLIString());
user = new User('Evelien', 27);
console.log(user.toCLIString());