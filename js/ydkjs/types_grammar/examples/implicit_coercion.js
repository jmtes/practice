// EXAMPLE A - THE + OPERATOR

function exampleA () {
  // Consider:
  var a = [1, 2];
  var b = [3, 4];

  console.log(a + b); // 1,23,4

  // Neither of the operands was a string, but clearly they were both coerced into strings and then the string concatenation occurred.

  // When + receives an object for either operand, it first calls ToPrimitive on the value, which then calls the [[DefaultValue]] algorithm.
  // The valueOf() operation on both arrays will fail to produce a simple primitive, so it falls back on the toString() representation.
  // The arrays became "1,2" and "3,4" and the + performs a string concatenation.

  // IMPLICIT VS EXPLICIT

  // Consider:
  var c = {
    valueOf: function () { return 42; },
    toString: function () { return 4; }
  };

  console.log(c + ''); // 42 because valueOf() was invoked
  console.log(String(c)); // 4 because toString() was invoked

  // STRING TO NUMBER
  var d = '24' - 0;
  console.log(`${typeof d}: ${d}`); // number: 24
}

// EXAMPLE B - BOOLEANS TO NUMBERS

function exampleB () {
  // Consider the following function which returns true only if exactly one of its arguments is truthy:
  var onlyOne = function (a, b, c) {
    console.log(!!((a && !b && !c)) || (!a && b && !c) || (!a && !b && c));
  };

  var a = true;
  var b = false;

  onlyOne(a, b, b); // true
  onlyOne(b, a, b); // true
  onlyOne(a, b, a); // false

  // What if we needed this utility to be able to handle four, five, or twenty flags in the same way? It would be difficult to implement code that would handle all the permutations of comparisons.

  // This is where coercing booleans to numbers (0 or 1) can greatly help:
  onlyOne = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      // Skip falsy values. Same as treating them as 0s, but avoids NaNs.
      if (arguments[i]) {
        sum += arguments[i];
      }
    }
    
    console.log(sum === 1);
  };

  onlyOne(b, a); // true
  onlyOne(b, a, b, b, b); // true
  onlyOne(b, b); // false
  onlyOne(b, a, b, b, b, a); // false
}

exampleB();
