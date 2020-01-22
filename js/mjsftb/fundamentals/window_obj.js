// The DOM is part of the Window object!
// The window/browser is the global environment in client-side JS.

// WINDOW METHODS, OBJECTS, AND PROPERTIES

// ALERT
//window.alert('Hello World');

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// These are ugly. You're better off using the DOM and outputting a nice-looking Bootstrap alert. This is some 90s shit. They are there for you to use though.

let val;

// OUTER HEIGHT AND WIDTH
val = window.outerHeight;
val = window.outerWidth;

// INNER HEIGHT AND WIDTH
val = window.innerHeight;
val = window.innerWidth;

// SCROLL POINTS
val = window.scrollY;
val = window.scrollX;
// Used in those sites where page elements are animated as you scroll down!

// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; // Query strings

// REDIRECTS
// window.location.href = 'http://google.com';
// RELOADS
// window.location.reload();
// You would use reload in a function. You wouldn't just put it in th global scope like this and make the page just reload indefinitely.

// HISTORY OBJECT
// window.history.go(-2); 
// You can specify -1 to go to the page before, -2 to go two pages before, and so on.
val = window.history.length;

// NAVIGATOR OBJECT
// Has to do with the browser itself rather than the window/environment.
// Named after Netscape Navigator!
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);