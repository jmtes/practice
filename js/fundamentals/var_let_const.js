// var, let, const

// VAR
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting); //undefined
// greeting = 'Hello';
// console.log(greeting);

// Variable names can only include letters, numbers, _, $
// They cannot start with a number
// You can start something with a $ but it is not recommended if you're not working with jQuery.
// You can start with an underscore too but that might cause confusion once you start working with private variables and frameworks.
// Just start your variables with a letter lol

// LET
// let name;
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
const name = 'John';
console.log(name);
// cannot reassign
// name = 'Sara'; // doesn't work!
// Have to assign a value
// const greeting; // doesn't work!

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);
// you can change the attributes of the object but you cannot reassign the object itself!
// person = {
//   name: 'Tegan',
//   age: 34
// } // this doesn't work!

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

// numbers = [7, 8, 9, 10]; doesn't work!

// Use const unless you plan on the value changing, you don't need to initialize it, or you're gonna be using the varable in an iterator or loop.
// Const lets other people know that some value is not supposed to change and also makes your code more robust and readable.