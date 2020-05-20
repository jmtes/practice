// EXAMPLE A - STRINGS ARE NOT JUST ARRAYS OF CHARACTERS

var str = 'heron';
var arr = ['h', 'e', 'r', 'o', 'n'];

// Both strings and arrays have length properties, are index-able, and can be concatenated:

console.log(str.length); // 5
console.log(arr.length); // 5

console.log(str.indexOf('e')); // 1
console.log(arr.indexOf('e')); // 1

var strConcat = str.concat('s');
var arrConcat = arr.concat(['s']);
console.log(strConcat); // herons
console.log(arrConcat); // ["h", "e", "r", "o", "n", "s"]

console.log(str === strConcat); // false
console.log(arr === arrConcat); // false

console.log(str); // heron
console.log(arr); // ["h", "e", "r", "o", "n"]

// However, arrays are mutable whereas strings aren't:

str[3] = 'a';
arr[3] = 'a';

console.log(str); // heron
console.log(arr); // ["h", "e", "r", "a", "n"]

// Note: Rather than using the array-like notation in Line 27, the correct approach to accessing a certain character position in a string is the following:
console.log(str.charAt(3)); // o

// EXAMPLE B - "BORROWING" ARRAY METHODS FOR STRINGS

str = 'ultra';

console.log(str.join); // undefined
console.log(str.map); // undefined

var strJoined = Array.prototype.join.call(str, '-');
var strMapped = Array.prototype.map.call(str, function (char) {
  return char.toUpperCase() + '.';
}).join('');

console.log(strJoined); // u-l-t-r-a
console.log(strMapped); // U.L.T.R.A.

// The reverse(...) array method can't be borrowed for strings because it performs in-place modifications and strings are immutable.

console.log(str.reverse); // undefined

try {
  const strReversed = Array.prototype.reverse.call(str);
  console.log(strReversed);
} catch (err) {
  console.log(err); // TypeError: Cannot assign to read only property '0' of object '[object String]'
}

// The following is a workaround for this:
const strReversed = str.split('').reverse().join('');

console.log(strReversed); // artlu

// WARNING: This approach works for simple strings, but not for strings with complex unicode characters in them. You will need more sophisticated library utilities that are unicode-aware.
