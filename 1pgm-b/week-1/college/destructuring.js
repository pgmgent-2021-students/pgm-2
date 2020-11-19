// Destructuring

// Without destructuring
const arr1 = ['first', 'second', 'third'];
const f = arr1[0];
const g = arr1[1];
const h = arr1[2];

// Array destructuring
const [fd, gd, hd] = arr1;
console.log(fd, gd, hd);

let fe, ge, he; // Declaration
[fe, ge, he] = arr1;
console.log(fe, ge, he);

// Skip elements during destructuring
const [,,st] = ['foo', 'bar', 'baz'];
console.log(st);

// Missing data
const [missing] = [];
console.log(missing);

// Combine destructuring with spread => rest
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail);

// Destructuring a string
const [x, ...y] = 'abc';
console.log(x, y);

// Reference to eachother
const [a = 3, b = a] = [undefined, 7];
console.log(a, b);

// Object destructuring
const person = {
    firstName: 'Evelien',
    lastName: 'Rutsaert',
};
const { firstName, lastName } = person;
console.log(firstName, lastName);

// Alternative name for variable during desctructuring
const project = {
    title: 'Internet of Things',
    technologies: [
        'JavaScript',
        'ESNext',
    ],
};
const { title: name } = project;
console.log(name);

// Default values
const { message: msg = 'Something went wrong!' } = { message: undefined};
console.log(msg);

// Rest during object destructuring
const options = {
    title: 'Navigation',
    width: 320,
    height: 260,
};
const { title: n, ...dimension } = options;
console.log(n, dimension);

// Declare a function with an object as parameter
function whois ({ firstName, lastName, displayName, gender = 0 }) {
    console.log(firstName, lastName, displayName, gender);
}
whois({ firstName: 'Evelien', displayName: 'everut', gender: 4 });