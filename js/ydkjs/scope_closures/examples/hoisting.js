// FUNCTION HOISTING

// All function declarations will hoist to the top of the enclosing scope along with their associated function references:

greeting(); // "Hello!"

function greeting () {
  console.log('Hey!');
}

// Function expression assignments do not exhibit this same behavior.
// If they are made with var, the identifier will certainly be hoisted, but the assignment will not. It will be initialized to 'undefined' and will stay "undefined" until the program reaches the line at which it is assigned the function reference.
// If they are made with let/const, the identifier will also be hoisted without the assignment. However, it will not be initialized to anything. It will be in the TDZ until the program reaches the line at which it is assigned the function reference.

// hello(); // Throws a TypeError because it is trying to invoke hello, which is currently of type "undefined", as a function.
// A ReferenceError isn't thrown because the hello identifier was indeed hoisted to the top of the scope.

var hello = function hello () {
  console.log('Hello!');
};
