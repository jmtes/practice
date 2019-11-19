const person = {
  firstName: 'Juno',
  lastName: 'Tesoro',
  age: 19,
  email: 'juliennetesoro@gmail.com',
  hobbies: ['computer', 'make thing look pretty'],
  address: {
    city: 'San Francisco',
    state: 'CA'
  },
  getBirthYear: function(){
    return 2019 - this.age; // this is equivalent to self in Python! :^D
  }
}

let val;
val = person.firstName; // This is how it's usually done but you can do it like below as well!
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}