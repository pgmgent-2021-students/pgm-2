// Spread in array literals
const parts = [
    'shoulders',
    'knees',
];
const lyrics = [
    'head',
    ...parts,
    'and',
    'toes',
];
console.log(lyrics);

// Copy an array with spread
const fruits = ['Apples', 'Oranges', 'Melons'];
const fruitsTo = [...fruits];
fruitsTo.push('Bananas');
console.log(fruits);
console.log(fruitsTo);

// Copy multiple arrays
const arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr2 = [...arr1, ...arr2];
console.log(arr2);

// Spread in functions
let maxValue = Math.max(-1, 6, -15, 12);
console.log(maxValue);
maxValue = Math.max(...[-1, 6, -15, 12]);
console.log(maxValue);

function sum (x, y, z) {
    return x + y + z;
}
console.log(sum(-2, 6, 4));
console.log(sum(...[-2, 6, 4]));

let myDate = new Date(1982, 11, 12);
console.log(myDate.toString());
myDate = new Date(...[1992, 7, 19]);
console.log(myDate.toString());

// Spread in object literal
const obj1 = { foo: 'bar', x: 42 };
const clonedObj = { ...obj1 };
console.log(clonedObj);
const obj2 = { foo: 'baz', y: 13 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Spread of strings
const res = [...'ab-1'];
console.log(res);