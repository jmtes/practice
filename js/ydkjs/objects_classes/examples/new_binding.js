function User (name) {
  this.name = name;
}

var user = new User('Bjarni');

console.log(typeof user); // "object"
console.log(user.name); // "Bjarni"

// By calling User() with NEW in front of it, we've constructed a new object and set that new object as the THIS for the call of User().
