// EXAMPLE A - EXPLICIT VS. IMPLICIT COERCION

function exampleA () {
  var a = 42;

  // This coercion occurs implicitly because the + operator combined with at least one of the operands being a string will insist on the operation being a string concatenation, forcing the numeric value 42 to be coerced into the string "42":
  var b = a + '';

  // This is an example of explicit coercion because the String() function makes it obvious that you're taking the value of a and coercing it to a string:
  var c = String(a);
}

// EXAMPLE B - TOSTRING()

function exampleB () {
  var user = {
    name: 'Angelique',
    location: 'London, UK',
    interests: ['bowling', 'movies', 'history']
  };

  // toString() can be called either explicitly or implicitly.

  console.log(user.toString()); // "[object Object]"
  console.log(user + ''); // "[object Object]"
  console.log(`${user}`); // "[object Object]"

  // Here we define a custom toString() method for user:
  user.toString = function () {
    return `${this.name} from ${this.location}`;
  };

  console.log(user.toString()); // Angelique from London, UK
  console.log(user + ''); // Angelique from London, UK
  console.log(`${user}`); // Angelique from London, UK

  // Overridden toString() for arrays:
  console.log(user.interests.toString()); // bowling,movies,history
  console.log(user.interests + ''); // bowling,movies,history
  console.log(`${user.interests}`); // bowling,movies,history
}

// EXAMPLE C - TOPRIMITVE AND TONUMBER

function exampleC () {
  var user2 = {
    name: 'Cleo',
    location: 'Omaha, NE',
    age: 26,
    valueOf: function () {
      return this.age;
    }
  };

  var user3 = {
    name: 'Leon',
    location: 'Boise, ID',
    age: 29,
    toString: function () {
      return `${this.age}`;
    }
  };

  var d = [2, 3];
  d.toString = function () {
    return this.join('');
  };

  console.log(Number(user2)); // 26
  console.log(Number(user3)); // 29
  console.log(Number(d)); // 23

  console.log(Number('')); // 0
  console.log(Number([])); // 0
  console.log(Number(['abc'])); // NaN
}

// EXAMPLE D - EXPLICIT DATE TO NUMBER COERCION

function exampleD () {
  var d = new Date();
  var timestamp;

  // Using the unary + operator:
  timestamp = +d;
  console.log(`${typeof timestamp}: ${timestamp}`); // number: 1590691076148

  // Using getTime():
  timestamp = d.getTime();
  console.log(`${typeof timestamp}: ${timestamp}`); // number: 1590691076148

  // Using ES5's Date.now():
  timestamp = Date.now();
  console.log(`${typeof timestamp}: ${timestamp}`); // number: 1590691076148

  // Polyfill for Date.now():
  if (!Date.now) {
    Date.now = function () {
      return +new Date();
    };
  } else {
    console.log('ES5, baby');
  }
}

// EXAMPLE E - BITWISE "COERCION"

function exampleE () {
  // Consider that the | (bitwise OR) operator used in the otherwise no-op idiom `0 | x`, which essentially only does the ToInt32 conversion:
  console.log(0 | -0); // 0
  console.log(0 | NaN); // 0
  console.log(0 | Infinity); // 0
  console.log(0 | -Infinity); // 0

  // These special numbers aren't 32-bit representable, so ToInt32 just specifies 0 as the result from these values.

  // Getting a two's complement with ~:
  console.log(~42); // -43

  // ~ essentially performs the operation -(x + 1).
  // The only value that you can perform that operation on that will produce a 0 (-0, technically) is -1.

  // In other words, ~ will produce a falsy 0 value for the -1 input value, and a truthy number for any other number value.

  // In the following code, ~ takes the return of indexOf() and transforms it.
  var str = 'Garage Drone';

  var substr = 'door';

  // For the failure -1 input we get the falsy 0:
  if (~str.indexOf(substr)) {
    console.log(`Found '${substr}' in '${str}'!`);
  } else {
    console.log('Substring not found');
  }
  // Substring not found

  substr = 'rage';

  // For every other input we get a truthy value:
  if (~str.indexOf(substr)) {
    console.log(`Found '${substr}' in '${str}'!`);
  } else {
    console.log('Substring not found');
  }
  // Found 'rage' in 'Garage Drone'!

  // Doing this is cleaner than using expressions like >=0 or === -1 in your conditionals.

  // Truncating decimals:
  console.log(~~49.6); // 49
  console.log(49.6 | 0); // 49
  console.log(~~-49.6); // -49, keep in mind this is truncating and not rounding down!
}

// EXAMPLE F - PARSEINT()

function exampleF () {
  var a = '42';
  var b = '42px';

  console.log(parseInt(a)); // 42
  console.log(Number(a)); // 42

  // Parsing a numeric value out of a string is tolerant of non-numeric characters, whereas coercion is not tolerant and fails, resulting in a NaN value:
  console.log(parseInt(b)); // 42
  console.log(Number(b)); // NaN

  // Parsing stops at the first non-numeric character:
  var e = '4px 0';
  console.log(parseInt(e)); // 4

  // There's also a parseFloat(...), which pulls a floating point number from a string:
  var c = '0.25rem';

  console.log(parseFloat(c)); // 0.25

  // Specifying a radix:
  var d = parseInt('1010100', 2); // Binary
  console.log(d); // 84

  d = parseInt('132', 8); // Octal
  console.log(d); // 90

  d = parseInt('0x4e', 16); // Hexadecimal
  console.log(d); // 78

  // Hexadecimal is automatically used if the string is prefixed with "0x", no need to give a radix arg:
  d = parseInt('0x28');
  console.log(d); // 40
}

// EXAMPLE G - EXPLICIT BOOLEAN COERCIONS

function exampleG () {
  // Say you want to force a true/false value coercion in the JSON serialization of a data structure:
  var a = [
    1,
    function () {},
    2,
    function () {}
  ];

  var aJSON = JSON.stringify(a);
  console.log(aJSON); // [1,null,2,null]

  aJSON = JSON.stringify(a, function (key, val) {
    if (typeof val === 'function') {
      // Force ToBoolean coercion of the function
      return !!val;
    } else {
      return val;
    }
  });
  console.log(aJSON); // [1,true,2,true]
}

exampleG();
