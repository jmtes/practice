// What if we want to have one object type inherit from another?

// Person constructor
function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there, ${this.firstName} ${this.lastName}!`;
};

// const person1 = new Person('Juno', 'Tesoro');

// Customer constructor
function Customer (firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // call is a function that allows us to call another function from somewhere else in the current context.
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Any prototype method added to Person will now be accessible from Customer.

// Make Customer.prototype return Customer
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Marion', 'Rey', '555-8452', 'Standard');

console.log(customer1);

// You can now override Person prototypes with new Customer prototypes.
Customer.prototype.greeting = function () {
  return `Hello there, ${this.firstName} ${this.lastName}! Welcome to our company!`;
};

console.log(customer1.greeting());
