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

// EXAMPLE E - SETTIMEOUT

function wait (message) {
  setTimeout(function timer () {
    console.log(message);
  }, 1000);
}

wait('Hello, closure!');

// EXAMPLE WITH LOOPS
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer () {
    console.log(i);
  }, i * 1000);
}

// Note: Linters often complain when you put functions inside of loops because so many developers lack a complete understanding of closure yet assume you don't know what you're doing. It doesn't appear that semistandard does that though.

// We EXPECT the above code to increment through the numbers 1-5 and print one out each second.
// However, what actually happens is that you get the number 6 printed out 5 times at the one-second intervals.

// The terminating condition of the loop is when i is greater than 5.
// The first time that's the case is when i is 6.
// So, the output is reflecting the final value of i after the loop terminates.

// The timeout function callbacks are all running well after the completion of the loop.
// Even if the second parameter to setTimeout() were 0 milliseconds, all those callbacks would still run strictly after the completion of the loop and thus print 6 each time.

// We are trying to imply that each iteration of the loop captures the value of i at the time of its iteration.
// However, because of VAR scoping, all 5 of those callbacks, though they are defined separately in each loop iteration, are CLOSED OVER THE SAME SHARED GLOBAL SCOPE, which has only one i in it.

// We're doing pretty much the equivalent of calling each of the 5 timeout callbacks one after the other with no loop at all.

// What we need is a new closured scope for each iteration of the loop.

// SOLUTION WITH AN IIFE

for (var j = 1; j <= 5; j++) {
  (function (k) {
    setTimeout(function timer () {
      console.log('USING IIFE: ', k);
    }, k * 1000);
  })(j);
}

// SOLUTION WITH LET AND BLOCK SCOPING

for (let m = 1; m <= 5; m++) {
  setTimeout(function timer () {
    console.log('USING LET: ', m);
  }, m * 1000);
}

// There's a special behavior defined for a LET declaration in the head of a for loop that says the variable will be decalred not just once for the loop, but EACH ITERATION.
// It will also automatically initialized at each subsequent iteration with the value from the end of the previous iteration!

// Bottom line? Just always use LET with for loops lol
