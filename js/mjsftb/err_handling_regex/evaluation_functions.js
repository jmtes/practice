// Regex is commonly used for form validation and pulling things with certain patterns out of bodies of text.

// There are several functions in JS that are used to evalutate regex.

let re;

// Regular expressions in JS are denoted by forward slashes.
re = /hello/;

// Logs re with the slashes around it.
// console.log(re);
// Logs re without the slashes around it.
// console.log(re.source);

// exec() returns results in an array if there are any matches, otherwise it returns null.
let result = re.exec('hello world hello'); // Returns an array containing the match, the groups, the index at which the match was found, and the input.
// result = re.exec('hi world'); // Returns null

// console.log(result);
// console.log(result[0]); // Outputs first match
// console.log(result.index);
// console.log(result.input);

// test() tests for a match. It returns true if one is found and false otherwise.
result = re.test('Hello'); // Returns false
console.log(result);

// You may want to make the matching case insensitive, which is when you'd want to use the i flag:
re = /hello/i;

result = re.test('Hello'); // Returns true now.
console.log(result);

// The g flag specifies a global search. This will search for all instances of a regular expression within a given input rather than just the first match.
re = /hello/gi;

// match() returns a result array or null. It is very similar to exec() except it is invoked with the body you want to search and you pass the regular expression as a parameter.
let str = 'Hello there hello';
result = str.match(re);
console.log(result);

// search() returns the index of the first match. If no match is found, it returns -1.
str = 'Juno Hello There';
result = str.search(re);
console.log(result);

// replace() returns a new string with some or all matches of a pattern. It is invoked with the string you want to search for patterns in and you pass it the regular expression and what you want to replalce the matches with as parameters.
str = 'Hello There Hello';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
