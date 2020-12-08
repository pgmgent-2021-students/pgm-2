// node arguments philippe 
// node arguments firstname=philippe lastname="De Pauw - Waterschoot"
// process.argv.forEach((v, i) => {
//   console.log(`${i} => ${v}`);
// });
const person = {};
const args = process.argv.slice(2);
args.forEach((v, i) => {
  const namedArgs = v.split('=');
  // console.log(`${i} => ${v}`);
  person[namedArgs[0]] = namedArgs[1];
});
console.log(person);