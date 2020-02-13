// EXAMPLE A - DEFINING A GETTER

// You can define it right in the object literal like so:
var user = {
  get name () {
    return 'Sheryl';
  },
  birthday: 'December 30'
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// It appears doing it like this makes the property configurable and enumerable by default.

// Or you can define it with defineProperty():
Object.defineProperty(user, 'fullName', {
  get: function () {
    return this.name + ' Mitchell';
  },
  enumerable: true // Make sure fullName shows up as an object property
});

console.log(Object.getOwnPropertyDescriptor(user, 'fullName'));

// It appears doing it like this makes the property unconfigurable and unenumerable by default. You must explicitly set those as true.

console.log(user.name); // Sheryl
console.log(user.fullName); // Sheryl Mitchell
console.log(user);

// In the console output for line 29, the "name" and "fullName" properties don't show up in the object unless you expand it. I'm guessing this is the case for all accessor descriptors and only data descriptors like "birthday" show up by default.

// Since there's no setter defined for "name", trying to set the value like so will silently fail:
user.name = 'Tanya';
console.log(user.name); // Sheryl

// Even if there WAS a valid setter, the getter is hardcoded to return only "Sheryl", so the set operation would be moot.

// To make this scenario more sensible, properties should also be defined with sestters.

// You should always declare both getter and setter for a property. Having only one or the other often leads to unexpected behavior.

// EXAMPLE B - DEFINING A SETTER

user = {
  get name () {
    return this._name_;
  },
  set name (value) {
    this._name_ = value;
  }
};

// NOTE: The underscores around the property "_name_" are simply a convention and imply nothing special about its behavior. It's a normal property like any other.

user.name = 'Manuela';
console.log(user.name);
