function foo () {
  console.log(this.a);
}

var obj = {
  a: 0,
  foo: foo
};

obj.foo(); // 0

// Notice that foo() was declared in the global ascope and then later added as a reference property onto OBJ.

// Regardless of whether foo() was initially declared IN OBJ or added as a reference later, in neither case is the function really "owned" or "contained" by the OBJ object.

// However, the call-site uses the OBJ context to REFERENCE the function, so you could say that OBJ "owns" or "contains" the FUNCTION REFERENCE at the time the function is called.

// At the point that foo() is called, it's preceded/invoked by an object reference to OBJ.

// When there is a context object for a function reference, the implicit binding rule says that it's THAT object which should be used for the function call's THIS binding.

// So, because OBJ is the THIS for the foo() call, THIS.a is synonymous with OBJ.a

// OBJECT PROPERTY REFERENCE CHAIN EXAMPLE

// Only the top/last level of an object property reference chain matters to the call-site:

var obj2 = {
  a: 2,
  foo: foo
};

var obj1 = {
  a: 1,
  obj2: obj2
};

console.log('INVOCATION IN AN OBJECT PROPERTY REFERENCE CHAIN');
obj1.obj2.foo(); // 2

// OBJ2 was binded to the THIS of the foo() call.

// EXAMPLE OF AN IMPLLICITLY BOUND FUNCTION LOSING ITS IMPLICIT BINDING

// When this happens, the context-aware function falls back to the default binding as is exemplified here:

var obj3 = {
  a: 3,
  foo: foo
};

var bar = obj3.foo; // A function reference/alias!

var a = 'Oops, global';

console.log('IMPLICIT BINDING LOSS');
bar(); // "Oops, global"

// Although it looks like it, BAR is not being assigned the function object FOO with the context of OBJ3.
// It is simply being assigned whatever that property is pointing to, which is the globally exposed function foo().
// Essentially, you're just making an alias for foo().

// Additionally, when bar() is invoked in line 57, it's done as a standalone, undecorated function call.
// You're not invoking it by prefixing it with the object (not that such an object even exists in this case), so it falls back to default binding.

// EXAMPLE OF IMPLICIT BINDING LOSS WITH CALLBACKS

function doFoo (fn) {
  // The fn param is just another reference to foo()

  fn(); // Call-site!
}

var obj4 = {
  a: 4,
  foo: foo
};

console.log('IMPLICIT BINDING LOSS WITH CALLLBACKS');
doFoo(obj4.foo);

// Again, it may seem like FOO in the context of obj4 is being passed as the parameter to doFoo(), but that's not the case.

// Parameter passing is just an implicit assignment, and since we're passing a function, it's an implicit reference assignment, so the end result is the same as the previous example.

// The fn parameter in doFoo is simply being assigned the reference to the globally exposed foo().

// This applies not only to your own functions that take callbacks as parameters, but also to built-ins.
