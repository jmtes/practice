// ES6 classes make it easier to write object-oriented code.
// It's important to know how it works under the hood though.

// You know what object literals are:
// const juno = {
//   name: 'Juno',
//   age: 19
// };
// These are fine for when you're dealing with one specific instance of that object. But when you want to make multiple instances following the same schema then you're going to want to make a constructor.

// Person Constructor
function Person (name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = () => {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// The this keyword refers to the current instance of the object. It's like self in Python.

// this can also be used outside of a constructor function.

// console.log(this);

// This will log the window object because that is what this will refer to in the global scope.

// const juno = new Person('Juno', 19);
// const marion = new Person('Marion', 18);

// console.log(juno, marion);

const juno = new Person('Juno', '4-1-2000');
console.log(juno.calculateAge());
