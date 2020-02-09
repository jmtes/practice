// EXAMPLE A

// This code attempts to cross over the boundary and use THIS to implicitly refer to a function's lexical scope:

function foo () {
  var a = 2;
  this.bar();
}

function bar () {
  console.log(this.a);
}

foo(); // undefined

// In line 7, an attempt was made to reference bar() via this.bar()
// The most natural way to have invoked bar() though would have been to omit the THIS and just make a lexical reference to the identifier.
// However, the developer who writes such code is attempting to use THIS to create a bridge between the lexical scopes of foo() and bar() so that bar() has access to the variable a in the scope of foo().

// NO SUCH BRIDGE IS POSSIBLE!
// You cannnot use a THIS reference to look something up in a lexical scope!
