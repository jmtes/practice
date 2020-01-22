// EXAMPLE OF A REVEALING MODULE

function CoolModule () {
  var something = 'cool';
  var another = [1, 2, 3];

  function doSomething () {
    console.log(something);
  }

  function doAnother () {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3

// EXAMPLE OF AN IMMEDIATELY INVOKED SINGLETON MODULE

var foo2 = (function CoolModule () {
  var something = 'nice';
  var another = [4, 5, 6];

  function doSomething () {
    console.log(something);
  }

  function doAnother () {
    console.log(another.join(' ! '));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();

foo2.doSomething(); // nice
foo2.doAnother(); // 4 ! 5 ! 6

// EXAMPLE OF A MODULE WITH PARAMETERS

function User (name) {
  function identify () {
    console.log(name);
  }

  return {
    identify
  };
}

var user1 = User('Griffith');
var user2 = User('Priya');

user1.identify(); // Griffith
user2.identify(); // Priya

// EXAMPLE WHERE YOU NAME THE OBJECT YOU'RE RETURNING AS YOUR PUBLIC API

var user3 = (function MakeUser (name) {
  function change () {
    // Modify public API
    publicAPI.identify = identify2;
  }

  function identify1 () {
    console.log(name);
  }

  function identify2 () {
    console.log(name.toUpperCase());
  }

  var publicAPI = {
    change,
    identify: identify1
  };

  return publicAPI;
})('Camille');

user3.identify(); // Camille
user3.change();
user3.identify(); // CAMILLE

// By retaining an inner reference to the public API inside your module instance, you can modify that module instance from the inside.
// This includes adding/removing/modifying the values of methods and properties.
// You can actually modify the API during runtime!
