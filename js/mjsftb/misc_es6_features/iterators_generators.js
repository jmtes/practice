// Iterators and generators are both used to iterate through things but are used in different ways.

// Iterators are kind of like advanced loops that can be paused.
// Generators are functions that can be paused and can return multiple values.

// Iterator Example
function nameIterator (names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ? {
        value: names[nextIndex++],
        done: false
      } : {
        done: true
      };
    }
  };
}

// Create an array of names
const namesArr = ['Juno', 'Fen', 'Ava'];
// Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value); // Outputs Juno
console.log(names.next().value); // Outputs Fen
console.log(names.next().value); // Outputs Marion
console.log(names.next().value); // Outputs undefined

// Generators are similar but they're basically functions that can return (yield) multiple values

// Generator Example (denoted with a * after the function keyword)
function * nameGenerator () {
  yield 'Daniel';
  yield 'Naveen';
  yield 'Isa';
}

const name = nameGenerator();

// Value of name.next() is the same as with the iterator.
console.log(name.next().value); // Outputs Daniel
console.log(name.next().value); // Outputs Naveen
console.log(name.next().value); // Outputs Isa
console.log(name.next().value); // Outputs undefined

// ID Creator
function * createIDs () {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();

console.log(gen.next().value);
