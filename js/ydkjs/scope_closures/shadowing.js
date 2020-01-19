// EXAMPLE OF SHADOWING AND GLOBAL UNSHADOWING TRICK
var studentName = 'Liesel';

function printStudent (studentName) {
  // The studentName declared in this scope block overrides that of the outer scope.
  // This is because variable "lookup" starts with the current scope and only continues if no such identifier is found.
  // Because studentName was found in this scope, the studentName in the outer scope is never even considered.
  // Thus, the reassignment to studentName only affects the studentName in this scope. The studentName in the outer scope is unaffected.
  // The studentName parameter in this scope is shadowing the global studentName.
  studentName = studentName.toUpperCase();
  console.log(studentName);
  console.log(window.studentName); // Using global window object to get value of shadowed global variable (see below for more)
}

printStudent('Ivan'); // "IVAN"
printStudent(studentName); // "LIESEL"
console.log(studentName);

// The global unshadowing trick only works for accessing global scope variables that were declared with var or function!
var one = 1;
let two = 2;
const three = 3;
class Four {}

console.log('Accessing var with regular lexical identifier: ', one); // "1"
console.log('Accessing var with global object: ', window.one); // "1"
console.log('Accessing let with regular lexical identifier: ', two); // "2"
console.log('Accessing let with global object: ', window.two); // "undefined"
console.log('Accessing const with regular lexical identifier: ', three); // "2"
console.log('Accessing const with global object: ', window.three); // "undefined"
console.log('Accessing class with regular lexical identifier: ', Four); // "2"
console.log('Accessing class with global object: ', window.Four); // "undefined"

// Nonglobal variables are completely inaccessible from an inner scope where they've been shadowed.
var special = 42;

function lookingFor (special) {
  // `special` in this scope is inaccessible from
  // inside keepLooking()
  function keepLooking () {
    var special = 3.14;
    console.log(special);
    console.log(window.special);
  }

  keepLooking();
}

lookingFor('A sense of self');
// "3.14"
// "42"
// Notice that the string we passed into lookingFor() was ignored

// COPYING IS NOT ACCESSING
// In the below example, yappingFor's RAUCOUS variable is being shadowed by that of keepYapping.
// It may seem like you're able to access yappingFor's RAUCOUS from inside of keepYapping through the ANOTHER object, but really you're not. You're only accessing a copy of its value that was put into another container.
// The yappingFor RAUCOUS still cannot be accessed from inside keepYapping.
var raucous = 'sweetness';

function yappingFor (raucous) {
  var another = {
    raucous
  };

  function keepYapping () {
    var raucous = 'takeover';
    console.log(raucous);
    console.log(another.raucous);
    console.log(window.raucous);
  }

  keepYapping();
}

yappingFor('plywood');
// "takeover"
// "plywood"
// "sweetness"

// Even if you had passed an array/object rather than a primitive value, you still wouldn't be accessing the actual shadowed object itself.
// You'd be able to mutate it, sure, but mutating the contents of an object value via reference copy is NOT the same as lexically accessing the object variable itself. You're not using its original identifier.

var arr = [1, 2, 3];

function hibernate (arr) {
  var another = {
    arr
  };

  function keepHibernating () {
    var arr = [4, 5, 6]; // This shadows the arr in hibernate
    console.log('arr in the scope of keepHibernating: ', arr); // [4, 5, 6], the arr in this scope
    console.log('access of arr from the scope of hibernate via reference copy: ', another.arr);
    another.arr.push(10); // Mutates arr in hibernate via reference copy. You cannot access arr in hibernate with the `arr` identifier though because it's been shadowed.
    console.log('access of modified arr from the scope of hibernate: ', another.arr);
    console.log('the global arr: ', window.arr);
  }

  keepHibernating();
  console.log('arr in hibernate\'s scope accessed from hibernate after exec of keepHibernating, wherein it was mutated via reference copy: ', arr); // [7, 8, 9, 10]
}

hibernate([7, 8, 9]);

// EXAMPLE OF ILLEGAL SHADOWING

function something () {
  var special = 'Javascript';
  {
    let special = 42; // This works fine
    console.log(special); // "42"
  }
  console.log(special); // "Javascript"
}

something();

// This throws a syntax error saying special has already been declared!

// function another () {
//   let special = 'Python';
//   {
//     var special = 'snitch';
//     console.log(special);
//   }
// }

// This is because var puts a variable in the scope of the enclosing FUNCTION rather than just the enclosing BLOCK. Variable declarations made with var are hoisted to the top of the FUNCTION rather than the top of the BLOCK it's in.

// Alternatively, this code would work because the var in whatever would be hoisted just to the top of whatever, rather than to the top of another where special has already been declared with a let:

function another () {
  let special = 'limbo';

  function whatever () {
    var special = 'concourse'; // This is fine!
    console.log(special); // "concourse"
  }

  whatever();
  console.log(special); // "limbo"
}

another();
