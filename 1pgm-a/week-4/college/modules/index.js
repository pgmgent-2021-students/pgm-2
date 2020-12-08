// process module
// const process = require('process');
console.log(process.env);
process.env.HELLO = 'Hello World!';
console.log(process.env.HELLO);
// console modules
// const console = require('console');
// readline module
const readline = require('readline');
const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLineInterface.question('What\'s your name?', name => {
  console.log(`Hi ${name}.`);
  readLineInterface.close();
});
// fs module
const fs = require('fs');
fs.writeFile('./hello.txt', 'Hello World!', (error) => {
  console.log(`The file has been saved!`);
});
let tempStr = '';
for (let i = 0; i < 10000; i++) {
  tempStr += `${i}\n`;
}
fs.writeFile('./numbers.txt', tempStr, (error) => {
  console.log(`The file has been saved!`);
});

const persons = [
  { firstName: 'Philippe', lastName: 'De Pauw - Waterschoot' },
  { firstName: 'Linus', lastName: 'De Pauw - Waterschoot' },
  { firstName: 'Lester', lastName: 'De Pauw - Waterschoot' }
];
tempStr = persons.map(p => `${p.firstName}  ${p.lastName}`).join('\n');
fs.writeFile('./users.txt', tempStr, (error) => {
  console.log(`The file has been saved!`);
});