global.studentName = 'Ahmad';

function hello () {
  console.log(`Hello, ${studentName}!`); // We don't need to invoke the variable using `global`.
}

hello(); // "Hello, Ahmad!"

module.exports.hello = hello;

// IMPORTING THE MODULE AND GETTING/SETTING THE GLOBAL VARIABLE

// [jmtesoro@marcom scope_closures]$ node
// > module = require('./node-globals');
// Hello, Ahmad!
// { hello: [Function: hello] }
// > module.hello;
// [Function: hello]
// > module.hello();
// Hello, Ahmad!
// undefined
// > global.studentName;
// 'Ahmad'
// > global.studentName = 'Laura';
// 'Laura'
// > module.hello();
// Hello, Laura!
// undefined
// >
