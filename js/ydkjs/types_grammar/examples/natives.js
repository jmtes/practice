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

// EXAMPLE B - USING FUNCTION()

var foo = new Function('a', 'return a * 2');

// The above is equivalent to:
// foo = function (a) {
//   return a * 2;
// };

var b = foo(2);

console.log(b); // 4

// EXAMPLE C - USING REGEXP(...)

var name = 'Kiyoshi';
var namePattern = new RegExp('\\b(?:' + name + ')+\\b', 'ig');

// The above is equivalent to:
// namePattern = /\\b(?:Kiyoshi)+\\b/ig;

var someText = 'Bokurano \bKiyoshi\b Temapark';

var matches = someText.match(namePattern);
console.log(matches); // ["Kiyoshi"]

// EXAMPLE D - DATE.NOW() POLYFILL

if (!Date.now) {
  Date.now = function () {
    return (new Date()).getTime();
  };
} else {
  console.log('ES5, baby');
}

// EXAMPLE E - USING DATE()

// Calling Date() with the new keyword returns a date object:
var c = new Date();

console.log(c); // Mon May 25 2020 19:55:07 GMT-0700 (Pacific Daylight Time)

console.log(typeof c); // object
console.log(Object.prototype.toString.call(c)); // "[object Date]"

// Calling it without the new keyword returns a string:
var d = Date();

console.log(d); // Mon May 25 2020 19:56:03 GMT-0700 (Pacific Daylight Time)

console.log(typeof d); // string
console.log(Object.prototype.toString.call(d)); // "[object String]"

// EXAMPLE F - USING ERROR()

function bar (x) {
  if (!x) {
    throw new Error('x was not provided.');
  }
  console.log(x);
}

bar('Broken Backs and Bad Balloons');

try {
  bar(null);
} catch (err) {
  console.log(err); // Error: x was not provided.

  console.log(err.message); // x was not provided.

  console.log(err.stack); // Same output as Line 85

  console.log(err.toString()); // Error: x was not provided.
}

// EXAMPLE G - USING PREDEFINED ES6 SYMBOLS

var obj = {};

obj[Symbol.iterator] = function () {
  // Iterate stuff
};

console.log(obj); // {Symbol(Symbol.iterator): ƒ}

// EXAMPLE H - MAKING CUSTOM SYMBOLS

var mySym = Symbol('my symbol');

console.log(mySym); // Symbol(my symbol)
console.log(mySym.toString()); // "Symbol(my symbol"
console.log(typeof mySym); // symbol

obj = {};
obj[mySym] = 'season';

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(my symbol)]
