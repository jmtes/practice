// JS developers have strived to simulate as much as they can of class-orientation:

function User (name) {
  this.name = name;
}

User.prototype.myName = function () {
  return this.name;
};

var user1 = new User('Nicolas');
var user2 = new User('Melissa');

console.log(user1.myName()); // Nicolas
console.log(user2.myName()); // Melissa

// Because of NEW binding, Line 8 adds the name property onto each object (user1 and user2), similarly to how class instances encapsulate data values.

// Line 7 adds a myName property with a function as a value to the User.prototype object.
// This allows the call user1.myName() to work, but how?

// It's tempting to think that when user1 and user2 were created, the properties/functions on the User.prototype object were copied over to both of them.
// We've established though that JS performs no copy operations between objects, but rather links them together.
// user1 and user2 simply ended up with internal [[Prototype]] linkage to User.prototype!
// When myName is not found on user1 or user2, it's instead found on User.prototype through delegation.
