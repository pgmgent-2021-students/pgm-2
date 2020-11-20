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
    this.toString = function () {
        return `${this.name}`;
    };
    this.toCLIString = function () {
        return `
=================================================
${this.name}
-------------------------------------------------
${this.tags.map((w) => w).join('\n')}
=================================================
        `;
    }
};

// Make an instance of a tag cloud
const tc1 = new TagCloud('a54ba293-6469-495d-b244-43344bce91c3', 'Programming Languages');
tc1.addTag('JavaScript');
tc1.addTag('Ruby');
tc1.addTag('Rust');
tc1.addTag('Python');
console.log(tc1);
console.log(tc1.toString());
console.log(tc1.toCLIString());

// Describe a category
function Category (name, description = null) {
    this.name = name;
    this.description = description;
};

// Describe a post
function Post ({ title, subTitle = null, synopsis, body, category = null }) {
    this.title = title;
    this.subTitle = subTitle;
    this.synopsis = synopsis;
    this.body = body;
    this.category = category;
    this.toCLIString = function () {
        return `
=================================================
${this.title}
-------------------------------------------------
Category: ${this.category !== null ? this.category.name : 'Uncategorized'}
-------------------------------------------------
${this.synopsis}
-------------------------------------------------
=================================================
        `;
    };
};

// Make an instance of the class Category
const cat1 = new Category('Reviews', 'Tweakers biedt de meeste en uitgebreidste professionele- en gebruikersreviews over computers, tablets & telefoons, beeld & geluid, games, IT Pro en alle andere consumentenelektronica.');
console.log(cat1);

const cat2 = new Category('Pricewatch', 'Vergelijk prijzen van o.a. smartphones, laptops, tablets, televisies en camera\'s. Lees uitgebreide reviews en maak de beste keuze.');
console.log(cat2);

// Make an instance of the class Post
const post1 = new Post({
    subTitle: 'Een goedkoop en aantrekkelijk alternatief',
    title: 'Xbox Series S Review',
    body: 'Ipsum',
});
post1.synopsis = 'Microsoft plaatst een hele slimme zet met de Xbox Series S. Het is een mooie en lekker kleine console die toch met veel moderne technieken overweg kan. Gamen op 4k zit er niet in, dat is de voornaamste concessie die je moet doen. Maar als je geen 4k-tv hebt, is de Series S een prima alternatief voor de duurdere Series X. De Series S is daarmee een ideale instapmachine die vooral door de aantrekkelijke Game Pass veel mensen voor het Microsoft-kamp zal winnen.';
post1.category = cat1;
console.log(post1);
console.log(post1.toCLIString());