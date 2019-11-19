// FUNCTION DECLARATIONS
function greet(firstName = 'Juno', lastName = 'Tesoro') { // Setting default args in ES6 is like you do it in Python!
  // Setting default arg values in ES5
  // if (typeof firstName === 'undefined') {
  //   firstName = 'Juno';
  // }
  // if (typeof lastName === 'undefined') {
  //   lastName = 'Tesoro';
  // }
  // console.log(`Hello`);
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());
// console.log(greet('Catherine', 'Slater'));

// FUNCTION EXPRESSIONS
const square = function(x = 3) {
  return x * x;
};

// console.log(square());
// console.log(square(8));

// Expressions are better to use when it comes to hoisting and closures, which you'll get to soon.

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS (IIFEs)
// IIFEs are functions that you declare and run at the same time!

// (function(){
//   console.log(`IFFE Ran...`);
// })();

// (function(name){
//   console.log('Hello ' + name);
// })('Juno');

// IIFEs are very useful when it comes to certain design patterns like the module pattern!

// PROPERTY METHODS
// Functions inside objects are called methods, like in Python!

const todo = {
  add: function() {
    console.log(`Add todo...`);
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

// You can define functions for objects outside of their literals as well!
todo.delete = function() {
  console.log(`Delete todo...`);
}

todo.add();
todo.edit(22);
todo.delete();