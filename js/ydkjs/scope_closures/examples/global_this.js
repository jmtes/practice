// Depending on which JS environment our code is running in, a program may or may not be able to refer to the global scope object (for getting/setting global variables as properties) with WINDOW, SELF, or GLOBAL.

// Thus, another trick for getting a reliable reference to the global scope object might look like:

let theGlobalScopeObject = (new Function('return this'))();

// A function that is dynamically constructed with the Function() constructor will automatically run in non-strict mode when invoked as shown.
// Thus, its THIS will be the global object.

// GLOBAL THIS

// JS recently introduced a standardized reference to the global object called globalThis.
// Thus, if your JS engine is recent enough, you can use globalThis instead of WINDOW, SELF, GLOBAL, and the above function constructor.

// You can even attempt a cross-environment approach that's safer across pre-globalThis JS environments like:

theGlobalScopeObject =
  (typeof globalThis !== 'undefined') ? globalThis
    : (typeof global !== 'undefined') ? global
      : (typeof window !== 'undefined') ? window
        : (typeof self !== 'undefined') ? self
          : (new Function('return this'))();

console.log(theGlobalScopeObject);
