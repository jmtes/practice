// Keywords that I would like to put into backticks but am not because it looks ugly were put in all caps in the comments for clarity.
// Recall the Object.create() style of coding:
var Classroom = {
  welcome () {
    console.log('Welcome, students!');
  }
};

var mathClass = Object.create(Classroom);

mathClass.welcome(); // "Welcome, students!"

// The prototypal class pattern would have labeled this delegation behavior "inheritance" and defined it as:
function Classroom2 () {
}

Classroom2.prototype.welcome = function hello () {
  console.log('Welcome to prototypal classes, students!');
};

var mathClass2 = new Classroom2();

mathClass2.welcome();

console.log(Classroom2.prototype); // Contains constrcutor and welcome keys

function sayHello () {
  console.log('Hello!');
}

console.log(sayHello.prototype); // Contains just a constructor

// All functions by default reference an empty object at a property named PROTOTYPE.
// Despite the confusing naming, this is NOT the function's prototype (where it's prototype linked to), but rather the prototype object TO LINK TO when other objects are created by calling the function with the NEW keyword.

// In the example above, new Classroom() creates a new object, prototype links it to the existing Classroom.prototype object, and assigns it to mathClass.
// Now, even though mathClass doesn't have a welcome() method, it can successfully delegate to Classroom.prototype.welcome().

// This prototypal class pattern is strongly discouraged now in favor of ES6 classes, but it's still important to know about it for interviews!

// WITH ES6 CLASSES
class Classroom3 {
  welcome () {
    console.log('Welcome to ES6 classes, students!');
  }
}

var mathClass3 = new Classroom3();
mathClass3.welcome();

// Under the hood, the same prototype linkage is wired up, but this CLASS syntax fits the class-oriented design pattern much more cleanly than prototypal classes.
