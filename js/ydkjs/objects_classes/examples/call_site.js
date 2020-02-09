function baz () {
  // debugger;
  // Call-stack is `baz`
  // So, our call-site is in the global scope

  console.log('baz');
  bar(); // <- Call-site for `bar`
}

function bar () {
  // debugger;
  // Call-stack is: `baz` -> `bar`
  // So, our call-site is in `baz`

  console.log('bar');
  foo(); // <- Call-site for `foo`
}

function foo () {
  // debugger;
  // Call-stack is `baz` -> `bar` -> `foo`
  // So, our call-site is in `bar`

  console.log(this.property); // Default binding applies here
  console.log('foo');
}

var property = 'value';

baz(); // <- Call-site for `baz`
