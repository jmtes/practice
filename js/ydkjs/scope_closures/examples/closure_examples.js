// EXAMPLE A

function foo () {
  var a = 1;

  function bar () {
    console.log(a); // 1
  }

  bar();
}

foo();

// From a purely academic perspective, it can be said that the function bar() has a closure over the scope of foo().
// This is simply bar() appears nested inside of foo().
// Closure defined in this way is not directly observable though, nor do we see it exercised in the above code. We can only clearly see lexical scope.

// EXAMPLE B

function foo2 () {
  var a = 2;

  function bar () {
    console.log(a); // 2
  }

  return bar;
}

var baz = foo2();

baz(); // 2

// The function bar(), which we return as a value from foo() and assign to baz, has lexical scope access to the scope of foo2().
// When we invoke baz(), we are invoking the inner bar() function, just with a different identifier.
// Every time this happens, bar() is being executed OUTSIDE of its declared lexical scope.

// We would expect the inner scope of foo2() to be garbage collected once it finishes executing, but the magic of closures keeps this from happening.
// The inner scope of foo2() is in fact still in use by none other than the bar() function, and thus does not go away.

// The bar() function still has a reference to that scope, and that reference is called closure!

// So, when we invoke baz(), it has access to author-time lexical scope, so it can access the variable `a`.

// EXAMPLE C

function foo3 () {
  var a = 3;

  function baz () {
    console.log(a); // 3
  }

  bar(baz);
}

function bar (fn) {
  fn(); // Closure!
}

foo3();

// Here we pass the baz function reference over to bar() as the parameter fn and then invoke it in the body of bar().
// The baz() function's closure over the inner scope of foo3() is observed in its access of the `a` variable.

// EXAMPLE D

// The passing around of functions can be indirect as well:

var fn;

function foo4 () {
  var a = 4;

  function baz () {
    console.log(a);
  }

  fn = baz; // Assign baz reference to global variable
}

function bar4 () {
  fn(); // Closure!
}

foo4();

bar4();

// However we decide to transport an inner function outside of its lexical scope, it will maintain a scope reference to where it was originally declared, and wherever we execute it, closure will be exercised.
