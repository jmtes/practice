function intro (greeting) {
  console.log(greeting + ", I'm " + this.name);
}

var user = {
  name: 'Edna'
};

// Use `user` as the THIS for calls to intro()
// intro is the callbackfn param to the forEach while user is the thisArg param!
// You can hover over `forEach` for more info!
// As you loop through the array, each item is supplied as the greeting parameter to intro().

['Hello', 'Hi', 'Sup'].forEach(intro, user);

// "Hello, I'm Edna"
// "Hi, I'm Edna"
// "Sup, I'm Edna"

// Internally, these various functions almost certainly use explicit binding via call() or apply().

// Note: In this case, the optional param is called "thisArg" rather than "context".
