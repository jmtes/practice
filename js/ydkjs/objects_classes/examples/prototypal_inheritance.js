// EXAMPLE A - TYPICAL "PROTOTYPE STYLE" CODE

function User (name) {
  this.name = name;
}

User.prototype.myName = function () {
  return this.name;
};

function Role (name, role) {
  User.call(this, name);
  this.role = role;
}

// Here we make a new Role.prototype linked to User.prototype
Role.prototype = Object.create(User.prototype);

// When Role was declared in Line 11, it had a prototype pointing to its default object. 
// That object was not linked to User.prototype like we wanted, so in Line 17 we created a new object that IS linked and basically threw away the original object.

// Now Role.prototype.constructor is gone and might need to be manually "fixed" if you're in the habit of relying on such properties!

Role.prototype.myRole = function () {
  return this.role;
};

var user1 = new Role('Rajendra', 'Admin');

console.log(user1.myName()); // Rajendra
console.log(user1.myRole()); // Admin

// EXAMPLE B - AN APPROACH TO "PROTOTYPAL INHERITANCE" THAT DON'T WORK

// Role.prototype = User.prototype;

// Line 35 doesn't create a new object for Role.prototype to be linked to.
// It just makes another Role.prototype another reference (essentially an alias) for User.prototype.

// If you start assigning properties to Role.prototype, you're modifying the shared User.prototype object rather than a separate object.
// This would affect any other objects linked to User.prototype and is likely not what you'd want.
// If it IS what you want, you likely don't need Role at all and should just use User for simplicity's sake.

// EXAMPLE C - ANOTHER APPROACH TO "PROTOTYPAL INHERITANCE" THAT DOESN'T WORK

// Role.prototype = new User();

// While a new seprate object IS created in Line 46 and is linked to User.prototype, it uses the User(...) constructor call to do it.
// This will prove problematic if User() has any side effects such as logging, changing state, registering against other objects, adding properties to THIS, etc.
// Those side effects will happen at the time of linking (and likely against the wrong object), rather than only when the eventual Role "descendants" are created, as would likely be expected.

// EXAMPLE D - MODIFYING THE LINKAGE OF AN OBJECT IN ES6

Object.setPrototypeOf(Role.prototype, User.prototype);

// This modifies the existing Role.prototype rather than throwing it away and replacing it.
