// EXAMPLE A - THE VOID OPERATOR

var a = 'defined';

console.log(void a, a); // undefined "defined"

// Note that using the void operator is not semistandard compliant.

// The operator is useful in some circumstances, such as the following:

var APP = {};

function doSomething () {
  if (!APP.ready) {
    // Wait 100ms and then try to run the function again.
    return void setTimeout(doSomething, 100);
  }

  var result;

  // Do some other stuff

  return result;
}

// Because setTimeout(...) returns a non-empty numeric value (the unique identifier of the timer interval should you want to cancel it), we're voiding it so that we don't get a false positive in the below if statement.

if (doSomething()) {
  // Do thing that depends on success of doSomething()
}

// Many developers prefer to do these actions separately without the void operator though:

function doSomething2 () {
  if (!APP.ready) {
    setTimeout(doSomething2, 100);
    return;
  }

  var result;

  // Do stuff

  return result;
}

// EXAMPLE B - THE TYPE OF NaN

var b = 2 / 'human';

console.log(b); // NaN
console.log(typeof b); // number

// EXAMPLE C - TESTING FOR NaN

// The following does not work since NaN is not equal to itself:
console.log(b === NaN); // false

// Rather, you must use the global isNaN(...) utility:
console.log(window.isNaN(b)); // true

// Be aware though that the global isNan(...) may yield true for a non-numeric value as well!
console.log(window.isNaN("i'll visit you")); // true, uh oh

// The more reliable Number.isNaN(...) was introduced in ES6:
console.log(Number.isNaN(b)); // true
console.log(Number.isNaN('muse')); // false

// Number.isNaN(...) can be polyfilled for pre-ES6 environments like so:

if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return n !== n;
  };
}

// This polyfill takes advantage of the fact that NaN is the only value in the entire language that isn't equal to itself. Neat!

// EXAMPLE D - INFINITY

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity

console.log(Infinity / Infinity); // NaN
console.log(1 / Infinity); // 0
console.log(-1 / Infinity); // -0, huh?
