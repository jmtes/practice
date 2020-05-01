// In addition to providing simpler and more flexible code, using OLOO as a design pattern can also lead to simpler code architecture!

// In this scenario, we'll examine two controller objects.
// One handles the login form of a webpage, while the other handles authentication and communication with the server.

// EXAMPLE A - USING ES6 CLASSES

// Following the typical class design pattern with ES6, we'll break up the task into a base class Controller with two child classes LoginController and AuthController.

// Parent class
class ControllerOO {
  constructor () {
    this.errors = [];
  }

  showDialog (title, msg) {
    console.log(`${title}: ${msg}`);
  }

  success (msg) {
    this.showDialog('Success', msg);
  }

  failure (err) {
    this.errors.push(err);
    this.showDialog('Error', err);
  }
}

// Child class
class LoginControllerOO extends ControllerOO {
  getUser () {
    return document.getElementById('login-username').value;
  }

  getPassword () {
    return document.getElementById('login-password').value;
  }

  validateEntry (user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) {
      return this.failure('Please enter a username and password.');
    } else if (pw.length < 5) {
      return this.failure('Password must be at least 5 characters.');
    }

    // Validated
    return true;
  }

  failure (err) {
    // Super call
    super.failure.call(this, `Login invalid: ${err}`);
  }
}

// Child class
class AuthControllerOO extends ControllerOO {
  constructor (login) {
    super();
    this.login = login;
  }

  async server (url, data) {
    var res = await window.fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    res = await res.json();
    return res;
  }

  checkAuth () {
    var user = this.login.getUser();
    var pw = this.login.getPassword();

    if (this.login.validateEntry(user, pw)) {
      this.server('/check-auth', {
        user,
        pw
      })
        .then(this.success.bind(this))
        .catch(this.failure.bind(this));
    }
  }

  success () {
    // Super call
    super.success.call(this, 'Authenticated.');
  }

  failure (err) {
    // Super call
    super.failure.call(this, `Auth failed: ${err}`);
  }
}

var auth = new AuthControllerOO(
  // In addition, we also need composition.

  // Composition in OOP is when a class is designed to keep a reference to an object that it can use in its methods.
  // A real world example would be that a car itself isn't an engine, it just has one.
  // The car simply integrates the engine to compose a higher level of abstraction and provide more value for its users.

  // Here, we're passing in an instance of LoginController for the AuthController's login property to keep a reference to.
  new LoginControllerOO()
);

/*
var submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function (event) {
  auth.checkAuth();

  event.preventDefault();
});
*/

// We have base behaviors that all controllers share, which are success(...), failure(...), and showDialog(...).
// Our child classes override failure(...) and success(...) to augment the default base class behavior.

// AuthController also needs an instance of LoginController to interact with the login form.
// An instance of LoginController is stored in an AuthController property called this.login, which AuthController can use to invoke behavior on LoginController.

// EXAMPLE B - SIMPLIFICATION WITH OLOO

var LoginController = {
  errors: [],
  getUser: function () {
    return document.getElementById('login-username').value;
  },
  getPassword: function () {
    return document.getElementById('login-password').value;
  },
  validateEntry: function (user, pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();

    if (!(user && pw)) {
      return this.failure('Please enter a username and password.');
    } else if (pw.length < 5) {
      return this.failure('Password must be at least 5 characters.');
    }

    // Validated
    return true;
  },
  showDialog: function (title, msg) {
    console.log(`${title}: ${msg}`);
  },
  failure: function (err) {
    this.errors.push(err);
    this.showDialog('Error', `Login invalid, ${err}`);
  }
};

// Link AuthController to delegate to LoginController
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

// Since AuthController is just an object (and so is LoginController), we don't need to instantiate it with NEW to perform our task. We'd simply do the following:

AuthController.checkAuth();

// Of course, with OLOO, if you do need to create additional objects in the delegation chain, you still don't need to instantiate anything, you just gotta create and link the objects:

var controller1 = Object.create(AuthController);
var controller2 = Object.create(AuthController);

// With behavior delegation, AuthController and LoginController are horizontal peers of each other rather than a parent/child.

// We arbitrarily chose to have AuthController delegate to LoginController, it would have still worked if LoginController instead delegated to AuthController!
// The beauty of delegation is that it's commutative!

// Anyway, the main takeaway is that in this example, we only have 2 entities, LoginController and AuthController, instead of 3 like we did with "classes".

// We didn't need a base Controller class to "share" behavior between LoginController and AuthController because delegation is a powerful enough mechanism to give us the functionality we need.

// There's also no need for composition because delegation allows the two objects to cooperate differentially as needed.

// The bottom line is that we ended up with the same capability, but with a significantly simpler design. That's the power of OLOO!
