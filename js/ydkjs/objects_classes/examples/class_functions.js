// EXAMPLE A - THE FUNCTION PROTOTYPE PROPERTY

// All functions by default have a public, non -enumerable property on them called 'prototype'.
// This property points to an otherwise arbitrary object.

function Foo () {
  // Do stuff
}

console.log(Foo.prototype); // Object with single constructor property

// This object is very arbitrarily labeled and leads to confusion.

// EXAMPLE B - INDIRECTLY LINKING OBJECTS WITH NEW

// Each object created from calling new Foo() will end up (somewhat arbitrarily) [[Prototype]]-linked to this Foo.prototype object.

var a = new Foo();

console.log(Object.getPrototypeOf(a) === Foo.prototype); // true

// In class-oriented langauges, instances are made when behaviors are copied from a class into an instance.

// In JS, no copy operations are performed.
// You don't create instances of a class, but rather you can create multiple objects that [[Prototype]] link to a common object.

// When a was created in Line 16, one of the things that happened was that it got an internal [[Prototype]] link to the Foo.prototype object.
// We didn't instantiate a class. We simply ended up with two objects that are linked to each other.

// The new Foo() calling had almost nothing direct to do with the process of creating the link but rather an accidental side effect.
// It is an indirect way to end up with what we want: a new object linked to another object.

// EXAMPLE C - DIRECTLY LINKING OBJECTS WITH OBJECT.CREATE()


