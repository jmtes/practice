function makeRangeIterator (start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = {
          value: nextIndex,
          done: false
        };
        nextIndex += step;
        iterationCount++;
        return result;
      } else {
        return {
          value: iterationCount,
          done: true
        };
      }
    }
  };

  return rangeIterator;
}

function * makeRangeGenerator (start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  while (nextIndex < end) {
    yield nextIndex;
    nextIndex += step;
    iterationCount++;
  }

  return iterationCount;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}

console.log('Iterated over sequence of size: ', result.value);

// USING FOR...OF TO LOOP THROUGH GENERATOR
// console.log('FOR...OF WITH GENERATOR');
// const gen = makeRangeGenerator(1, 10, 2);
// for (let i of gen) {
//   console.log(i.value);
// }

// SPREADING AN ITERATOR INTO AN ARRAY
// const gen = makeRangeGenerator(1, 10, 2);
// const vals = [...gen];
// console.log(vals); // Logs "[1, 3, 5, 7, 9]". Only the yielded values are included, the returned iterationCount value was omitted.

// SPREADING AN ITERATOR INTO A FUNCTION
console.log('SPREADING ITERATOR INTO FUNCTION');
function printValues (a, b, c, d) {
  console.log(a, b, c, d);
}
const gen = makeRangeGenerator(1, 20, 2);
// const vals = [...gen];
// console.log(vals);
printValues(...gen); // Logs "1 3 5 7". I think the extraneous parameter 9 was ignored?

console.log(gen.next().value); // This logs "undefined"! So I think the 9 WAS ignored. This implies that the generator was consumed, its values were collected, and then they were passed into printValues!

// Another thing that confirms this is that when you uncomment the two lines above the call to printValues, printValues will log 5 "undefined"s!

// The iterator-consumption protocol is technically defined for consuming all iterables in JS. It automatically creates an iterator instance from an iterable and consumes JUST THAT ITERATOR INSTANCE to completion. This means that a single iterable can be iterated through more than once because each time a new iterator instance would be created and used.

// You can use for...of loops to iterate through any iterable.

// Since arrays are iterables, we can shallow copy one using iterator consumption via the ... spread operator:
const arr = ['sarcophagus', 'horseman', 'stead'];
const arrCopy = [...arr];
console.log(arr, arrCopy); // Structurally identical arrays printed

const word = 'cadence';
const letters = [...word];
console.log(letters);

// An example with a Map
var users = new Map();
users.set(1, 'Giovanna Wood');
users.set(2, 'Etta Sandoval');
users.set(3, 'Michael Carr');

console.log('ITERATING THROUGH A MAP');
// The [id, name] syntax is an example of array destructuring! You cna also think of it as like "for k,v in dictionary" in Python!
for (let [id, name] of users) {
  console.log(`User ${id}: ${name}`);
}

// If we want the index AND value in an array iteration, you can make an entries iterator with the entries method:
console.log('ARRAY ENTRIES METHOD');
for (let [index, value] of arr.entries()) {
  console.log(`${value} is stored at index ${index} of the array`);
}

// Generally, alll built-in JS iterables have three iterator forms: keys only ( keys() ), values only ( values() ), and entries (both) ( entries () ).
