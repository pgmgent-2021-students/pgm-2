// Convert Literal Object to JSON string
const person = {
    firstName: 'Olivier',
    lastName: 'Pieters',
    genderCode: 4,
    toString: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.toString());
let jsonStr = JSON.stringify(person);
console.log(jsonStr);

// Convert a JSON string to a Literal Object
jsonStr = `
{
    "results": true,
    "count": 42
}
`;
let jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);