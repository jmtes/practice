// FOR LOOPS

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }
//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }
//   console.log(i);
// }

// WHILE LOOPS

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// DO WHILE LOOPS (Always gonna run at least once)

// let i = 100;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// LOOP THROUGH ARRAY

 const cars = ['Mercedes', 'CH-R', 'TR-D', 'Camry'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOREACH

// cars.forEach(function(car, index, array){
//   console.log(`${index}: ${car}`);
//   console.log(array);
// });

// Always try to use forEach when looping through arrays, it looks so much cleaner!

// MAP
// const users = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user) {
//   return user.id;
// });

// console.log(ids);
// console.log(typeof ids); // Returns object

// FOR IN
const user = {
  firstName: 'Juno',
  lastName: 'Tesoro',
  age: 19
};

for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}