class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting () {
    return `Hello ${this.firstName}!`;
  }
}

class Customer extends Person {
  constructor (firstName, lastName, phone, membership) {
    super(firstName, lastName); // Calls the parent class constructor
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost () {
    return 500;
  }
}

const juno = new Customer('Juno', 'Tesoro', '555-5555', 'Standard');

console.log(juno);
// When juno is logged, you can see that the Person prototype and the Customer constructor are being used because Customer is a subclass of Person.

// All methods of a parent class are accessible from an instance of a subclass.
console.log(juno.greeting());

console.log(Customer.getMembershipCost());
