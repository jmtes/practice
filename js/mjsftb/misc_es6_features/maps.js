// A map is an object that holds key-value pairs. Any value, whether it's an object reference type or a primtive data type, can be used as a key or a value.

const map1 = new Map();

// Set keys
const key1 = 'Some string';
const key2 = {};
const key3 = function () {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size); // "3"

// Iterating through maps

// Loop using for...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
  // Some string = Value of key1
  // [object Object] = Value of key2
  // function () {} = Value of key3
}

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
  // Some string
  // {}
  // f () {}
}

for (let value of map1.values()) {
  console.log(value);
}

// Maps are kind of like dictionaries in Python except data types other than strings can be used as keys.

// Loop with forEach
map1.forEach(function (value, key) {
  console.log(`${key} = ${value}`);
});

// Convert to array

// Create an array of key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);
// Outputs an array of 2-item arrays, one for each pair and containing its key and value.

// Create an array of the values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
