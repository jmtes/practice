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

// exampleA();

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

// exampleB();

// EXAMPLE C - THE RESULTS OF || AND &&

function exampleC () {
  var a = 42;
  var b = 'abc';
  var c = null;
  var d;

  // The || and && operators do not necessarily result in a true/false boolean value.
  // Rather, it selects the value of one of the two operands.

  // Selection Rules for ||:

  // If the left-hand value is truthy, select it.
  console.log(a || b); // 42
  console.log(b || c); // "abc"

  // If the left-hand value is falsy but the right-hand value is truthy, select the right-hand value.
  console.log(d || b); // "abc"

  // If both values are falsy, select the right-hand value.
  console.log(c || d); // undefined
  console.log(d || c); // null

  // Selection Rules for &&:

  // If the left-hand value is falsy, select it.
  console.log(c && a); // null
  console.log(d && c); // undefined

  // If the left-hand value is truthy but the right-hand value is falsy, select the right-hand value.
  console.log(b && d); // undefined

  // If both values are truthy, select the right-hand value.
  console.log(a && b); // "abc"
  console.log(b && a); // 42

  a || b;
  // is roughly equivalent to:
  a ? a : b;

  a && b;
  // is roughly equivalent to:
  a ? b : a;
}

// exampleC();

// EXAMPLE D - USING || TO PROVIDE DEFAULT VALUES

function exampleD () {
  // The behavior outlined in Example C is often used to test a variable and if it has a falsy or no value, it provides a backup default.
  function foo (a, b) {
    a = a || 'street';
    b = b || 'rats';

    console.log(a + ' ' + b);
  }

  foo(); // street rats
  foo('virtually', 'alone'); // virtually alone

  // Be careful though:
  foo('20xx', ''); // 20xx rats

  // '' is a falsy value, so the test in Line 126 fails and the 'rats' default value is substituted, even though the intent was to have the explicitly passed '' be the value assigned to b.

  // The || idiom is very helpful, but you have to use it only in cases where ALL falsy values should be skipped.
  // Otherwise, you'll need to be more explicit in your test and probably use a ternary ? : instead.
}

// exampleD();

// EXAMPLE E - GUARDING EXPRESSIONS WITH &&

function exampleE () {
  function foo () {
    console.log('a is truthy');
  }

  var a = 42;

  a && foo(); // a is truthy

  a = null;

  a && foo(); // nothing logged here
}

// exampleE();

// EXAMPLE F - FALSE POSITIVES WITH ==

function exampleF () {
  // Almost any crazy coercion you're likely to run into will boil down to these gotcha coercions:
  console.log('0' == false); // true
  console.log(false == 0); // true
  console.log(false == ''); // true
  console.log(false == []); // true
  console.log('' == 0); // true
  console.log('' == []); // true
  console.log(0 == []); // true

  // Here, ! coerces [] to a boolean and flips the parity on the right side, thus translating the expression to [] = false, which as we've ssen in Line 169 evaluates to true.
  console.log([] == ![]); // true

  // Here, the right-hand side goes through a ToPrimitive coercion. Since the valueOf() for array values just returns the array itself, coercion falls to stringifying the array.
  // [2] will become "2", which is then coerced to a number.
  // [null] just becomes "".
  console.log(2 == [2]); // true
  console.log('' == [null]); // true

  // Here, "\n" (and any other whitespace combination) is coerced to the number 0.
  console.log(0 == '\n'); // true
}

exampleF();
