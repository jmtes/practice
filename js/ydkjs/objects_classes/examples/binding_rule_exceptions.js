function intro () {
  console.log('Hi, my name is ' + this.name);
}

// EXAMPLES OF AN IGNORED THIS

var name = 'Cleo';

intro.call(null); // "Hi, my name is Cleo"

function greeting (person1, person2) {
  console.log(person1 + ' says hello to ' + person2);
}

// It's common to use apply() for spreading out arrays of values as parameters to a function call.
greeting.apply(null, ['Heidi', 'Steve']); // "Heidi says hello to Steve"

// With ES6 though, you'd better just use the spread operator to achieve the same thing without having to use apply() and an unnecessary THIS binding:
greeting(...['Quinn', 'Seong-Min']); // "Quinn says hello to Seong-Min"

// Similarly, bind() can curry parameters (pre-set values):
var vivianGreeting = greeting.bind(null, 'Vivian');
vivianGreeting('Camilla'); // "Vivian says hello to Camilla"
