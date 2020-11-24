/*
JSON
JavaScript Object Notation

{
    key1: value1,
    key2: value2,
    ...
}

of

[
    {
        ...
    }
]
*/

const jsonStr = `
{
    "firstName": "Evelien",
    "lastName": "De Pauw",
    "age": 34,
    "isStudent": true,
    "data": null,
    "children": ["Linus", "Lester"],
    "address": {
        "street": "Koekoekstraat",
        "city": "Melle"
    }
}
`;

// Convert a JSON String to an object literal
const jsonPerson = JSON.parse(jsonStr);
console.log(jsonPerson.address.street);

// Create a car object
const car = {
    color: 'red',
    brand: 'Tesla',
    wheels: 4,
    engine: {
        cylinders: 6,
        size: 3.6,
    },
};
console.log(car);

// Convert an object literal to a JSON string
const carStr = JSON.stringify(car);
console.log(carStr);