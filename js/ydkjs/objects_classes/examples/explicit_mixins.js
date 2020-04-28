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

Car.drive();
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!

console.log(Object.keys(Car));
// ['wheels, 'drive', 'engines', 'ignition']
// Notice that drive() isn't included twice!
