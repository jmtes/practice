var user = {
  name: 'Helgi',
  get location () {
    return this._location_;
  },
  set location (value) {
    console.log('Invoked location setter');
    this._location_ = value;
  }
};

user.location = 'Durham, NC';

console.log(user.name); // Helgi

// Because user already has a normal data accessor property called `name` directly present on it, the following assignment is as simple as changing the value of the existing property:

user.name = 'Luan';
console.log(user.name); // Luan

// If a property is not found directly on an object, the [[Prototype]] chain is traversed, just like for the [[Get]] operation.
// If the property is not found anywhere in the chain, it is added directly to the object with the specified value.

user.birthday = 'March 5';

Object.defineProperty(user, 'birthday', {
  writable: false
});

console.log(user.birthday); // March 5

// If the property IS already present somewhere higher in the chain, nuanced behavior can occur with the assignment.

// EXAMPLES WITH SHADOWING

// If a property name ends up on both an object and at a higher level of the object's prototype chain, the property at the higher level is shadowed by the one on the lower level.
// This is because the property lookup will always find the property that's lower in the chain first.

// Shadowing a property is not as simple as it may seem, though.

// There are three scenarios for a property assignment when the property is NOT already directly on the object but IS at a higher level of the object's prototype chain.

// CASE ONE

// If a normal data accessor property of the requested name is found anywhere higher in an object's prototype chain and the property is writable, a new property of that name is added directly to the object, resulting in a shadowed property.

var user2 = Object.create(user);

console.log(user2.name); // Luan

user2.name = 'Taj';

// New name property on user2 will shadow that of user:
console.log(user2.name); // Taj

// CASE TWO

// If the property is found higher in the prototype chain but is not writable, then both the setting of that existing property as well as creation of a shadowed property on the object are disallowed:

console.log(user2.birthday); // March 5
user2.birthday = 'September 26';
console.log(user2.birthday); // March 5

// This would throw an error in strict mode.

// CASE THREE

// If the property is found higher in the object's prototype chain and it's a setter, the setter will always be called. No new property will be added to the object, nor will the setter be redefined.

console.log(user2.location); // Durham, NC

user2.location = 'Bakersfield, CA';

console.log(user2.location); // Bakersfield, CA
console.log(user.location); // Durham, NC

console.log(Object.hasOwnProperty.call(user, 'location')); // true

console.log(user2); // No location property

console.log(Object.getOwnPropertyDescriptor(user2, 'location')); // undefined
