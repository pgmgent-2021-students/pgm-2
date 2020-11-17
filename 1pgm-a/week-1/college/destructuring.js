// Array desctructuring
const arr = ['first', 'second', 'third'];

// Without destructuring
const f = arr[0];
const g = arr[1];
const h = arr[2];

// With destructuring
const [df, dg, dh] = arr;
console.log(df, dg, dh);

let dcf, dcg, dch;
[dcf, dcg, dch] = arr;
console.log(dcf, dcg, dch);

// Skip elements
const [,,st] = ['foo', 'bar', 'baz'];
console.log(st);

// Missing data
const [missing] = [];
console.log(missing);

// Spread in array destructuring = rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head, tail);

// Destructuring strings => iterable
const [x, ...y] = 'abc';
console.log(x, y);

// Reference to eachother
const [d = 3, e = d] = [undefined, 7];
console.log(d, e);

// Object destructuring
const person = {
    firstName: 'Philippe',
    lastName: 'De Pauw - Waterschoot',
};
const { firstName, lastName } = person;
console.log(firstName, lastName);

// Alternative name
const project = {
    title: 'Let \'s pretend the 60\'s never happened',
    technolgies: [
        'Illustrator'
    ],
};
const { title: name } = project;
console.log(name);

// Default values in combination with alternative name
const { message: msg = 'Something went wrong!'} = {};
console.log(msg);

// Combine rest operator with destructuring
const options = {
    title: 'Navigation',
    width: 100,
    height: 200,
};
const {title, ...rest} = options;
console.log(title, rest);