// Whether they know it or not, almost every JS dev has made use of closure. It's critical that we be able to recognize where closure is used in our programs, as the presence or lack of it is sometimes the cause of bugs or performance impairments.

// Closure is the ability of a function to remember and continue to access variables defined outside its scope, even when that function is executed in a different scope.

// EXAMPLE OF A CLOSURE
function greeting (msg) {
  return function who (name) {
    console.log(`${msg} ${name}`);
  };
}

var hello = greeting('Hello');
var howdy = greeting('Howdy');

hello('Juno');
hello('Angelo');
howdy('Leif');

// You'd expect the msg values of each call to greeting() to be garbage collected once greeting() finishes executing, right?
// What's really happening here is that since the inner who() function instances are still alive, having been assigned to the variables hello and howdy, their closures are still preserving the msg values.

// These closures are not a snapshot of the msg variable's value however, they are a direct link and preservation of the variable itself. This means closure can actually observe and make updates to these variables over time!

console.log('COUNTER CLOSURE EXAMPLE');

function counter (step = 1) {
  var count = 0;
  return function increaseCount () {
    count = count + step;
    return count;
  };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

console.log(incBy1());
console.log(incBy1());

console.log(incBy3());
console.log(incBy3());
console.log(incBy3());

// So essentially a closure is a function, returned by another function, that uses variables defined in that outer function's scope.
// In this exmaple, the inner increaseCount() function is closed over both the count and step variables from its outer counter() function's scope.
// Since closure is over tha variables and not just the snapshots of the values, the updates invoked by multiple calls to incBy1() and incBy3() are preserved.

// Closures are most commonly seen when working with async code, such as with callbacks! So you have been using them without even knowing it!
// function fetchData (url) {
//   ajax(url, function onResponse (res) {
//     console.log(`Response from ${url}: ${res}`);
//   });
  // onRepsonse() is closed over the url variable from fetchData()'s scope, so it presevers it until the AJAX call returns and executes onResponse().
// }

// fetchData('https://jsonplaceholder.typicode.com/users/1');

// The outer scope of a closure is usually a function but it doesn't have to be. There just has to be at least one variable in an outer scope that an inner function accesses and closes over, like in a for loop.

// Remember that closures are not over values but over variables themselves!

// Basically, when a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in other scopes, it maintains access to its original scope variables. That's what closure is!
