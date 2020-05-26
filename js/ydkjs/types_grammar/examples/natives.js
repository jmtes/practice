// EXAMPLE A - ARE NATIVES CONSTRUCTORS?

// The following doesn't create a primitive string value "abc" by itself, but rather with an object wrapper around it:
var a = new String('Hello world');

// These objects are not their own special types, but are subtypes of the object type:

console.log(typeof a); // object (not string!)

console.log(a instanceof String); // true, this means that somewhere in the [[Prototype]] chain of a, there exists the object pointed to by String.prototype .
console.log(a instanceof Object); // true

console.log(a); // String {"Hello world"}
console.log(a.toString()); // "Hello world"
console.log(Object.prototype.toString.call(a)); // "[object String]"
