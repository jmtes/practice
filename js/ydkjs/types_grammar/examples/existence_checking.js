// EXAMPLE A - CHECKING FOR GLOBAL VARIABLE EXISTENCE WITHOUT TYPEOF

if (window.DEBUG) {
  console.log('In debug mode');
}

if (!window.atob) {
  console.log('Gotta polyfill atob!');
}

// No ReferenceError is thrown if you try to access an object property that doesn't exist!

// EXAMPLE B - THE DEPENDENCY INJECTION PATTERN

function doSomethingCool (FeatureXYZ) {
  var helper = FeatureXYZ || function () {
    // Default feature
  };

  var val = helper();

  return val;
}
