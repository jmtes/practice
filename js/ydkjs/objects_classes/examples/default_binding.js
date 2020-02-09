function foo () {
  console.log(this.a);
}

var a = 2;

foo(); // 2

// Remember that var declarations in the global scope, like a in line 5, create mirrored properties in the global object.
// a and window.a are not copies of each other, they ARE each other.

// When foo() is called, THIS.a resolves to our global variable a because, in this case, the default binding for THIS applies to the function call, and so points THIS at the global object.

// We know that the default binding rule applies here because foo() was called with a plain, undecorated function reference.

// STRICT MODE

// Strict mode renders the global objective uneligible for default binding.

function strictFoo () {
  'use strict';

  console.log('IN STRICT MODE');
  console.log(this.a);
}

// strictFoo(); // TypeError: `this` is `undefined`

// Keep in mind that even though THIS binding rules are entirely based on the call-site, the global object is ONLY eligible for default binding if the CONTENTS of foo() aren't running in strict mode
// The strict mode state of the call-site of foo() is irrelevant, as can be seen below.

(function () {
  'use strict';

  console.log('FOO INVOKED FROM IFFE IN STRICT MODE');
  foo(); // 2
})();

// Despite the IFFE running in strict mode, the global object was still default-binded to the THIS of foo() since foo() itself isn't in strict mode.

// Mixing strict mode and non-strict mode in your code like this is frowned upon though, so you most likely won't have to think about this detail.
