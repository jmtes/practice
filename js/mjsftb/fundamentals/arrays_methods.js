// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers); // returns true
val = Array.isArray('hey'); // returns false
// Useful for once you start working with the DOM! 

// Get single value
val = numbers[3]; // returns 23
val = numbers[0]; // returns 43

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36); // returns 5

// // MUTATING ARRAYS
// // Add value to end
// numbers.push(250);
// // Add value to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Remove values in a range
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
// val = fruit.sort();
// val = numbers.sort(); // sorts by first digit
// // Use the compare function
// val = numbers.sort(function(x, y){
//   return x - y;
// });
// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });
// Sorting can be sped up by just creating a TypedArray
// var numArray = new Uint32Array([43, 56, 33, 23, 44, 36, 5]);
// console.log(numArray.sort());
// Just do this because you have no fuckin clue how the comparison function works LOL

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50); // returns 43

console.log(numbers);
console.log(val);