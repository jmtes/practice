let val;

const today = new Date(); // September 7, 2019
let birthday = new Date('2000-04-01 11:25:00');
birthday = new Date('April 1 2000');
birthday = new Date('4/1/2000');

val = birthday; // Date object
// val = today.toString(); // String

// Getting Date values
val = today.getMonth(); // Returns 8, which corresponds to September (January is 0).
val = today.getDate(); // Returns 7
val = today.getDay(); // Returns 6, which corresponds to Saturday (Monday is 0).
val = today.getFullYear(); // Returns 2019
val = today.getHours(); // Returns 11
val = today.getMinutes(); // Return minute val
val = today.getSeconds(); // Return seconds val
val = today.getMilliseconds(); // Return millisecond val
val = today.getTime(); // Return number of seconds passed since date/time in today var

// Setting Date values
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);