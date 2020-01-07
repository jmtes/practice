// The thing about symbols is that each one is unique, which makes them valuable when it comes to things like object property identifiers. Their uniqueness is central to their purpose.

// Create a symbol
// You don't say `new Symbol()` because symbols don't have constructors.
const sym1 = Symbol('sym1');
const sym2 = Symbol('sym2');

console.log(sym1); // Outputs Symbol(sym1)
console.log(typeof sym1); // Outputs symbol, meaning it's a primitive data type

// No two symbols can be the same, even if they are given the same identifier.
console.log(Symbol('girl') === Symbol('girl')); // Outputs false
console.log(sym1 === sym1); // This is true because you are simply comparing sym1 to itself

// Unique Object Keys
const KEY1 = Symbol('morph');
const KEY2 = Symbol('genesis');

const myObj = {};

myObj[KEY1] = 'exo';
myObj[KEY2] = 'skeleton';
myObj.key3 = 'reform';
myObj.key4 = 'mist';

console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in loops
// This loop will only print key3 and key4
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({ key: 'value' }));
console.log(JSON.stringify({ [Symbol('key')]: 'value' })); // Logs an empty object
