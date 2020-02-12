// EXAMPLE A - ADDING PROPERTIES TO AN ARRAY

// Arrays ARE objects, so you can add properties to them like so:

var userArray = ['Jung-Hoon', 'Dorothea', 'Junpei'];

userArray.rishi = 'Rishi';

// Adding named properties does not change the reported length of the array:
console.log(userArray.length); // 3
console.log(userArray.rishi); // Rishi

// If you try to add a property to an array but the property name LOOKS like a number, it will end up as a numeric index instead and thus modify the array contents:
userArray['4'] = 'Victoria';

console.log(userArray.length); // 5
console.log(userArray[4]); // Victoria
console.log(userArray[3]); // undefined
console.log(userArray); // ["Jung-Hoon", "Dorothea", "Junpei", empty, "Victoria", rishi: "Rishi"]
