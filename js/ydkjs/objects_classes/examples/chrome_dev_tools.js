// The JS specification does not control how browser dev tools should represent specific values/structures.
// As a result, each browser/engine is free to interpret such things as they see fit. Of course, they don't always agree.

// The following behavior is observed only in Chrome's Developer Tools.

// Consider this "class constructor" style JS code as it would appear in the CONSOLE of Chrome Dev Tools:

function User () {
  // Do stuff
}

var user1 = new User();

console.log(user1); // User {}

// If you try this same code in say, Firefox, Line 14 would likely print `Object {}` instead of `User  {}`.

// Chrome is essentially saying "{} is an empty object that was constructed by a function with name User".
// Firefox is saying "{} is an empty object of general construction from Object".

// Chrome actively tracks as an internal property the name of the actual function that did the construction, whereas other browsers don't.

// It's tempting to attempt to explain this with JS mechanisms:

console.log(user1.constructor); // User () {}
console.log(user1.constructor.name); // User

// So is that how Chrome is outputting "User"? By simply examining the object's constructor.name?

// The answer is both yes and no!

// Consider the following:

User.prototype.constructor = function Gotcha () {
  // Do stuff
};

console.log(user1.constructor); // Gotcha () {}
console.log(user1.constructor.name); // Gotcha

console.log(user1); // User {}

// Even though we changed user1.constructor.name to legitimately be something else, Chrome's console still uses the User name!
// This must mean that instead of using constructor.name, Chrome must track it internally somewhere else, right?

// Not so fast! Let's see how this works with OLOO-style code:

var Member = {};

var mem1 = Object.create(Member);

console.log(mem1); // Object {}

Object.defineProperty(Member, 'constructor', {
  enumerable: false,
  value: function Gotcha () {}
});

console.log(mem1); // Gotcha {}

// Here, Chrome's console DID find and use constructor.name !

// This was actually identified as a bug in Chrome.
// Aside from that though, the internal tracking of the "constructor name" that Chrome does is an intentional Chrome-only extension of behavior beyond what the JS specs call for.

// If you don't use a "constructor" to make your objects, as we do in the OLOO-style code, you'll get objects that Chrome does NOT track an internal "constructor name" for.
// Such objects will correctly be outputted as `Object {}`, meaning "object generated from Object() construction".

// This is by no means a drawback of OLOO-style coding!

// When coding with OLOO delegation in mind, who "constructed" some object is an irrelevant detail.
// Chrome's "constructor name" tracking is really only useful if you're embracing class-style coding.
