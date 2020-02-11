// INDIRECTION BY ASSIGNMENT

function intro () {
  console.log("Hi, I'm " + this.name);
}

var name = 'Muhammed';

var person1 = {
  name: 'Callum',
  intro: intro
};

var person2 = {
  name: 'Matilde'
};

person1.intro(); // "Hi, I'm Callum"
(person2.intro = person1.intro)(); // "Hi, I'm Muhammed"

// I'm guessing that in line 19 the function reference for intro is substituted for the assignment so that it's equivalent to the following:
(intro)(); // Thus why default binding applies.

// The result value of the assignment expression person2.intro = person1.intro is reference to just the underlying function object.
// As such, the effective call-site is just intro(), not person2.intro() or person1.intro().
// As such, default binding applies! I was right hehehe
