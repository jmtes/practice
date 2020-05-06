// EXAMPLE A - NORMAL AND EXPECTED TYPEOF BEHAVIOR

console.log(typeof undefined); // "undefined"
console.log(typeof true); // "boolean"

// No distinction between integers and floats:
console.log(typeof 42); // "number"
console.log(typeof 4.2); // "number"

console.log(typeof '42'); // "string"
console.log(typeof { name: 'Juno' }); // "object"

console.log(typeof Symbol('s')); // "symbol"

console.log(typeof function foo () {}); // "function"

// EXAMPLE B - TYPEOF NULL

// NULL is special in the sense that it's buggy when combined with the TYPEOF operator:
console.log(typeof null); // "object"

// This bug has persisted for nearly two decades and will likely never be fixed.

// EXAMPLE C - THE PROPER WAY TO CHECK FOR A NULL TYPE

var a = null;

if (!a && typeof a === 'object') {
  console.log("It's null!");
}

// NULL is the only primitive value that both is falsy and returns 'object' from the TYPEOF check!

// EXAMPLE D - FUNCTIONS

// Line 15 would have you think that a function is a top-level built-in type in JS.
// However, a function is actually a "subtype" of the object type.
// Specifically, a function is referred to as a "callable object", meaning it has an internal [[Call]] property that allows it to be invoked.

// Because functions are actually objects, they can have properties!

// For example, function objects have a length property set to the number of formal parameters it was declared with:
function bar (x, y) {
  // Do stuff
}

console.log(bar.length); // 2

// EXAMPLE E - ARRAYS

console.log(typeof [1, 2, 3]); // object

// Arrays can also be thought as a "subtype" of the object type.
// Specifically, they are objects that are numerically indexed (as opposed to just being string-keyed) and maintain an automatically updated length property.
