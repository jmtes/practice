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

console.log(user); // The ssn property shows up here...

// ...But not in this for...in loop:
for (const property in user) {
  console.log(`${property}: ${user[property]}`);
}
