// if(something) {
//   do something;
// } else {
//   do something else;
// }

const id = 100;

// EQUAL TO
// if(id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// NOT EQUAL TO
// if(id != 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// EQUAL TO VALUE AND TYPE
// const str_id = '100';
// if(str_id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
// str_id is equal to 100, but it is not the same type (str != number) so the else block is triggered

// NOT EQUAL TO VALUE AND TYPE
// if(str_id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Use the triple equal sign by default! It'll prevent a lot of type errors down the line!

// CHECKING FOR VAR EXISTENCE/DEFINITION
// if (typeof id !== 'undefined') {
//   console.log(`The id is ${id}`);
// } else {
//   console.log(`No id`);
// }

// GREATER OR LESS THAN
// if(id > 200) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE
// const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is neither red nor blue');
// }

// LOGICAL OPERATORS
// const name = 'Steve';
// const age = 70;

// AND &&
// if (age > 0 && age <= 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} cannot run in the race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT CURLY BRACES
// Not recommended though. It's probably best practices to stick with the braces
if (id === 100)
  console.log(`CORRECT`);
else
  console.log(`INCORRECT`);