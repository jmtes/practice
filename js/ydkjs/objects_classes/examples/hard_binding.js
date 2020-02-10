// EXAMPLE A

function greeting () {
  console.log("Hello, I'm ", this.name);
}

var user = {
  name: 'Lena'
};

var name = 'Sedef';

var callGreeting = function () {
  greeting.call(user);
};

callGreeting(); // Hello, I'm Lena
setTimeout(callGreeting, 100); // Hello, I'm Lena

// callGreeting() hard binds greeting()'s THIS to USER so that it cannot be overridden.
// No matter how you later invoke callGreeting(), it will always manually invoke greeting() with USER.

callGreeting.call(window); // Hello, I'm Lena
greeting(); // Hello, I'm Sedef

// EXAMPLE B

// The most common way to wrap a function with a hard binding creates a pass-through of any arguments passed and any return value received:

function foo (something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 0
};

var bar = function () {
  // arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
  return foo.apply(obj, arguments);
};

var b = bar(3); // 0 3
console.log(b); // 3

// EXAMPLE C WITH A REUSABLE HELPER

// Simple bind helper
function bind (fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}

var obj1 = {
  a: 1
};

var bar1 = bind(foo, obj1);

b = bar1(3); // 1 3
console.log(b); // 4

// EXAMPLE OF THE ES5 BUILT-IN BINDING UTILITY

var obj2 = {
  a: 2
};

var bar2 = foo.bind(obj2); // Assigns bar2 the foo function reference with the THIS already set to obj2

// Calling foo (with the obj2 context pre-set) with the bar2 alias and providing 3 as the something parameter
b = bar2(3); // 2 3
console.log(b); // 5

// bind() returns a new function that is hardcoded to call the original function with the THIS context set as you specified.

// NOTE: As of ES6, the hard-bound function produced by bind() has a `name` property that derives from the original target function:

console.log(bar2.name); // "bound foo"

// This is the function call name that should show up in a stack trace.
