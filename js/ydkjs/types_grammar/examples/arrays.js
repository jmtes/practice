// EXAMPLE A - DELETE AND LENGTH

var users = ['Hanna', 'Rashnu', 'Lana'];

console.log(users); // ["Hanna", "Rashnu", "Lana"]
console.log(users.length); // 3

// The following simply renders the specified array slot empty:
delete users[1];

// You're effectively removing the value stored at the slot but not the slot itself:
console.log(users); // ["Hanna", empty, "Lana"]
console.log(users.length); // 3

console.log(users[1]); // undefined

// While the slot APPEARS to have the undefined value in it, it will not behave the same as if the slot was explicitly set to undefined like so:
users[1] = undefined;

// This filled the slot with the value of undefined, making it not empty again.

console.log(users); // ["Hanna", undefined, "Lana"]
console.log(users.length); // 3

// EXAMPLE B - ADDING STRING PROPERTIES TO ARRAYS

users.property = 'value';

console.log(users.length); // 3
console.log(users.property); // value
console.log(users); // ["Hanna", undefined, "Lana", property: "value"]

delete users.property;

// If a STRING value intended as a key can be coerced to a standard base-10 NUMBER, then it is assumed that you wanted to use it as a number index rather than as a STRING key:
users['4'] = 'Elisa';

console.log(users.length); // 5
console.log(users); // ["Hanna", undefined, "Lana", empty, "Elisa"]
