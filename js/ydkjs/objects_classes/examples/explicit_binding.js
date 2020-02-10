// EXAMPLE OF USING CALL TO FORCE THIS BINDING

function greeting () {
  console.log("Hello, I'm ", this.name);
}

var user = {
  name: 'Karl'
};

greeting.call(user); // Hello, I'm Karl

// Invoking greeting() with explicit binding using call() allows us to force its THIS to be user.

