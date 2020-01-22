// Destructuring gives us an easy way to assign vars and extract vars from arrays and objects.
// It's commonly used in frameworks like React and other modularized JS.
// It is essentially like tuple packing/unpacking in Python.

// Destructuring Assignment
let a, b;
[a, b] = [100, 200];

// Rest pattern
// The rest var will essentially capture the leftover values.
[a, b, ...rest] = [100, 200, 300, 400, 500];
// a becomes 100
// b becomes 200
// rest becomes an array of the remaining values

// Destructuring with objects
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// a becomes 100
// b becomes 200
// rest becomes an object containing the leftover key-value pairs

// Array Destructuring
// const people = ['Sappho', 'Circe', 'Hermes'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
function getPeople () {
  return ['Sappho', 'Circe', 'Hermes'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3);

// Object Destructuring
// When you work with frameworks or ES6 modules, you're usually gonna deal with object destructuring. You may have some kind of library module where you're exporting an object but you want to get certain functions or properties from that object.

const person = {
  name: 'Blanche',
  age: 65,
  city: 'Miami',
  gender: 'Female',
  sayHello: function () {
    console.log('Hello');
  }
};

// Old ES5 way
// const name = person.name;
// const age = person.age;
// const city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;
// Variables are automatically assigned the values of the matching keys in the person object.

console.log(name, age, city); // "Blanche 65 Miami"
sayHello(); // "Hello"
