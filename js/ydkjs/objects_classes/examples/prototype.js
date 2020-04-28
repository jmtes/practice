// EXAMPLE A 

var user = {
  name: 'Brendan'
};

console.log(user.name); // Brendan

// In Chapter 3, we examined the [[Get]] operation that is invoked when you reference a property on an object.
// For that default [[Get]] operation, the first step is to check if the object itself has a property `name` on it, using it if it does.

// NOTE: Normal [[Get]] and [[Put]] behavior does not apply if an ES6 Proxy is involved. More on that later on.

// [[Get]] will follow the [[Prototype]] link of an object if the requested property, in this case `name`, isn't present in the object itself.

// Create an object linked to user
var user2 = Object.create(user);

console.log(user2.name); // Brendan

// The user2 object's name property doesn't actually exist, but the property access succeeded nonetheless because it was found in the user object, which it is prototype-linked to.

console.log(user2.birthday); // undefined

// Here the birthday property wasn't found in neither user2 nor user.
// Because the prototype chain ends after user, the return result from the [[Get]] operation is undefined.

// EXAMPLE B - LOOPING AND ENUMERATION

// Similarly to the prototype chain lookup process, if you use a FOR...IN loop to iterate over an object, any property that can be reached via its chain and is also enumerable will be enumerated.

for (var k in user2) {
  console.log(`Found: ${k}`);
}
// Found: name

// Furthermore, if you use the IN operator to test for the existence of a property in an object, IN will check its entire chain regardless of enumerability.

console.log('name' in user2); // true

// TLDR: The [[Prototype]] chain is consulted, one link at a time, when you perform various property lookups. The lookup stops once either the property is found or the chain ends.
