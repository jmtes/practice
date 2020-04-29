// EXAMPLE A - USING OBJECT.CREATE(...)

var greeting = {
  say: function () {
    console.log('Hello!');
  }
};

var hello = Object.create(greeting);

hello.say(); // Hello!

// Object.create(...) create a new object (hello) linked to another object (greeting), which gives us all the delegation capabilities of the [[Prototype]] mechanism.
// It does this without any of the unnecessary complication of constructor calls or confusing prototype and constructor property references!

// EXAMPLE B - OBJECT.CREATE(NULL)

var data = Object.create(null);

console.log(data); // An object with no properties, not even a __proto__

console.log(Object.prototype.isPrototypeOf(data)); // false

// Object.create(null) creates an object that has an empty [[Prototype]] linkage, and thus the object can't delegate anywhere.
// These special objects have no possible surprise side effect from any delegated properties/functions on the [[Prototype]] chain.
// They're thus often called "dictionaries" and are thus purely used for storing data.

// EXAMPLE C - OBJECT.CREATE() POLYFILL

// Object.create(...) was added in ES5, so you may need a polyfill if you need support for pre-ES5 environments.

// The following is a simple PARTIAL polyfill:

if (!Object.create) {
  Object.create = function (o) {
    function F () {}
    F.prototype = o;
    return new F();
  };
}

// Here we uses a throwaway function F and override its prototype property to point to the object we want to link to.
// We then use `new F()` construction to make a new object that will be linked as specified.

// There is an additional functionality that Object.create(...) provides that is NOT polyfillable for pre-ES5, which we'll examine next.

// EXAMPLE D - SPECIFYING PROPERTIES WITH OBJECT.CREATE(...)

var User = {
  status: 'member'
};

var user1 = Object.create(User, {
  name: {
    value: 'Anton',
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthday: {
    value: 'October 24',
    enumerable: true,
    writable: false,
    configurable: false
  }
});

console.log(user1.hasOwnProperty('status')); // false
console.log(user1.hasOwnProperty('name')); // true
console.log(user1.hasOwnProperty('birthday')); // true

console.log(user1.status); // member
console.log(user1.name); // Anton
console.log(user1.birthday); // October 24

// As you can see, the second argument to Object.create(...) specifies property names to add to the newly created object via declaring each new property's descriptor.

// This functionality of Object.create(...) is not polyfillable.
// Most of the time though, usage of Object.create(...) uses just the polyfill-safe subset of functionality, so most developers are fine with using the partial polyfill from Example C.
