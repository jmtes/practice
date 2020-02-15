// EXAMPLE A - DEFAULT PROPERTY DESCRIPTORS

var user = {
  name: 'Sorana'
};

console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// {
//   value: 'Sorana',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// EXAMPLE B - USING OBJECT.DEFINEPROPERTY()

Object.defineProperty(user, 'gender', {
  value: 'female',
  writable: true,
  configurable: true,
  enumerable: true
});

Object.defineProperty(user, 'birthday', {
  value: 'September 9',
  writable: false,
  configurable: false,
  enumerable: true
});

// EXAMPLE C - WRITABLE PROPERTIES

// Because gender is writable, you can change the property value:
console.log(user.gender); // female
user.gender = 'nonbinary';
console.log(user.gender); // nonbinary

// The birthday value isn't writable though, so you can't change it:
console.log(user.birthday); // September 9
user.birthday = 'March 1';
console.log(user.birthday); // Still September 9

// NOTE: If you're in strict mode, attempting to modify an unwritable value will throw an error. Otherwise, it will silently fail.

// EXAMPLE D - CONFIGURABLE PROPERTIES

// Because birthday is not configurable, trying to modify its property descriptors results in an error regardless of strict mode:
try {
  Object.defineProperty(user, 'birthday', {
    value: 'September 9',
    writable: false,
    configurable: true,
    enumerable: true
  });
} catch (error) {
  console.log(error); // TypeError: Cannot redefine property: birthday
}

// You would be able to redefine the name and gender properties without a problem however.

// EXAMPLE E - ATTEMPTING TO DELETE AN UNCONFIGURABLE PROPERTY

// If a property is unconfigurable, it cannot be deleted with the delete operator and fails silently:
delete user.birthday;
console.log(user.birthday); // September 9

// The gender property is configurable though, so the following delete operation works:
delete user.gender;
console.log(user.gender); // undefined

// Adding the gender property back in for the next example
user.gender = 'nonbinary';

// EXAMPLE F - THE ENUMERABLE PROPERTY

Object.defineProperty(user, 'ssn', {
  value: '000 00 0000',
  writable: false,
  configurable: false,
  enumerable: false
});

// The following reveal that user's ssn property certainly exists:
console.log(user.ssn); // 000 00 0000
console.log('ssn' in user); // true
console.log(user.hasOwnProperty('ssn')); // true

console.log(user); // And it shows up here...

// ...But not in this for...in loop:
for (const property in user) {
  console.log(`${property}: ${user[property]}`);
}

// The following are other ways of determining a property's enumerabilty:
console.log(user.propertyIsEnumerable('ssn')); // false
console.log(user.propertyIsEnumerable('name')); // true

// The Object.keys() method returns an array of all an object's enumerable properties:
console.log(Object.keys(user)); // The ssn property won't show up here!

// The Object.getPropertyNames() method returns an array of ALL an object's properties regardless of enumerability:
console.log(Object.getOwnPropertyNames(user)); // The ssn property will show up here!

// NOTE: Neither the Object.keys() nor the Object.getOwnPropertyNames() method consults the prototype chain; both inspect ONLY the direct object specified!

// There's currently no built-in way to get a list of ALL properties in an object's entire prototype chain, which is what the IN operator would consult.
// You could approximate such a utility by recursively traversing an object's prototype chain and, at each level, capturing the list from Object.keys() -- only enumerable properties.
