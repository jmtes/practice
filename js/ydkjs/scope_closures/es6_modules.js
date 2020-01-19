var studentName = 'Anastasia';

function hello () {
  console.log(`Hello, ${studentName}!`);
}

hello(); // "Hello, Anastasia!"

// This line will throw an error unless you're using Babel/Webpack lol
// export hello;

// Despite being declared at the top level of this module file, studentName and hello are not global variables.

// Instead, they are module-wide or module-global.
// They are not added to any global scope object, nor are they added to any accessible module-global object.

// This is not to say global variables cannot exist in programs that use ES6 modules. They simply don't get created by declaring variables in the top-level scope of a module.

// A module's top-level scope is descended from the global scope, almost as if the entire contents of the module were wrapped in a function.
// Thus, all variables that exist in the global scope (whether they're in the global object or not) are available as lexical identifiers inside the module's scope.
