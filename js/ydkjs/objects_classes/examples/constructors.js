// EXAMPLE A - FUNCTION CONSTRUCTORS

function User () {
  // Do stuff
}

var user1 = new User();

// What exactly leads us to think User is a "class"?

// For one, there's the use of the NEW keyword, which is similar to what class-oriented languages do when they construct class instances.
// For another, it appears we are in fact executing a constructor method of a class because User() is actually a method that gets called.

console.log(User.prototype); // Object containing a constructor property

// It's much like how a real class's constructor gets called when you instantiate that class.

// To add to the confusion of "constructor" semantics, the arbitrarily labeled User.prototype has another trick up its sleeve.

console.log(User.prototype.constructor === User); // true, so both reference the same function

console.log(user1.constructor === User); // true, so they too reference the same function
console.log(user1.hasOwnProperty('constructor')); // false, meaning the constructor property was delegated to User.

// At decalaration time in Line 3, the User.prototype object by default got a public, non-enumerable constructor property.
// This property is a reference back to the function (User) that the object is associated with.
// We also see that the object user1 created by the constructor call in Line 7 SEEMS to have a connstructor property on it which similarly points to the function that "created" it.

// We've seen though that user1 in fact has no constructor property.
// Though user1.constructor does resolve to the User function, "constructor" in this case does not actually mean "was constructed by", as it may appear.

// It's tempting to think that User is a "constructor" because we call it with NEW and can observe that it "constructs" an object.
// Really though, it is no more a "constructor" than any other function.

// Functions themselves are not constructors.
// However, when you put the NEW keyword in front of a normal function call, that makes that function call a "constructor call".
// NEW sort of hijacks any normal function call and calls it in a fashion that constructs an object (almost as a side effect) IN ADDITION TO whatever else it was going to do.

// I'm guessing whenever THIS is used in the constructor call it gets applied to the object created by NEW because of NEW binding?

function NothingSpecial () {
  console.log("Don't mind me!");
  this.test = 'test';
}

// This is a constructor call, but NothingSpecial itself is not a constructor!
var a = new NothingSpecial();

console.log(a); // Object with a test property!

// It would appear my hypothesis is correct!

// In JS, it's most appropriate to say that a "constructor" is any function called with the NEW keyword in front of it.
// Functions aren't constructors, but function calls are "constructor calls" if and only if NEW is used!
