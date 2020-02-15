var users = ['Caesar', 'Harry', 'Adriel'];

// EXAMPLE A - LOOPING THROUGH AN ARRAY WITH FOR...OF

for (let user of users) {
  console.log(user);
} // Caesar Harry Adriel

// EXAMPLE B - MANUAL ARRAY ITERATION

// Here we're using a symbol to get at the @@iterator internal property of an object:
var it = users[Symbol.iterator]();

// You're always going to want to reference such special properties by symbol name reference instead of by the special value it may hold.

// Also, despite the name's implications, @@iterator is NOT the iterator object!
// It's a function that RETURNS the iterator object!

console.log(it.next()); // { value: "Caesar", done: false }
console.log(it.next()); // { value: "Harry", done: false }
console.log(it.next()); // { value: "Adriel", done: false }
console.log(it.next()); // { value: undefined, done: true }

// The return value of an iterator's next() call is an object that contains two properties:
// The value property is the current iteration value.
// The done property is a boolean that indiciates whether or not there are more items to iterate through.

// EXAMPLE C - DEFINING A CUSTOM ITERATOR FOR AN OBJECT

var user = {
  name: 'Yeong-Suk',
  birthday: 'February 4',
  location: 'Cleveland OH'
};

Object.defineProperty(user, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var obj = this;
    var idx = 0;
    var keys = Object.keys(obj);
    return {
      next: function () {
        return {
          value: obj[keys[idx++]],
          done: (idx > keys.length)
        };
      }
    };
  }
});

// Iterating user manually:
it = user[Symbol.iterator]();
console.log(it.next()); // { value: "Yeong-Suk", done: false }
console.log(it.next()); // { value: "February 4", done: false }
console.log(it.next()); // { value: "Cleveland OH", done: false }
console.log(it.next()); // { value: undefined, done: true }

// Iterating user with for...of
for (const value of user) {
  console.log(value);
}
// Yeong-Suk
// February 4
// Cleveland OH

// NOTE: We used Object.defineProperty() to define out custom @@iterator mostly so we could make it non-enumerable.
// It could have been declared directly in the object literal using the symbol as a computed property name though (see Example D below).

// Anyway, this custom iteration is just a simply value-by-value one, but you can define arbitrarily complex iterations for your custom data structures as you see fit!

// EXAMPLE D - "INFINITE" ITERATORS

// You can generate "infinite" iterators that never "finish" and always return a new value.
// This is helpful for generating random numbers, an incremented value, unique identifiers, etc.

// Don't use such iterators with an unbounded FOR...OF loop though!

var randoms = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return { value: Math.random() };
      }
    };
  }
};

var randomsPool = [];

for (var n of randoms) {
  randomsPool.push(n);

  // Don't proceed unbounded!
  if (randomsPool.length === 100) break;
}

console.log(randomsPool); // Array of length 100
