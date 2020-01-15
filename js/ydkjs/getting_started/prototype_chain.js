// A prototype is a characteristic of an object, specifically resolution of a property access.
// Think about a prototype as a linkage between two objects. This linkage occurs when an object is created and it's linked to another object that already exists.

// A series of objects linked together via prototypes is called the "prototype chain".
// The purpose of this prototype linkage (i.e, from an object B to another object A) is so that accesses against B for properties/methods that B does not have are DELEGATED to A to handle.
// Delegation of property/method access allows two or more objects to cooperate with each other to perform a task.

// EXAMPLE A
var homework = {
  topic: 'JS'
};

// This homework object has a single property on it: topic. However, its default prototype linkage connects to the Object.prototype object, which has common built-in methods on it like toString() and valueOf().

// The prototype linkage delegation from homework to Object.prototype can be observed as follows:
console.log(homework.toString()); // "[object Object]"

// This works even though homework itself doesn't have a toString() method defined. The delegation invokes Object.prototype.toString() instead.

// OBJECT LINKAGE

// To define an object prototype linkage, you can create the object using Object.create(), which takes as parameter an object to link the new object to. It then returns the newly created and linked object.
var otherHomework = Object.create(homework);
console.log(otherHomework.topic); // "JS"

// Passing "null" as a param to Object.create() will create an object that is not prototype linked anywhere so it's purely a standalone object. This may be preferable in some circumstances:
var loneObj = Object.create(null);
loneObj.property = 'value';
console.log(loneObj.property); // It has its own properties...
// console.log(loneObj.valueOf()); // But this doesn't work because it's not linked to Object.prototype.

// Delegation through the prototype chain only applies for getting a property value and has no effect on setting them. If you assign a property of an object, that will apply only to that object regardless of where it's prototype linked to.
console.log(homework.topic); // "JS"
console.log(otherHomework.topic); // "JS"

otherHomework.topic = 'Python';
console.log(otherHomework.topic); // "Python"
console.log(homework.topic); // Still "JS"

// The topic in otherHomework is "shadowing" the property of the same name on the homework object in the chain.

// I think you can liken the prototype chain to class inheritance in OOP? That's what I got out of this at least.
