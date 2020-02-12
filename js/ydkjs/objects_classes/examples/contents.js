// EXAMPLE A

var user = {
  name: 'Florence'
};

// Property access with dot notation
console.log(user.name); // Florence

// Key access with bracket notation
console.log(user['name']); // Florence

// EXAMPLE B - PROGRAMMATICALLY BUILDING A KEY NAME

var wantName = true;
var user1 = {
  name: 'Erika'
};

var idx;

if (wantName) {
  idx = 'name';
}

// Later
console.log(user1[idx]); // Erika

// EXAMPLE C - NON-STRING OBJECT PROPERTIES CONVERTED TO STRINGS

var myObject = {};

// Each key will be converted to a string using toString() before it's actually assigned as a property.
myObject[true] = 'foo';
myObject[3] = 'bar';
myObject[myObject] = 'baz';

console.log(myObject['true']); // foo
console.log(myObject['3']); // bar
console.log(myObject['[object Object]']); // baz

// EXAMPLE D - COMPUTED PROPERTY NAMES

var prefix = 'butter';

var myObject = {
  [prefix + 'scotch']: 'candy',
  [prefix + 'cream']: 'icing'
};

console.log(myObject['butterscotch']); // candy
console.log(myObject['buttercream']); // icing

// These work too!
console.log(myObject.butterscotch); // candy
console.log(myObject.buttercream); // icing

// EXAMPLE E - USING SYMBOLS

var SYM = Symbol('secret');

var myObject2 = {
  [SYM]: 'shh'
};

console.log(myObject2[SYM]); // shh

// EXAMPLE F - OBJECT "METHODS"

function mom () {
  console.log('mom');
}

// Variable reference to mom()
var someMom = mom;

var myObject3 = {
  someMom: mom
};

console.log(mom); // function mom () {...}
console.log(someMom); // function mom () {...}
console.log(myObject3.someMom); // function mom () {...}

// someMom and myObject3.someMom are just two separate references to the same function.
// Neither implies anything about the function being special or "owned" by any other object.

// If mom() was defined to have a THIS reference inside it, the myObject3.mom() implicit binding would be the ONLY observable difference between the two references.

// Neither reference really makes sense to be called a "method".

// Even declaring a function expression as part of an object literal doesn't make that function "belong" to the object:

var myObject4 = {
  foo: function foo () {
    console.log('foo');
  }
};

var someFoo = myObject4.foo;

// These both log the same function:
console.log(someFoo);
console.log(myObject4.foo);

// There are simply multiple references to the same function object.
