// process: leave the program
// process.exit(0);
// setTimeout(() => {
//     console.log('Delay');
// }, 4000);
// process.on('SIGTERM', () => {
//     console.log('Process terminated');
// });
// process.argv.forEach((v, i) => {
//     console.log(`${i} => ${v}`);
// });

// const args = process.argv.slice(2);
// args.forEach((v, i) => {
//     console.log(`${i} => ${v}`);
// });
// const person = {};
// const args = process.argv.slice(2);
// args.forEach((v, i) => {
//     const sp = v.split('=');
//     person[sp[0]] = sp[1];
// });
// console.log(person);
// const doSomething = () => console.log('Do something');
// console.time('doSomething()');
// doSomething();
// console.timeEnd('doSomething()');

// console.log('\x1b[1;33m\x1b[44m%s\x1b[0m \x1b[1;34m\x1b[43m%s\x1b[0m', 'HI, My name is Philippe!', 'I\'m a programmer :)');

// Loop with colors
// let tempStr = '';
// for (let b = 0; b < 8; b++) {
//   for (let t = 0; t < 8; t++) {
//     tempStr += `\x1b[1;3${t}m\x1b[4${b}m${'LOVE'}\x1b[0m\t`;
//   }
//   tempStr += `\n`;
// }
// console.log(tempStr);
const fs = require('fs');
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

const persons = [
    {
        firstName: 'Philippe',
        lastName: 'De Pauw - Waterschoot',
    },
    {
        firstName: 'Linus',
        lastName: 'De Pauw - Waterschoot',
    },
    {
        firstName: 'Lester',
        lastName: 'De Pauw - Waterschoot',
    }
];
fs.writeFile('./persons.txt', JSON.stringify(persons), (err) => {
    if (err) throw err;
    console.log('The file persons.txt has been saved!');
});