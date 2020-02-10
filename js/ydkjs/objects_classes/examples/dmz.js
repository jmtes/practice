function greeting (person1, person2) {
  console.log(person1 + ' says hello to ' + person2);
}

// dmz will be our empty placeholder THIS object

// The easiest way to set your DMZ object up as totally empty is with Object.create(null).
var dmz = Object.create(null);

// Spreading out array as parameters
greeting.apply(dmz, ['Seo-Yeon', 'Rick']); // "Seo-Yeon says hello to Rick"

// Currying with bind()
var ernestGreeting = greeting.bind(dmz, 'Ernest');
ernestGreeting('Margaret'); // "Ernest says hello to Margaret"
