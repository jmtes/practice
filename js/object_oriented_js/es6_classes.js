class Person {
  constructor (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting () {
    return `Hello ${this.firstName}!`;
  }

  calculateAge () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried (newLastName) {
    this.lastName = newLastName;
  }

  // A static method is one you can use without having to instantiate an object first.
  static addNumbers (x, y) {
    return x + y;
  }
}

// Any method added inside the class is going to be added to the prototype.

const juno = new Person('Juno', 'Tesoro', '4/1/2000');

// juno.getsMarried('Key');
console.log(juno);

// Invoking a static method
console.log(Person.addNumbers(1, 2));
