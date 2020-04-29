var anotherObject = {
  cool: function () {
    console.log('Cool!');
  }
};

var myObject = Object.create(anotherObject);

myObject.cool(); // Cool!

// This code works by virtue of [[Prototype]], but if you wrote it that way so that anotherObject was acting as a fallback just in case myObject couldn't handle some property/method some developer may try to call, odds are your code is going to be more "magical" and harder to understand and maintain.

// There ARE cases where fallbacks are an appropriate design pattern, but it's just not very common or idiomatic in JS.
// If you find yourself utilizing such a pattern, you might want to take a step back and reconsider it.

// NOTE: In ES6, an advanced functionality called Proxy was introduced that can provide something of a "method not found" type of behavior.

// You can design your API with less "magic" to it and still take advantage of the power of [[Prototype]] linkage:

var myObject2 = Object.create(anotherObject);

myObject2.doCool = function () {
  this.cool(); // Internal delegation!
};

myObject2.doCool(); // Cool!

// Here, we call myObject.doCool(), which is a method that ACTUALLY exists on myObject2.
// This makes our API design more explicit and less magical.

// Internally, our implementation follows the delegation design pattern, taking advantage of [[Prototype]] delegation to anotherObject.cool().

// Generally, delegation will be less surprising/confusing if it's an internal implementation detail rather than plainly exposed in an API!
