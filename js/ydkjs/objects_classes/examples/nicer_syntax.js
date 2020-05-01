// One of the things that makes ES6 classes so deceptively attractive is the shorthand syntax for declaring class methods:

class Class {
  // Look at that! No FUNCTION keyword!
  methodName () {
    // Do stuff
  }
}

// As of ES6 though, we can use concise method declarations in any object literal, so an object in OLOO style can be declared with basically the same syntactic sugar as classes:

// EXAMPLE A - CONCISE METHOD DECLARATIONS

var LoginController = {
  errors: [],
  getUser () {
    // No FUNCTION keyword!
  },
  getPassword () {
    // Get password
  }
};

// Moreover, think about the clunky syntax you used to define AuthController in Lines 162-196 of ./classes_vs_objects.js:

/* ============== START BLOCK ===================

var AuthController = Object.create(LoginController);

AuthController.errors = [];

AuthController.checkAuth = function () {
  var user = this.getUser();
  var pw = this.getPassword();

  if (this.validateEntry(user, pw)) {
    this.server('/check-auth', {
      user,
      pw
    })
      .then(this.accepted.bind(this))
      .catch(this.rejected.bind(this));
  }
};

AuthController.server = async function (url, data) {
  var res = await window.fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  });
  res = await res.json();
  return res;
};

AuthController.accepted = function () {
  this.showDialog('Success', 'Authenticated');
};

AuthController.rejected = function (err) {
  this.failure(`Authentication failed, ${err}`);
};
================== END BLOCK ================== */

// You're assigning AuthController's properties individually.

// As of ES6 though, this can be rewritten using an object object literal so you can use concise methods:

var AuthController = {
  errors: [],
  checkAuth () {
    var user = this.getUser();
    var pw = this.getPassword();

    if (this.validateEntry(user, pw)) {
      this.server('/check-auth', {
        user,
        pw
      })
        .then(this.accepted.bind(this))
        .catch(this.rejected.bind(this));
    }
  },
  async server (url, data) {
    var res = await window.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    res = await res.json();
    return res;
  },
  accepted () {
    this.showDialog('Success', 'Authenticated');
  },
  rejected (err) {
    this.failure(`Authentication failed, ${err}`);
  }
};

// You can then just modify its [[Prototype]] like so:

Object.setPrototypeOf(AuthController, LoginController);

// EXAMPLE B - THE SUBTLE DRAWBACK OF CONCISE METHODS

// Consider this code:

var Foo = {
  bar () {
    // Do something
  },
  baz: function baz () {
    // Do another thing
  }
};

// This is the syntactic de-sugaring that shows how the code will operate:

Foo = {
  bar: function () {
    // Do something
  },
  baz: function baz () {
    // Do another thing
  }
};

// The bar() shorthand became an anonymous function attached to the bar property because the function object itself has no name identifier.
// Meanwhile, the manually specified named function expression has a lexical identifier `baz` IN ADDITION to being attached to the baz property.

// To recap, there are three main downsides of anonymous function expressions:
// 1. They make debugging stack traces harder
// 2. They make self-referencing for recursion, event (un)binding, etc. harder.
// 3. They make a code a little bit harder to understand.

// Items 1 and 3 don't apply to concise methods.
// Concise methods are specified to set the internal NAME property of the function object accordingly, which stack traces should be able to use (implementation-dependent).

// Let's consider Item 2 though:

Foo = {
  bar: function (x) {
    if (x < 10) {
      return Foo.bar(x * 2);
    }
  },
  baz: function baz (x) {
    if (x < 10) {
      return baz(x * 2);
    }
    return x;
  }
};

// The Foo.bar reference in Line 145 suffices for this example, but there are many cases where a function wouldn't be able to do that.
// Such cases include when the function is being shared in delegation across different objects, using THIS binding, etc.
// You would want to use a real self-reference in those cases, and the function's NAME identifier is the best way to do that.

// Basically, if you run into self-reference issues with a function, forgo the concise method syntax for JUST THAT FUNCTION'S DECLARATION and instead use a named function expression declaration.
