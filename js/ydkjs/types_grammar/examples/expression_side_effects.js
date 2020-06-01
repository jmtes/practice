// EXAMPLE A - POSSIBLE SIDE EFFECTS WITH A FUNCTION CALL

function exampleA () {
  function foo () {
    a = a + 1;
  }

  var a = 1;
  console.log(a); // 1
  foo(); // Returns undefined, but had a side effect of changing the value of a:
  console.log(a); // 2
}

// exampleA();

// EXAMPLE B - PREFIX VS POSTFIX INCREMENT

function exampleB () {
  var a = 42;

  // Postfix returns the value before incrementing it:
  console.log(a++); // 42
  console.log(a); // 43

  a = 42;

  // Prefix increments value before returning it:
  console.log(++a); // 43
  console.log(a); // 43
}

// exampleB();

// EXAMPLE C - THE , OPERATOR

function exampleC () {
  var a = 42;
  var b;

  // What the following means is that the second `a` gets evaluated AFTER the after side-effects of the first `a++` expression, which means it returns the 43 value for assignment to b:
  b = (a++, a);

  // Note: The () were needed due to operator precedence.

  console.log(a); // 43
  console.log(b); // 43
}

// exampleC();

// EXAMPLE D - THE DELETE OPERATOR

function exampleD () {
  var user = {
    name: 'Enya',
    birthday: 'August 20'
  };

  console.log(user.birthday); // August 20
  console.log(delete user.birthday); // true
  console.log(user.birthday); // undefined
}

exampleD();
