// EXAMPLE A - RETURNING INSIDE OF THE TRY IN A TRY...FINALLY

function exampleA () {
  function foo() {
    try {
      return 'Hello';
    } finally {
      console.log('World');
    }

    console.log('Never runs');
  }

  console.log(foo());
  // World
  // Hello

  // Here, Line 5 runs right away, which sets up the completion value from the foo() call. This completes the TRY clause and the FINALLY clause immediately runs next before we get back to the calling console.log() at Line 13.
}

// exampleA();

// EXAMPLE B - THROWING AN ERROR INSIDE OF THE TRY IN A TRY...FINALLY

function exampleB () {
  function foo () {
    try {
      throw Error('Oops');
    } finally {
      console.log('Hello');
    }

    console.log('Never runs');
  }

  console.log(foo());
  // Hello
// Uncaught Error: Oops
}

// exampleB();

// EXAMPLE C - OVERRIDING A TRY'S COMPLETION VALUE

function exampleC () {
  function foo () {
    try {
      return 42;
    } finally {
      // Semistandard considers this unsafe!
      throw Error('Overridden!');
    }

    console.log('Never runs');
  }

  console.log(foo()); // Uncaught Error: Overridden!
}

// exampleC();

// EXAMPLE D - FINALLY COMPLETION VALUE OVERRIDING

function exampleD () {
  function foo () {
    try {
      return 42;
    } finally {
      // No `return` here, so no override
    }
  }

  function bar () {
    try {
      return 42;
    } finally {
      // Override previous `return 42` (not safe)
      return;
    }
  }

  function baz () {
    try {
      return 42;
    } finally {
      // Override previous `return 42` (not safe)
      return 'Hello';
    }
  }

  console.log(foo()); // 42
  console.log(bar()); // undefined
  console.log(baz()); // Hello
}

exampleD();
