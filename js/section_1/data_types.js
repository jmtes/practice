/* PRIMITIVE DATA TYPES
  - Stored directly in the location the variable accesses
  - Stored on the stack
  - Accessed by its actual value
   
  - String, Number, Boolean, Null, Undefined, Symbols (ES6)
*/

/* REFERENCE DATA TYPES / OBJECTS
  - Accessed by reference
  - Data is not actually stored in the variable. The variable simply points to it.
  - Objects that are stored on the heap
  - A pointer to a location in memory
   
  - Arrays, Object Literals, Functions, Dates, and Pretty Much Everything Else
/*

/* 
  JS is a dynamically typed language!
    - Types are associated with values an not variables
    - The same variable can hold multiple types
    - We do not need to specify types
    - Supersets of JS and addons allow for static typing (Typescript, Flow)
*/

// PRIMITIVE TYPES

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
// Running typeof on car will tel you it's of type 'object'. This is quite literally a bug and not a feature.
const car = null;
// Undefined
// This is what variables are by default.
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES

// Array
const hobbies = ['movies', 'music'];
// Object Literal
const address = {
  city: 'Boston',
  state: 'MA'
}
// Date
const today = new Date();

console.log(typeof today);