// EXAMPLE A - LEVERAGING && AS A GUARD

function logUserName (user) {
  if (user && user.name) {
    console.log(user.name);
  }
}

let user;
logUserName(user); // nothing happens because user is undefined and therefore falsy

user = {};
logUserName(user); // nothing happens because user.name is undefined and therefore falsy

user.name = 'Chie';
logUserName(user); // Chie

// EXAMPLE B - AVOIDING UNNECESSARY WORK WITH ||

function assignChore (person) {
  const chores = [
    'wash the dishes',
    'put the dishes away',
    'water the plants',
    'sweep the floor',
    'do the laundry',
    'vacuum the carpet'
  ];

  person.chore = chores[~~(Math.random() * Math.floor(chores.length))];

  return true;
}

function logPersonChore (person) {
  // Check for person.chore first and if it's present, skip the call to assignChore().
  if (person.chore || assignChore(person)) {
    console.log(`${person.name} needs to ${person.chore}`);
  }
}

const person1 = {
  name: 'Carmen',
  chore: 'take out the trash'
};

const person2 = {
  name: 'Jeremy'
};

logPersonChore(person1); // Carmen needs to take out the trash
logPersonChore(person2); // Jeremy needs to vacuum the carpet
