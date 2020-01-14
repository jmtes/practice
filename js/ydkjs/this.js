// One common misconception is that a function's `this` refers to the function itself.
// Another one is that `this` points to the instance that a method belongs to.
// Both are incorrect!

// When a function is defined, it is attached to its enclosing scope via closure. Scope is the set of rules that controls how references to identifiers/variables are determined.

// The `this` keyword actually contains the function's execution context, which is another characteristic besides scope that influences what they can access.

// SCOPE VS EXECUTION CONTEXT
// Scope: static, always the same for that function, contains fixed set of vars available at the moment and location you define a function
// Execution Context: dynamic, entirely dependent on how it is called (regardless of where it's defined or called from)

// `this` is determined each time a function is called.

// EXAMPLE A
function classroom (teacher) {
  return function study () {
    console.log(`${teacher} wants you to study ${this.topic}`);
  };
}

var assignment = classroom('Kyle');

// let topic = 'JS'; // This won't bear the topic var for the execution context of assignment() below.
// var topic = 'JS'; // But this does because it's being put into the global scope!
assignment(); // "Kyle wants you to study undefined"
// Unless the line above the function call is uncommented, the value is undefined because there is no identifier called topic in this call's execution context, the global scope, which context-aware functions default to when we don't provide an execution context ourselves.

// EXAMPLE B
var homework = {
  topic: 'Python',
  assignment
};

homework.assignment(); // "Kyle wants you to study Python"

// A copy of the assignment function reference is set as a property on the homework object and then it's invoked using homework.assignment(), which sets the function's execution context, and thus its `this`, as the homework object. Hence, this.topic resolves to "Python".

// EXAMPLE C
var otherHomework = {
  topic: 'React'
};

assignment.call(otherHomework); // "Kyle wants you to study React"

// Another way to invoke a function is with the call() method, which takes an object as parameter and uses it as the `this` reference and execution context for the call.
// So in this case, this.topic resolves to "React".

// The benefit of context-aware functions is the ability to more flexibly reuse a single function with data from different objects.
// A function that closes over a scope can never reference a different scope or set of variables, but a function that has a dynamic `this` context awareness can be quite helpful for certain tasks.
