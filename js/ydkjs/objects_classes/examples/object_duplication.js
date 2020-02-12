// EXAMPLE A - WHY THERE IS NO COPY() OBJECT METHOD

function aFunction () {
}

var anObject = {
  c: true
};

var anArray = [];

var myObject = {
  a: 2,
  b: aFunction,
  c: anObject, // This is a reference to the object, not a copy of it!
  d: anArray // Also a reference!
};

anArray.push(anObject, myObject);

// Were such a method to exist, the question is should the copy be shallow or deep?

// A shallow copy of myObject would end up with a on the new object as a copy of the value 2, but the b, c, and d properties would just reference the same locations in memory that those in the original object do.

// A deep copy would duplicate not only myObject, but also anObject and anArray.

// But this would cause issues because anArray has references to anObject and myObject in it, so THOSE too should be duplicated rather than reference-preserved.
// This causes an infinite circular duplication problem.

// EXAMPLE B - DUPLICATION WITH JSON

// Objects that are JSON-safe can easily be duplicated like so:
var newObject = JSON.parse(JSON.stringify(anObject));

// Refer to the MDN page on json.stringify() for which types are JSON-safe.

console.log('****** DUPING WITH JSON ******');
console.log(newObject.c); // true

// You're essentially doing PEMDAS with the parse() and stringify().

// EXAMPLE C - DUPLICATION IN ES6

// ES6 has defined Object.assign() for the task of making shallow copies of objects.

// It takes a target object as its first parameter and one or more source objects as its subsequent parameters.
// It works by iterating over all the enumerable, owned keys immediately present in the source object(s) and copying them via = assignment to the target.
// It also helpfully returns the target with all the newly copied properties.

var newObject2 = Object.assign({}, myObject);

console.log('****** DUPING WITH OBJECT.ASSIGN() ******');
console.log(newObject2.a); // 2
console.log(newObject2.b === aFunction); // true
console.log(newObject2.c === anObject); // true
console.log(newObject2.d === anArray); // true

// NOTE: Because the duplication that occurs for Object.assign() is purely = style assignment, any special characteristics of a property (ie. `writable`) on a source object will NOT be preserved on the target object.
