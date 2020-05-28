// EXAMPLE A - EXPLICIT VS. IMPLICIT COERCION

var a = 42;

// This coercion occurs implicitly because the + operator combined with at least one of the operands being a string will insist on the operation being a string concatenation, forcing the numeric value 42 to be coerced into the string "42":
var b = a + '';

// This is an example of explicit coercion because the String() function makes it obvious that you're taking the value of a and coercing it to a string:
var c = String(a);

// EXAMPLE B - TOSTRING()

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

// EXAMPLE C - TOPRIMITVE AND TONUMBER

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
