// EXPLICIT MIXINS AND PSEUDO-POLYMORPHISM

// Extremely simplified mixin(...) example
function mixin (sourceObject, targetObject) {
  for (var key in sourceObject) {
    if (!(key in targetObject)) {
      targetObject[key] = sourceObject[key];
    }
  }

  return targetObject;
}

var Vehicle = {
  engines: 1,
  ignition: function () {
    console.log('Turning on my engine.');
  },
  drive: function () {
    this.ignition();
    console.log('Steering and moving forward!');
  }
};

var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function () {
    Vehicle.drive.call(this);
    console.log('Rolling on all ' + this.wheels + ' wheels!');
  }
});

// Car has a copy of the properties and functions from Vehicle.
// Technically, functions are not actually duplicated but rather the function references themselves are copied.

Car.drive();
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!

console.log(Object.keys(Car));
// ['wheels, 'drive', 'engines', 'ignition']
// Notice that drive() isn't included twice!

// Line 27 is an example of  "explicit pseudo-polymorphism".
// Because both Car and Vehicle had a function of the same name, drive(), we had to make an absolute (not relative) reference to distinguish a call to one or the other.
// We explicitly specified the Vehicle object by name, invoked its drive function, and specified Car as the THIS context.

// While explicit pseudo-polymorphism can emulate the behavior of multiple inheritance, it only makes your code needlessly complex and harder to read/maintain!
// Just avoid it whenever possible.
