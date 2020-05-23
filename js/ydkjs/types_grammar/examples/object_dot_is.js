// EXAMPLE A

var a = 2 / 'foo';
var b = -3 * 0;

console.log(Object.is(a, NaN)); // true
console.log(Object.is(b, -0)); // true

console.log(Object.is('a string', NaN)); // false
console.log(Object.is(b, 0)); // false

// PRE-ES6 POLYFILL FOR Object.is(...)

if (!Object.is) {
  Object.is = function (v1, v2) {
    // Test for -0
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2;
    }
    // Test for NaN
    if (v1 !== v1) {
      return v2 !== v2;
    }
    // Everything else
    return v1 === v2;
  };
} else {
  console.log('ES6, baby');
}
