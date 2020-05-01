// EXAMPLE A - FAKING CLASS PROPERTIES

// If you need to track a shared state among class instances, you're just going to end up going back to the ugly prototype syntax:

class A {
  constructor () {
    // Make sure to modify the shared state, not set a shadowed property on the instances!
    A.prototype.count++;

    // This line works as expected via delegation.
    console.log(`Hello ${this.count}`);
  }
}

// Add a property for shared state directly to the prototype object
A.prototype.count = 0;

var a1 = new A(); // Hello 1
var a2 = new A(); // Hello 2

console.log(a1.count); // 2
console.log(a2.count); // 2

// The biggest problem here is that it betrays the class syntax by exposing the prototype prooperty as an implementation detail.

// EXAMPLE B - ACCIDENTAL SHADOWING

// Accidental shadowing is still a hazard with ES6 classes:

class B {
  constructor (id) {
    // Oops, we're shadowing the id() method with a property value on the instance
    this.id = id;
  }

  id () {
    console.log(`ID: ${this.id}`);
  }
}

var b1 = new B('b1');
// b1.id(); // Throws a TypeError because b1.id is now the string "b1" rather than a function

// EXAMPLE C - SUPER BINDING

// Consider what SUPER should do here (particularly with D and E):

class P {
  foo () { console.log('P.foo'); }
}

class C extends P {
  constructor () {
    super();
  }
}

var c1 = new C();
c1.foo(); // "P.foo"

var D = {
  foo: function () {
    console.log('D.foo');
  }
};

var E = {
  foo: C.prototype.foo
};

// Link E to D for delegation
Object.setPrototypeOf(E, D);

E.foo(); // P.foo

// You just have to be aware of which places you have to manully take care of binding SUPER. Ugh!
