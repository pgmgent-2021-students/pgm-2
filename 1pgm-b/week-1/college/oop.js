// Describe a person in a blueprint
// with a constructor function
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = null;
    this.sayHello = function () {
        return `Hi I'm ${this.firstName} ${this.lastName}!`;
    };
};
// Instantiate persons
const person1 = new Person('Luk', 'Smet');
person1.firstName = 'Flappie';
person1.age = 37;
console.log(person1);
const person2 = new Person('Heleen', 'Schamp');
person2.age = 42;
console.log(person2.sayHello());

// Describe a car
function Car ({ color, wheels, engine }) {
    this.color = color;
    this.wheels = wheels;
    this.engine = engine;
    this.toString = function () {
        return `${this.engine.cylinders} cylinders`;
    };
};
// Instantiate cars
const car1 = new Car({
    wheels: 4,
    color: 'Green',
    engine: {
        cylinders: 6,
        size: 3.6,
    },
});
console.log(car1);
const car2 = new Car({
    wheels: 6,
    color: 'Red',
    engine: {
        cylinders: 12,
        size: 6.6,
    },
});
console.log(car2.toString());

// Describe a tag cloud
function TagCloud (id, name) {
    this.id = id;
    this.name = name;
    this.tags = [];
    this.addTag = function (word) {
        this.tags.push(word);
    };
    this.toString = function () {
        return `
===================================================
${this.name}
---------------------------------------------------
${this.tags.map((word) => word).join('\n')}
===================================================
`;
    }
};
// Instantiate tag clouds
const tc1 = new TagCloud('c6b9d2d9-6914-4597-9304-205221fb51bb', 'Programming Languages');
tc1.addTag('C#');
tc1.addTag('Java');
tc1.addTag('Python');
tc1.addTag('JavaScript');
tc1.addTag('C++');
tc1.addTag('Ruby');
tc1.addTag('Rust');
tc1.addTag('Lisp');
tc1.addTag('Assembly');
console.log(tc1.toString());