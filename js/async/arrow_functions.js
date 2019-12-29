// Arrow functions offer a lot of benefits, including saving lines of code, a neater syntax, and a lexical 'this'.

// Regular function syntax:
// const sayHello = function () {
//   console.log('Hello');
// };

// Arrow function syntax:
// const sayHello = () => {
//   console.log('Hello');
// };

// With one-line arrow functions, the following syntax works as well:
// const sayHello = () => console.log('Hello');

// With one-line returns, you can completely omit the return keyword:
// const sayHello = () => 'Hello';

// You can run into trouble when returning an object literal, however. The following doesn't work because the braces are interpreted as those enclosing a function rather than those denoting an object. This issue can be avoided by simply nesting the literal inside a set of parentheses.
// WRONG:
// const sayHello = () => {
//   msg: 'Hello'
// };
// CORRECT:
// const sayHello = () => ({
//   msg: 'Hello'
// });

// Arrow functions with a single parameter (parentheses around param are optional):
// const sayHello = name => console.log(`Hello ${name}`);

// Arrow functions with multiple parameters:
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Juno', 'Tesoro');

// Arrow functions can also be used as callbacks.

const users = ['Fen', 'Marion', 'Marvin'];

// Using a regular function:
// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Using arrow functions:
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
