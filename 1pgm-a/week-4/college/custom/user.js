function User (name, age) {
  this.name = name;
  this.age = age;
  this.toCLIString = () => {
    return `
    Name:\t${this.name}
    Age:\t${this.age}
    `;
  }
};
module.exports = User;