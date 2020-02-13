var user = {};

// EXAMPLE A - OBJECT CONSTANT

// Defining the birthday property like so ensures it cannot be changed, redefined, or deleted:
Object.defineProperty(user, 'birthday', {
  value: 'June 5',
  writable: false,
  configurable: false
});

// EXAMPLE B - PREVENT EXTENSIONS

var noExtensions = {
  hasMoreThanOneProperty: false
};

Object.preventExtensions(noExtensions);

// This will throw a TypeError if in strict mode but will fail silently otherwise:
noExtensions.newProperty = 'value';
console.log(noExtensions.newProperty); // undefined

// EXAMPLE C - SEALING AN OBJECT

var sealedUser = {
  name: 'Leonard',
  birthday: 'February 18',
  location: 'Huntington, NY'
};

Object.seal(sealedUser);

// Cannot add new properties:
sealedUser.occupation = 'Clerk';
console.log(sealedUser.occupation); // undefined

// Existing properties can still be modified:
console.log(sealedUser.location); // Huntington, NY
sealedUser.location = 'Washington, DC';
console.log(sealedUser.location); // Washington, DC

// EXAMPLE D - FREEZING AN OBJECT

var frozenUser = {
  name: 'Marilou',
  birthday: 'November 22',
  location: 'Atlanta, GA',
  hobbies: ['painting', 'cooking', 'singing']
};

Object.freeze(frozenUser);

// Cannot add new properties:
frozenUser.occupation = 'Vet';
console.log(frozenUser.occupation); // undefined

// Cannot modify existing properties:
console.log(frozenUser.location); // Atlanta, GA
frozenUser.location = 'Lincoln, NE';
console.log(frozenUser.location); // Atlanta, GA

// Objects referenced in property values are still mutable though:
console.log(frozenUser.hobbies);
frozenUser.hobbies.push('reading');
console.log(frozenUser.hobbies); // Array will have "reading" added to it
