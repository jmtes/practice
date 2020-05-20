// EXAMPLE A - EXPONENT FORM

// You can declare numbers with the following exponent form:
var a = 5E10;
var b = 5E-2;

console.log(a); // 50000000000
console.log(b); // 0.05

console.log(a.toExponential()); // 5e+10
console.log(b.toExponential()); // 5e-2

// Extremely large or small numbers will be output in exponential form by default.

var c = a * a;
var d = 0.00000000000001 / b;

console.log(c); // 2.5e+21
console.log(d); // 1.9999999999999998e-13

// EXAMPLE B - toFixed(...)

var e = 42.59;

// Numbers will be rounded:
console.log(e.toFixed(0)); // "43"
console.log(e.toFixed(1)); // "42.6"
console.log(e.toFixed(2)); // "42.59"
console.log(e.toFixed(3)); // "42.590"

// The output is a STRING representation of the number.

// EXAMPLE C - toPrecision(...)

console.log(e.toPrecision(1)); // "4e+1"
console.log(e.toPrecision(2)); // "43"
console.log(e.toPrecision(3)); // "42.6"

// EXAMPLE D - INVOKING METHODS WITH NUMBER LITERALS

// Because `.` is a valid numeric character, it will first be interpreted as part of the number literal rather than a property accessor.

// This is invalid syntax!
// 42.toFixed(3);

// These are valid though!
(42).toFixed(3);
0.42.toFixed(3);
42..toFixed(3);
42 .toFixed(3); // This is just confusing. Don't do it.

// Line 49 works because the first `.` is part of the number and the second `.` is the property operator.

// EXAMPLE E - NUMBER BASES

// Hexadecimal
console.log(0xf3, 0Xf3); // 243 243

// Binary
console.log(0b11110011, 0B11110011); // 243 243

// Octal
console.log(0o363, 0O363); // 243 243

// Never use the octal form with a capital O. It looks too confusing next to the 0.
// It's good practice to always use the lowercase forms for these numbers.

// EXAMPLE F - FLOATING POINT FRICKERY

// The following is an example of the most infamous side effect of using binary floating point numbers:

console.log(0.1 + 0.2 === 0.3); // false, huh?

// The representations for 0.1 and 0.2 in binary floating point are not exact.
// Thus, when they're added, the result comes out to a really close 0.30000000000000004, which fails the comparison because it's not exactly 0.3 .

// We can use Number.EPSILON to compare two numbers for "equality" with a rounding error tolerance:

function isCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

console.log(isCloseEnoughToEqual(0.1 + 0.2, 0.3)); // true, yay!

// Number.EPSILON can be polyfilled for pre-ES6 environments like so:

if (!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52);
} else {
  console.log('ES6, baby');
}

// EXAMPLE G - TESTING FOR INTEGERS

console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.0)); // true
console.log(Number.isInteger(42.1)); // false

// To polyfill Number.isInteger(...) for pre-ES6 environments:

if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num === 'number' && num % 1 === 0;
  };
} else {
  console.log('ES6, baby');
}

// Testing if a value is a SAFE integer:

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// Number.isSafeInteger can be polyfilled like this in pre-ES6 environments, assuming you've also polyfilled Number.isInteger(...) and Number.MAX_SAFE_INTEGER:

if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (num) {
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}

// EXAMPLE H - FORCING A NUMBER TO BE A 32-BIT SIGNED INT

var f = 2147483648;

f = f | 0;

console.log(f); // -2147483648

// Line 126 works because the | bitwise operator only works for 32-bit int values. It can only pay attention to 32 bits and any other bits will be lost.
// Then ORing with 0 basically performs a no-op.

// Special values such as NaN and Infinity are not 32-bit safe. When they're passed to a bitwise operator, they will simply become the +0 value.
