// CLASSICAL (PROTOTYPAL) OO STYLE

function UserOO (name) {
  this.name = name;
}

UserOO.prototype.identify = function () {
  return `I am ${this.name}`;
};

function RoleOO (role) {
  UserOO.call(this, role);
}

RoleOO.prototype = Object.create(UserOO.prototype);

RoleOO.prototype.speak = function () {
  console.log(`Hello, ${this.identify()}.`);
};

var r1 = new RoleOO('Admin');
var r2 = new RoleOO('Mod');

r1.speak(); // Hello, I am Admin.
r2.speak(); // Hello, I am Mod.

// Child class RoleOO inherited from parent class UserOO.
// RoleOO is then instantiated twice as r1 and r2.
// r1 delegates to RoleOO.prototype, which in turn delegates to UserOO.prototype.

// DELEGATION OLOO STYLE

var User = {
  init: function (name) {
    this.name = name;
  },
  identify: function () {
    return `I am ${this.name}`;
  }
};

var Role = Object.create(User);

Role.speak = function () {
  console.log(`Hello, ${this.identify()}.`);
};

var r3 = Object.create(Role);
r3.init('Admin');

var r4 = Object.create(Role);
r4.init('Mod');

r3.speak(); // Hello, I am Admin.
r4.speak(); // Hello, I am Mod.

// We make the same utilization of [[Prototype]] delegation as we did in the OO-style code.

// More importantly though, we've greatly simplified all the other stuff going on because now we've set up OBJECTS linked to each other!
// And we did it without all the confusion of constructor calls, prototype property access, and things that look but don't BEHAVE like classes!
