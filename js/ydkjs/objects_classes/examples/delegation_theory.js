var Task = {
  setID: function (id) {
    this.id = id;
  },
  outputID: function () {
    console.log(`ID: ${this.id}`);
  }
};

// Set up XYZ to delegate to Task
var XYZ = Object.create(Task);

XYZ.prepareTask = function (id, label) {
  this.setID(id);
  this.label = label;
};

XYZ.outputTaskDetails = function () {
  this.outputID();
  console.log(this.label);
};

// Task and XYZ are not classes or functions, they're just objects!

// In Line 14, the engine first looks for setID(...) inside of XYZ, but it finds no such method.
// So, its [[Prototype]] link is followed to Task, where it does find it!

// Because of impicit binding, setID(...) then runs in the context of XYZ even though it was found in Task.
// The same thing happens in Line 19 as well.

// NOTE: Delegation is more properly used as an internal implementation detail rather than exposed directly in an API design.
// We're not INTENDING for developers to call XYZ.setID(...).
// Instead we sort of HIDE the delegation by delegating to Task.setID(...) WITHIN the XYZ.prepareTask(...) function.
