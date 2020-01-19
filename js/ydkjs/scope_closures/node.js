// Node has added support for ES6 modules.
// However, it has always supported a module format known as Common JS:

var studentName = 'Laura';

function hello () {
  console.log(`Hello, ${studentName}!`);
}

hello(); // "Hello, Laura!"

module.exports.hello = hello;

// Node essentially wraps such code in a function such that the var and function declarations are contained in that module's scope, NOT treated as global variables.

// It's helpful to think of the above code when processed by Node sort of like this (illustrative, not actual):
function Module (module, require, __dirname) {
  var studentName = 'Laura';

  function hello () {
    console.log(`Hello, ${studentName}!`);
  }

  hello();

  module.exports.hello = hello;
}

// You can see why the studentName and hello identifiers are not global, but rather declared in the module scope.
