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
