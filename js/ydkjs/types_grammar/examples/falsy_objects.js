// EXAMPLE A - OBJECT WRAPPERS AROUND FALSY VALUES

function exampleA () {
  var a = new Boolean(false);
  var b = new Number(0);
  var c = new String('');

  // We know the above values are objects wrapped around falsy values. But do they behave as true or false?

  var d = new Boolean(a && b && c);

  console.log(d.valueOf()); // true

  // NOTE: The compound statement in Line 9 had to be wrapped in a Boolean constructor because the following just results in an object wrapped around an empty string:

  var e = a && b && c;
  console.log(e);
}

exampleA();
