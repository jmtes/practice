// IMPLICIT VS EXPLICIT BINDING

function introduce () {
  console.log('Hi, my name is ' + this.name);
}

var person1 = {
  name: 'Trisha',
  introduce
};

var person2 = {
  name: 'Donna',
  introduce
};

person1.introduce(); // "Hi, my name is Trisha"
person2.introduce(); // "Hi, my name is Donna"

person1.introduce.call(person2); // "Hi, my name is Donna"
person2.introduce.call(person1); // "Hi, my name is Trisha"

// Explicit binding takes precedence over implicit binding.

// Thus, you should ask first if explicit binding applies before checking for implicit binding.

// PRECEDENCE OF NEW BINDING

function User (name) {
  this.name = name;
}

var user1 = {
  User
};

var user2 = {};

user1.User('Lenny');
console.log(user1.name); // "Lenny"

// Using function reference to call User() with user2 as the THIS and "Chika" as the name param
user1.User.call(user2, 'Chika');
console.log(user2.name); // "Chika"

// Invoking User() with NEW to create a new object (assigned to user3) to use as the THIS for that call and passing "Baz" as the name param
var user3 = new user1.User('Baz');
console.log(user1.name); // "Lenny"
console.log(user3.name); // "Baz"

// Remember that in lines 41 and 45, you're not calling User() with the context of user1.
// You're simply using an alias for the globally exposed User() function.
// From there, the call site determines what THIS will be when User() executes.

// New binding absolutely takes precedence over implicit binding.

// NOTE: NEW and call()/apply() cannot be used together.

// invalid = new User.call(user3); // "TypeError: User.call is not a constructor"

// We can still use hard binding to test whether explicit binding or new binding takes precedence.

// `obj1`
var user4 = {};

// `bar`
var UserAlias = User.bind(user4);
UserAlias('Ludwig');
console.log(user4.name); // "Ludwig"

// `baz`
var user5 = new UserAlias('Heiko');
console.log(user4.name); // "Ludwig"
console.log(user5.name); // "Heiko"

// UserAlias is hard-bound to user4, but its invocation in line 72 did NOT change user4.name to "Heiko" as we would have expected.

// Instead, the hard-bound call to UserAlias() IS able to be overridden with NEW.

// Since NEW was applied, we got the newly created object back, which we named user5, and we see that user5.name indeed has the value of "Heiko".
