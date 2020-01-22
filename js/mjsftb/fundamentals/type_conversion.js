let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (false).toString();

// String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // NaN
val = Number([1, 2, 3]); // NaN

val = parseInt('100.30'); // Returns 100 because it rounds
val = parseFloat('100.30'); // Returns 100.3, no trailing zeroes

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); Only works on strings
console.log(val.toFixed());

// Type Coercion
let val1 = 5;
let val2 = 6;
let sum = val1 + val2; // Returns 11 as a number

val1 = '5';
sum = val1 + val2; // Returns 56 as a string. val2 was made a string
sum = Number(val1 + val2); // Returns 56 as a number

console.log(sum);
console.log(typeof sum);