// Other core objects have constructors in JS, but most of them are not advisable to use.
// The primitive data types can all be created using constructors.
// This isn't recommended though because it's slower, has more code, it's confusing. and raises issues when using the === operator. It is not even semistandard compliant.
// You may run into this, but it's not gonna be something you'll use very often.

// String
const name1 = 'Juno';
const name2 = new String('Juno');

// When you create an instance of a primitive data type using a constructor, you can add custom properties to it like so:

// name2.foo = 'bar';

// There are not very many compelling reasons to do something like this. Just know that it's indeed a thing you can do.

console.log(name1); // Logs as a string
console.log(name2); // Logs as an object

// Problems arise when you try to use the === operator.
if (name2 === 'Juno') {
  console.log('YES');
} else {
  console.log('NO');
}
// The value is indeed the same, but it returns false because name2 is an object rather than a string. A == would return true though.

// Number
const num1 = 5;
const num2 = new Number(5); // object type

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = (x, y) => {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return x + y');

// Object
const marion1 = {
  name: 'Marion'
};

const marion2 = new Object({
  name: 'Marion'
});

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regex
const re1 = /\w+/; // Captures a word char one or more times
const re2 = new RegExp('\\w+'); // You have to escape the backslash.

// Again, just create your primitive objects as you normally would.
