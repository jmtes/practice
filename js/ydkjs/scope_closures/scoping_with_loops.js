// WHILE LOOPS

var keepGoing = true;

while (keepGoing) {
  let value = Math.random();
  console.log('Value is ', value);
  if (value > 0.5) {
    keepGoing = false;
  }
}

// Although it may seem like it at first glance, value is not being re-declared repreatedly in this program.

// All the rules of scope, including re-declaration of LET variables, are applied PER SCOPE INSTANCE.

// What this means is that each time a scope is entered during execution, everything resets.

// Each loop iteration is its own new scope instance, and within each scope instance, value is only being declared once. So there's no re-declaration and no errors.

// FOR LOOPS
for (let i = 0; i < 3; i++) {
  let value = i * 10;
  console.log(`${i}: ${value}`);
}

// The i may seem like it's in the outer (in this case, global) scope, but it's actually in the scope of the for loop body.

// You can sort of think about this loop in this more verbose equivalent form:
{
  let $$i = 0;

  for (; $$i < 3; $$i++) {
    let i = $$i; // Here's our actual loop `i` !
    let value = i * 10;
    console.log(`${i}: ${value}`);
  }
}

// The same thing goes for for...in and for...of loops.
// The declated variable is treated as INSIDE the loop body, and thus is handled per iteration and scope instance.

// WITH CONST INSTEAD OF LET

var students = [
  'Sylvana',
  'Tabitha',
  'Sunil'
];

// Using const is fine in for...in and for...of loops:
for (const index in students) {
  // This is fine
  console.log(index, students[index]);
}

for (const student of students) {
  // This is also fine
  console.log(student);
}

// But not for regular for loops!
// for (const i = 0; i < 3; i++) {
//   // This will fail after the first iteration!
//   console.log(i);
// }

// If we put it in the verbose form we put the other loop in earlier:

// {
//   const $$i = 0;

//   for (; $$i < 3; $$i++) {
//     const i = $$i; // Here's our actual loop `i`!
//     console.log(i);
//   }
// }

// The i is indeed created just once inside the loop, but the problem is with the conceptual $$i that must be incremented, and thus reassigned, with each iteration. Which isn't allowed for consts.

// If you don't reassign the const then it's valid:

var continueGoing = true;

for (const i = 0; continueGoing;) {
  console.log(continueGoing);
  continueGoing = (Math.random() > 0.5);
}

// This is silly though. There is no point in declaring i with a const in that position because the whole point of such a variable in that position is to be used for counting iterations.
// Just use a different loop form if you want to use const that badly.
