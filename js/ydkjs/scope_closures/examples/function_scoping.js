var cache = {};

// Caching a function's computed output to optimize performance when repeated calls of the same inputs are expected is quite common in functional programming.
// It's referred to as memoization! You can read more about this some other time!

function factorial (x) {
  if (x < 2) return 1;
  if (!(x in cache)) {
    cache[x] = x * factorial(x - 1);
  }
  return cache[x];
}

console.log('USING A CACHE EXPOSED IN THE GLOBAL SCOPE');

console.log(factorial(6)); // 720

console.log(cache);
// {
//   '2': 2,
//   '3': 6,
//   '4': 24,
//   '5': 120,
//   '6': 720
// }

console.log(factorial(7)); // 5040

// We're storing all the computed factorials in cache so that across multiple calls to factorial(), the answers remain.
// But the cache variable is pretty obviously a PRIVATE detail of how factorial() works, not something that should be exposed in an outer scope. Especially not the global scope.

// Fixing this over-exposure issue is not as simple as hiding the cache variable inside factorial(). We need it to survive multiple calls, so it must be located in a scope outside that function.

// The solution is to make a closure by defining another middle scope (between the outer/global scope and the inside of factorial()) for cache to live in!

function hideCache () {
  // "Middle scope" where we hide cache
  var cache = {};

  function factorial (x) {
    // Inner scope
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }

  return factorial;
}

var factorial2 = hideCache();

console.log('HIDING THE CACHE IN A FUNCTION SCOPE MADE WITH A FUNCTION DECLARATION');

console.log(factorial2(6)); // 720
console.log(factorial(7)); // 5040

// The hideCache() function serves no other purpose than to create a scope for cache to persist in across multiple calls to factorial().
// But for factorial() to have access to cache, we have to define it inside that same scope.
// Then we return the factorial() function reference from hideCache() and store it back in an outer scope variable.
// Now we can invoke factorial() using that outer scope variable and the cache will persist and still remain hidden, accessible only to factorial()!

// A caveat of doing this trick is that it will be tedious to define and name a hiding function each time you need one.

// So, rather than defining a new and uniquely named function each time you need one just to hide a variable, a better solution would be to use a function expression.

// Here we use an IIFE (Immediately Invoked Function Expression):

var factorial3 = (function hideCache () {
  var cache = {};

  function factorial (x) {
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }

  return factorial;
})();

console.log('HIDING THE SCOPE IN AN IFFE');

console.log(factorial3(6)); // 720
console.log(factorial(7)); // 5040

// Recall that since hideCache() here is defined as a function expression instead of a function declaration, its name is in its own scope rather than the outer/global scope.
// Thus, no name collision occurs with the hideCache() function in the outer/global scope we already made earlier in the code.

// This means that we can name every occurrence of such a function expression the same name and never have any collision.

// We can name each occurrence semantically based on whatever we're trying to hide and not worry about the name we choose colliding with any other function expression scope in the program!

// Although you COULD just make these function expressions anonymous, it's good practice to name them anyway.
