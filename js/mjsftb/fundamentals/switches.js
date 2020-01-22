const color = 'green';

switch (color) {
  case 'red':
    console.log(`Color is red`);
    break;
  case 'blue':
    console.log(`Color is blue`);
    break;
  case 'yellow':
    console.log(`Color is yellow`);
    break;
  default:
    console.log('Color is not primary');
}

// It's good to use switches to prevent having to type out multiple else if statements!

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday'
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);