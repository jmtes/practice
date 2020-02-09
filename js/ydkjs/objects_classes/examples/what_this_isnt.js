// THIS doesn't let a function get a reference to itself like we may have assumed.

// In the following code, we attempt to track how many times a function FOO has been called.

function foo (num) {
  console.log(num);

  // Keep track of how many times foo is called
  this.count++;
}

foo.count = 0;

var i;

console.log('THIS DOES NOT REFER TO A FUNCTION ITSELF');
for (i = 0; i < 10; i++) {
  if (i < 4) {
    foo(i);
  }
}
// 0 1 2 3

console.log('foo count: ', foo.count); // 0

// foo.count is still 0, even though the console logs show that it was indeed called 4 times.

// At line 12, a count property is indeed being added to the foo function object.
// However, for the this.count reference in line 9, THIS is not pointing to that function object at all.
// Even though the property names are the same, the root objects are different.

// Many developers would simply hack toward a solution like the following, where a whole other object is created to hold the count property:

function foo2 (num) {
  console.log(num);

  data.count++;
}

var data = {
  count: 0
};

console.log('HOLDING THE COUNT PROPERTY IN AN OBJECT');
for (i = 0; i < 10; i++) {
  if (i > 3 && i < 8) {
    foo2(i);
  }
}
// 4 5 6 7

console.log('foo2 count: ', data.count); // 4

// This approach indeed "solves" the problem but ignores the real problem: lack of understanding of THIS and instead falling back to the comfort zone of the more familiar lexical scope.

// THE PROPER WAY TO REFERENCE A FUNCTION FROM INSIDE ITSELF

function foo3 (num) {
  console.log(num);

  foo3.count++;
}

foo3.count = 0;

console.log('PROPERLY SELF-REFERENCING A FUNCTION');
for (i = 0; i < 12; i++) {
  if (i > 7) {
    foo3(i);
  }
}
// 8 9 10 11

console.log('foo3 count: ', foo3.count); // 4

setTimeout(function () {
  // An anon function like this cannot reference itself.
}, 10);

// Do not make a function anonymous if you plan on making it reference itself!

// FORCING THIS TO ACTUALLY POINT TO THE FUNCTION OBJECT

function foo4 (num) {
  console.log(num);

  this.count++;
}

foo4.count = 0;

console.log('FORCING THIS WITH CALL()');
for (i = 12; i < 16; i++) {
  // Using call(), we ensure THIS points at the function object foo4 itself.
  foo4.call(foo4, i);
}
// 12 13 14 15

console.log('foo4 count: ', foo4.count);
