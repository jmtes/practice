const firstName = 'William';
const lastName = 'Johnson';
age = 36;
const str = 'Hello there my name is Juno';
const tags = 'web design,web development,web programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Appending
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length; // Since this is a property and not a method, you do not need a parentheses after length

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// You can treat strings like read-only arrays!
val = firstName[0]; // Returns W

// Find index of a character
val = firstName.indexOf('2'); // Returns -1
val = firstName.indexOf('l'); // Returns 2, which is index of first occurence of l
val = firstName.lastIndexOf('l'); // Returns 3

// Find the character at an index
val = firstName.charAt('2'); // Returns l
// Get last char
val = firstName.charAt(firstName.length - 1);

// Substrings
val = firstName.substring(0, 4);

// Slicing
val = firstName.slice(0, 4);
val = firstName.slice(-3); // Returns iam

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Juno', 'Julien');

// includes()
val = str.includes('Hello'); // Returns true
val = str.includes('savior'); // Returns false

console.log(val);