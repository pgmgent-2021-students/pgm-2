const user = require('./person');
console.log(`${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}!`);

const { getName, dob } = require('./person');
console.log(`${getName()} was born on ${dob}!`);