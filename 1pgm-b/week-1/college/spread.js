// Spread
// Syntax: ...

// Spread in an Array Literal
const parts = ['shoulders', 'knees'];
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
console.log(fruitsTo);
console.log(fruits);

// Concatenate two arrays
const arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr2 = [...arr1, ...arr2];
console.log(arr2);

// Spread in a function
function sum (x, y, z) {
    return x + y + z;
}
console.log(sum(4, -5, 8));
console.log(sum(...[8, -2, -9]));

// Spread in a Math method or function
let maxValue = Math.max(-1, 2, -14, 23, 8);
console.log(maxValue);
maxValue = Math.max(...[45, 23, -2, 108]);
console.log(maxValue);

// Spread in a Date methode or function
let myDate = new Date(1993, 10, 8);
console.log(myDate.toString());
myDate = new Date(...[1993, 10, 8]);
console.log(myDate.toString());

// Spread in objects
const obj1 = { foo: 'bar', x: 23 };
const obj2 = { foo: 'baz', y: 14 };
const clonedObj = { ...obj1 };
clonedObj.x = -14;
console.log(clonedObj);
console.log(obj1);
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);