// Object.create will allow you to create prototypes inside of a parent object and then have different properties with different prototype functions.

const personPrototypes = {
  greeting: function () {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  }
}

const juno = Object.create(personPrototypes);
juno.firstName = 'Juno';
juno.lastName = 'Tesoro';
juno.age = 19;

juno.getsMarried('Keys');

console.log(juno.greeting());

const marion = Object.create(personPrototypes, {
  firstName: {value: 'Marion'},
  lastName: {value: 'Rey'},
  age: {value: 18}
});

console.log(marion);
console.log(marion.greeting());