var user = {
  name: 'Kimmy'
};

console.log(user.name); // Kimmy

// user.name is a property access, but it doesn't just look in user for a property called "name", as it might seem.

// The code actually performs a [[Get]] operation on the user object.

// [[Get]] will first inspect the object for a property of the requested name, and if it finds it, it returns the value accordingly.

// If a property of that name is NOT found however, the [[Prototype]] chain is traversed.

// If, after traversing the prototype chain, [[Get]] still cannot come up with a value for the requested property, it returns the value undefined.

console.log(user.gender); // undefined

// This behavior is different from when a variable lookup fails.
// If you reference a variable that cannot be resolved within the applicable lexical scope lookup, the result is not undefined and instead a ReferenceError is thrown.

var user2 = {
  name: undefined
};

console.log(user2.name); // undefined
console.log(user2.gender); // undefined

// From a value perspective, there's no difference between the two references in lines 26 and 27.
// However, the [[Get]] operation underneath potentially performed more "work" for the reference user2.gender than it did for user2.name.

// Inspecting only the value results, you cannot distinguish whether:
// 1. The property exists and holds the explicit value `undefined`, OR
// 2. The property doesn't exist and the `undefined` was just the default return value from the failed [[Get]]

// There ARE ways you can distinguish the two scenarios though!

// You can ask the object if it has a certain property without asking to get that property's value.

// It can be done with an IN membership test like so:
console.log('name' in user2); // true
console.log('gender' in user2); // false

// The IN operator will check to see if the property is either in the object or if it exists at any higher level of the prototype chain.

// Or with the hasOwnProperty() method:
console.log(user2.hasOwnProperty('name')); // true
console.log(user2.hasOwnProperty('gender')); // false

// This is the semistandard-compliant way to call hasOwnProperty():
console.log(Object.prototype.hasOwnProperty.call(user2, 'name'));

// Unlike the IN operator, hasOwnProperty() only checks if user2 has the property and will not consult the prototype chain.

// hasOwnProperty is accessible for all normal objects via delegation to Object.prototype.

// It's possible though to create an object that does not link to Object.prototype, thus ensuring an attempt to invoke hasOwnProperty() with it will fail:

var notPrototypeLinked = Object.create(null);

try {
  notPrototypeLinked.hasOwnProperty('property');
} catch (error) {
  console.log(error); // TypeError: notPrototypeLinked.hasOwnProperty is not a function
}

// In this scenario, a more robust way of performing such a check would be the following:
console.log(Object.prototype.hasOwnProperty.call(notPrototypeLinked, 'property')); // false

// This borrows the base hasOwnProperty() method and uses explicit THIS binding to apply it against notPrototypeLinked.

// NOTE ABOUT THE IN OPERATOR

// The IN operator seems like it checks for the existence of a VALUE inside a container, but it actually checks for the existence of a property name.

var user3 = {
  name: 'Tori',
  birthday: 'May 6'
};

console.log('name' in user3); // true
console.log('Tori' in user3); // false

// This is especially important to note in arrays because such checks will not behave as expected:

var users = ['Joline', 'Janelle', 'Esther'];

console.log('Janelle' in users); // false

// Adding a property to the array like so would return the expected result:
users.Gabrielle = 'Gabrielle';
console.log('Gabrielle' in users); // true

// To check for a value inside an array, you'd better just use the includes() method:
console.log(users.includes('Esther')); // true

// The includes() method only takes into account an array's indexed values; it won't check any named properties:
console.log(users.includes('Gabrielle')); // false
