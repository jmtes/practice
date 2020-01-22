// CommonJS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
// Notice the use of destructuring!
// import { person, sayHello } from './mymodule2';
// console.log(person.name);
// console.log(sayHello());

// Importing everything at once from a module
// import * as mod from './mymodule2';

// console.log(mod.person.name);
// console.log(mod.sayHello());

// If a module defines a default export, then you can import that default export by omitting the curly braces that you used in the first example above:
import greeting from './mymodule2';

console.log(greeting);

// Modules will essentially help you to not have to include multiple script tags!

// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');
