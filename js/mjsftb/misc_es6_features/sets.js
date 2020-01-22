// Sets are a list of unique values of any type, pretty much like in Python.

// Instantiating a set
const set1 = new Set();

// Adding values to a set
set1.add(100);
set1.add('A string');
set1.add({
  name: 'Juno'
});
set1.add(true);
set1.add(100); // No error will be thrown, this will just be ignored

// You can also instantiate a set by passing an array to the constructor.
const set2 = new Set([1, true, 'str']);

console.log(set2);

// Getting set size
console.log(set1.size); // "4"

// Checking for values
console.log(set1.has(100)); // "true"
console.log(set1.has(50 + 50)); // "true"
console.log(set1.has({ name: 'Juno' })); // "false" because objects are reference type objects. As a refresher, this will only be true if both objects are stored at the same memory address.

// Deleting values from a set
set1.delete(100);

console.log(set1);

// Iterating through a set

// With a for...of loop (for...in in Python)
console.log('FOR...OF LOOP');
for (let item of set1) {
  console.log(item);
}

// With a for...each loop
// An arrow function will work here!
console.log('FOREACH');
set1.forEach((value) => {
  console.log(value);
});

// Converting a set to an array
const setArr = Array.from(set1);
console.log('ARRAY');
console.log(setArr); // Logs an array
