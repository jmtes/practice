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
