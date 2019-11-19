// Prototypes are one of the most confusing concepts in JS for beginners.
// Each object in JS has a prototype and a prototype is an object itself. All object inherit their properties and methods form their prototype.

// When you're dealing with object literals, you're inheriting from a prototype called Object.prototype
// When you're dealing with objects that were created with a constructor, you're inheriting from something like Person.prototype

// There's something called the prototype chain where you have something like the Person prototype but you can go up to the main Object prototype.

// Person constructor
function Person (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = () => {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// When an object is logged, you'll notice that there it has a property called __proto__. It is hidden, so you can't access it by say, using a forEach to loop through an object's properties.
// The constructor value represents the Person prototype. Anything put inside the Person prototype will show up there.
// There will also be another __proto__ property which is the Object prototype. The object prototype is always at the top of the prototype chain.

// With the Person constructor, you can see that each Person instance will have its own firstName, lastName, and birthday.
// However, the calculateAge method will be the same across all instances. Thus, this is something that should be put inside the Person prototype rather than directly into a Person object.
// This helps keep your object literals neat!

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return (Math.abs(ageDate.getUTCFullYear() - 1970));
};

// Arrow functions do not work when defining prototype methods because they automatically bind the context! Just use a regular function!

Person.prototype.getFullName = function () {
  return (this.firstName + ' ' + this.lastName);
};

// Gets married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const juno = new Person('Juno', 'Tesoro', '4/1/2000');
const marion = new Person('Marion', 'Rey', '2/22/02');

// You can still invoke calculateAge as you would if you just defined it in the constructor.
console.log(juno.calculateAge()); // Returns 19.
console.log(juno.getFullName());

marion.getsMarried('Key');
console.log(marion.getFullName());

// You do not need any syntax for accessing properties from the Object prototype.
// console.log(juno.hasOwnProperty('firstName'));

// The above line is not semistandard compliant even though it looks much neater. The below line is how you should do it.
console.log(Object.prototype.hasOwnProperty.call(juno, 'firstName'));

// This returns false because getFullName is defined in the prototype rather than the Person object literal, which makes it not an instance's "own", in a sense. It is shared across all Person instances.
console.log(Object.prototype.hasOwnProperty.call(juno, 'getFullName'));
