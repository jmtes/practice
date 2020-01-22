// GLOBAL SCOPE
// var is a function scope declaration, meaning you can have a different variable of the same name inside of a function than on the outside. The two variables do not affect each other.
var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope', a, b, c);
// }

// test();

// BLOCK LEVEL SCOPE (Anything wrapped in curly braces)
// if (true) {
//   // Block scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope', a, b, c);
// }

for (let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
  // Using let in the for loop conditions allows it the a variable in the global scope to remain unchanged.
  // If var were used, the console log at the bottom would print 10 as the value of a.
}

console.log('Global Scope', a, b, c);
// If Block Level Scope code is uncommented, 4 should be printed as the value of a.
// let and const keep variables in scope.
// Using var is a security risk and it just causes confusion if you have a variable in the global scope and a variable of the same name inside a block.

// let and const have a block level scope, var has a function (global) scope.

// BOTTOM LINE: DO NOT USE var!!! EVER!!!