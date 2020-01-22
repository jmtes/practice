// Note: ES6 introduced actual modules in JS, meaning we can use separate files to export modules, which are just custom pieces of code, and import them in another file.
// This is still not supported in browsers however and you're gonna have to use a compiler like Babel and a module loader like Webpack for them to work.

// In ES5 though, we have something called the module pattern which allows us to break up parts of our code into self-contained modules with private properties, methods, vars, functions, etc.

// Basic structure of a module pattern
// (function () {
//   // Declare private variables and functions that can't be accessed from outside the module.

//   return {
//     // Declare public variables and functions
//   };
// })();

// Standard module pattern
const UICtrl = (function () {
  let text = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    }
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // This doesn't work because changeText is a private method to UICtrl.

console.log(UICtrl.text); // "undefined"

// Revealing module pattern
// This is pretty much the same thing as the above pattern except instead of returning our public functions, you basically map an object literal to private functions that you want to reveal.
const ItemCtrl = (function () {
  // This var can be thought of as our state.
  // It is conventional to prefix an underscore to it to indicate that it's private.
  let _data = [];

  function add (item) {
    _data.push(item);
    console.log('Item added.');
  }

  function get (id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  };
})();

ItemCtrl.add({
  id: 1,
  name: 'Shen'
});

ItemCtrl.add({
  id: 2,
  name: 'Helena'
});

// Basically, the main difference between the standard and revealing module patterns is that in the former, you're exporting functions that CALL the private functions without revealing what they are, whereas in the latter, you're actually making the functions you're exporting public.

// This difference can be made apparent by logging the following:
console.log(UICtrl.changeText); // "undefined"
console.log(UICtrl.callChangeText); // Function code logged
console.log(ItemCtrl.get); // Function code logged

// The revealing module looks cleaner, but the standard module allows you to do more because you can call private functions and do other things like logging without having to include those actions in the private methods.
