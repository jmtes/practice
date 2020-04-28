// "Traditional JS Class" Vehicle
function Vehicle () {
  this.engines = 1;
}

Vehicle.prototype.ignition = function () {
  console.log('Turning on my engine.');
};

Vehicle.prototype.drive = function () {
  this.ignition();
  console.log('Steering and moving forward!');
};

// "Parasitic Class" Car
function Car () {
  // First, Car is a Vehicle
  var car = new Vehicle();

  // Now, let's modify our car to specialize it
  car.wheels = 4;

  // Save a privileged reference to Vehicle.drive()
  var vehicleDrive = car.drive;

  // Override Vehicle.drive()
  car.drive = function () {
    vehicleDrive.call(this);
    console.log(`Rolling on all ${this.wheels} wheels!`);
  };

  return car;
}

// We initially make a copy of the drive definition from the parent class Vehicle, then mix-in our child class Car definition.
// The parent class reference is preserved as needed.

var myCar = new Car();

// By using the NEW keyword here, a new object was created and assigned to be Car's THIS reference.
// Since we don't use that object though and instead return our own car object, the initially created object was just discarded.
// Car() could be called without the NEW keyword with identical functionality and without the wasted object creation/garbage collection.

myCar.drive();
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!
