function identify () {
  // Return an arrow function
  return name => {
    // THIS here is lexically adopted from intro()
    console.log(this.name);
  };
}

// Closure!

var user1 = {
  name: 'Sundar'
};

var user2 = {
  name: 'Hyacinth'
};

var sundarId = identify.call(user1);
sundarId.call(user2); // "Sundar", not "Hyacinth"

// The arrow function created in identify() lexically captures whatever identify()'s THIS is at its call time.
// Since identify() was THIS-bound to user1, sundarId, a reference to the returned arrow function, will also be THIS-bound to user1.

// The lexical binding of an arrow function cannot be overridden, even with NEW.

sundarId(); // "Sundar"
