function User (name) {
  this.name = name;
}

User.prototype.getName = function () {
  return this.name;
};

var user1 = new User('Filipe');

// How would we introspect user1 to find out its delegation linkage?

// EXAMPLE A - THE INSTANCEOF OPERATOR

// This first approach to finding delegation linkage embraces the "class" confusion:

console.log(user1 instanceof User); // true

// The instanceof operator takes a plain object as its left operand and a function as its right operand.
// The question instanceof answers is: In the entire [[Prototype]] chain of user1 (object A), does the object pointed to by User.prototype (function_A.prototype) ever appear?

// This means you can only inquire about the delegation linkage of some object (user1) if you have some function (User, with its attached prototype reference) to test with.

// If you have two arbitrary objects, a and b, and want to find out if they are related to each other through a [[Prototype]] chain, instanceof alone can't help.

// NOTE: If you use the bind(...) utility to make a hard-bound function, the function created will not have a prototype property.
// Using instanceof with such a function substitutes the prototype of the TARGET FUNCTION that the hard-bound function was created from.
// It's uncommon to use hard-bound functions in constructor calls. If you do, it will behave as if the original target function was invoked instead.

// EXAMPLE B - ISPROTOTYPEOF(...)

// This is a much cleaner approach to [[Prototype]] introspection.

console.log(User.prototype.isPrototypeOf(user1)); // true

// In this case, we don't even need or care about the function User, we just need an OBJECT (in this case, the one arbitrarily labeled User.prototype) to test against another object:

// Making a new variable that points to the same object as User.prototype
var alias = User.prototype;

console.log(alias.isPrototypeOf(user1)); // true

// The question isPrototypeOf(...) answers is: In the entire [[Prototype]] chain of user1 (object A), does User.prototype (object B) ever appear?

// It's the same question that instanceof answers, but without the indirection of referencing a FUNCTION whose prototype property will automatically be consulted.
