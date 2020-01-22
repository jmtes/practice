// EXAMPLE A

// if (false) {
//   function ask() {
//     console.log('Does this run?');
//   }
// }

// ask();

// Depending on which JS environment you run this code in, you could get either a:

// A) ReferenceError because ask() is block-scoped to the if-block and thus isn't available to the outer/global scope, or

// B) TypeError because the `ask` identifier exists, but it's undefined since the if statement doesn't run and thus not a callable function

// Most browser-based JS engines, including v8 which is also used in Node, will behave as option B.
// The ask identifier was scoped outside the if block, but the function value was not automatically initialized.
// It is NOT in TDZ though. It is simply undefined.

// COMMON USE CASE: DEFINING A FUNCTION ACCORDING TO SOME ENVIRONMENT STATE

if (typeof Array.isArray != 'undefined') {
  function isArray (a) {
    return Array.isArray(a);
  }
} else {
  function isArray (a) {
    return Object.prototype.toString.call(a) == '[Object Array]';
  }
}

// It's tempting to structure code this way for performance reasons, since the `typeof Array.isArray` check is only performed once, as oppposed to defining just one `isArray()` and putting the check inside it, where it runs unnecessarily with each call.

// However, allowing a program to define multiple versions of a function always makes it harder to reason about and maintain, so try not to do it.

// Kyle's suggestion is to avoid conditionally defining functions if at all possible. It may be slightly less performant, but this is a better option:

function isArray2 (a) {
  if (typeof Array.isArray != 'undefined') {
    return Array.isArray(a);
  } else {
    return Object.protoptype.toString.call(a) == '[object Array]';
  }
}

// If the performance hit become a critical issue for your app, consider this approach:

var isArray3 = function isArray (a) {
  return Array.isArray(a);
};

// Override the definition, if you must
if (typeof Array.isArray == 'undefined') {
  isArray3 = function isArray (a) {
    return Object.prototype.toString.call(a) == '[object Array]';
  };
}

// Note that a function EXPRESSION, rather than a declaration, was placed inside the if statement.
// It's totally fine for function expressions to be inside blocks, just avoid having function declarations in them.
