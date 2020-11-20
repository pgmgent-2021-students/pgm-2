// OOP
// With constructor function

// Describe a person
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function () {
        return `Hi I'm ${this.firstName} ${this.lastName}`;
    };
};

// Make an instance of the class Person
const person1 = new Person('Heleen', 'Upsla');
person1.firstName = 'Ilsa';
console.log(person1);
console.log(person1.sayHello());

// Describe a car
function Car (color, brand, wheels = 4) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    this.toString = function () {
        return `${this.brand}`;
    }
};

// Make an instance of the class Car
const car1 = new Car('Blue', 'Opel');
console.log(car1.toString());

// Describe a tag cloud
function TagCloud (id, name) {
    this.id = id;
    this.name = name;
    this.tags = [];
    this.addTag = function(word) {
        this.tags.push(word);
    };
};

// Make an instance of a tag cloud
const tc1 = new TagCloud('a54ba293-6469-495d-b244-43344bce91c3', 'Programming Languages');
tc1.addTag('JavaScript');
tc1.addTag('Ruby');
tc1.addTag('Rust');
tc1.addTag('Python');
console.log(tc1);