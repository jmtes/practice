// EXAMPLES OF JSON STRINGIFICATION

var a = JSON.stringify(undefined);
console.log(a); // undefined

a = JSON.stringify(function () {});
console.log(a); // undefined

a = JSON.stringify([
  1,
  undefined,
  function () {},
  4
]);
console.log(a); // [1,null,null,4]

a = JSON.stringify({
  a: 2,
  b: function () {}
});
console.log(a); // {"a":2}

// If you try to JSON.stringify an object with circular references in it, an error will be thrown.

var b = {};

b.b = b;

try {
  JSON.stringify(b);
  console.log(b);
} catch (err) {
  console.log(err); // TypeError: Converting circular structure to JSON
}

// EXAMPLE B - TOJSON()

var user = {
  name: 'Vita',
  location: 'Chula Vista, CA',
  interests: ['science fiction', 'gardening'],
  toString: function () {
    return `${this.name} from ${this.location}`;
  }
};

// Adding a circular reference
user.self = user;

try {
  console.log(JSON.stringify(user));
} catch (err) {
  console.log(err); // TypeError: Converting circular structure to JSON
}

// Adding a custom toJSON() method
user.toJSON = function () {
  return {
    name: this.name,
    location: this.location
  };
};

console.log(JSON.stringify(user)); // {"name":"Vita","location":"Chula Vista, CA"}

// EXAMPLE C - REPLACER

console.log(JSON.stringify(
  user,
  ['name', 'interests']
)); // { "name": "Vita" }

// Note that 'interests' wasn't included because it went off of the object returned by toJSON(), which didn't include it in the first place!

var user2 = {
  name: 'Conrad',
  location: 'Denver, CO',
  interests: ['geography', 'checkers']
};

console.log(JSON.stringify(
  user2,
  function (key, val) {
    if (key !== 'interests') {
      return val;
    }
  }
)); // { "name": "Conrad", "location": "Denver, CO" }

// NOTE: You must filter OUT properties (k !== property instead of k === property) if you're using a function replacer or else it won't work!
