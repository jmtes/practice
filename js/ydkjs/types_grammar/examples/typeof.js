// EXAMPLE A - NORMAL AND EXPECTED TYPEOF BEHAVIOR

// The typeof opertor always returns a string.

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

// EXAMPLE F - UNDEFINED VS UNDECLARED

// Some undefined variables:

var b;

console.log(typeof b); // "undefined"

var c = 42;
var d;

c = d;

console.log(typeof c); // "undefined"
console.log(typeof d); // "undefined"

// An undeclared variable f:

try {
  console.log(f);
} catch (e) {
  console.log(e); // ReferenceError: f is not defined
}

// The confusion regarding the distinction between undefined and undeclared variables stems from the ReferenceError message.

// It's easy and reasonable to confuse "f is not defined" with "f is undefined".
// Really, the message should say something like "f is not found" or "f is not declared"!

// The following TYPEOF behavior further reinforces the confusion:

var g;

console.log(typeof g); // "undefined"
console.log(typeof h); // "undefined"

// As you can see, it returns "undefined" even for undeclared variables.

// Note: No error was thrown in Line 92 because of a safety guard in the behavior of TYPEOF. It would certainly be less confusing were this not the case though.

// EXAMPLE G - SAFELY CHECKING FOR VARIABLE EXISTENCE

// Don't do it like this!
try {
  if (DEBUG) {
    console.log('In debug mode');
  }
} catch (err) {
  console.log(err); // ReferenceError: DEBUG is not defined
}

// Leverage the TYPEOF safeguard!
if (typeof DEBUG !== 'undefined') {
  console.log('In debug mode');
} else {
  console.log('Not in debug mode');
}
// Not in debug mode

// This sort of check is useful even if you're not dealing with user-defined variables like DEBUG.

// You can use it to do a feature check for a built-in API too:

if (typeof atob === 'undefined') {
  console.log('Gotta polyfill!');
  // Define atob here
}

// Keep in mind that if you're defining a polyfill for a function in case it doesn't already exist, you want to avoid using VAR to make the declaration if you're checking for it in the global scope.
// Because VAR is function-scoped, the declaration will be hoisted to the top of the (global) scope no matter what, even if the function already exists and causes the IF condition to not pass!

// In some browers and for some special types of built-in global variables (often called "host objects"), this duplicate declaration may throw an error.
// To be safe just don't use VAR!
