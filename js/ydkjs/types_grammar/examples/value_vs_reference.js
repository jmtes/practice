// EXAMPLE A - VALUE-COPYING

var a = 2;
var b = a; // b is a copy of the value in a

b++;

console.log(a); // 2
console.log(b); // 3

// EXAMPLE B - REFERENCE-COPYING

var c = [1, 2, 3];
var d = c; // d is a reference to the shared `[1, 2, 3]` value

d.push(4);

console.log(c); // [1, 2, 3, 4]
console.log(d); // [1, 2, 3, 4]

// It's important to note that neither c nor d has greater "ownership" over the shared array value.
// Both are equal peer references to it.

// EXAMPLE C

var e = [4, 5, 6];
var f = e;

console.log(e); // [4, 5, 6]
console.log(f); // [4, 5, 6]

f = [7, 8, 9];
console.log(e); // [4, 5, 6]
console.log(f); // [7, 8, 9]

// Changing what f is referencing will not change what e is referencing.

// EXAMPLE D - FUNCTION PARAMETERS

function foo (x) {
  x.push(4);
  console.log(x); // [1, 2, 3, 4]

  x = [4, 5, 6];
  x.push(7);
  console.log(x); // [4, 5, 6, 7]
}

a = [1, 2, 3];

foo(a);
console.log(a); // [1, 2, 3, 4]

// Again, changing what x in foo(...) points to does not affect where the initial reference a is pointing.
// We can only modify the contents of the shared value that both a and x point to.

// To actually accomplish changing a to have the [4, 5, 6, 7], you can't create a new array and assign it. You must modify the existing array value:

function foo2 (x) {
  x.push(4);
  console.log(x); // [1, 2, 3, 4]

  x.length = 0; // This empties the existing array in-place!
  x.push(4, 5, 6, 7);
  console.log(x); // [4, 5, 6, 7]
}

a = [1, 2, 3];

foo2(a);
console.log(a); // [4, 5, 6, 7]

// EXAMPLE E - PASSING A COMPOUND VALUE BY VALUE-COPY

// Array:

a = [1, 2, 3];

// slice(...) with no parameters by default makes an entirely new shallow copy of an array:
foo2(a.slice());

// a was not modified:
console.log(a); // [1, 2, 3]

// EXAMPLE F - PASSING A SIMPLE VALUE (KIND OF) BY REFERENCE-COPY

function bar (wrapper) {
  wrapper.a = 42;
}

var obj = {
  a: 2
};

bar(obj);

console.log(obj.a); // 42
