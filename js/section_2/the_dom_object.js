let val;

val = document; // Gives you the HTML of a page.

// When working with the DOM, there are different types of structures you can get.
// An HTML Collection is kind of like an array but kind of not. It's formatted like an array with comma separated values, but you can't use a forEach loop on it.
// Node lists are also kind of like arrays and you CAN use forEach loops with them.

val = document.all; // Gives you the HTMLCollection of a page. It looks like an array of the element tags and you can access them by index, as is shown below.
val = document.all[8]; // Gives you the <body> tag.
val = document.all.length; // Shows you the number of elements in the DOM.
val = document.head; // Gives you just the head of the document.
val = document.body; // Gives you the body of the document.
val = document.doctype; // Gives you the DOCTYPE tag.
val = document.domain; // Gives you the loopback address.
val = document.URL; // Gives you the URL of the page.
val = document.characterSet; // Gives you UTF-8.
val = document.contentType; // Gives you text/html.

// With the document you can select stuff without using selectors! It's not recommended, but it IS possible.
val = document.forms; // Gives you all the forms on the page.
val = document.forms[0]; // Gives you the first form on the page. If no such element exists you will get undefined.
val = document.forms[0].id; // Gives element id.
val = document.forms[0].method; // Gives the associated HTTP method.
val = document.forms[0].action; // Gives the value of the element's action attribute.

val = document.links; // Gives all <a> elements that specify the href property. Indexable.
val = document.links[0].id; // Gives the id of the first link.
val = document.links[0].className; // Gives the item's class(es) as a string.
val = document.links[0].classList; // Gives the item's class(es) as a DOMTokenList. Indexable.

val = document.images; // Gives a collection of image objects in the document. Indexable.

val = document.scripts; // Gives a collection of script items in the document. Indexable.
val = document.scripts[2].getAttribute('src'); // Gives app.js in this case because it's the value of that script's src attribute.

let scripts = document.scripts;
// console.log('Forbidden forEach');
// scripts.forEach(function(script) {
//   console.log(script);
// });

// The above doesn't work because forEach is an array method and HTMLCollections are not technically arrays.

// You can turn HTMLCollections into arrays so you can use methods like forEach!
let scriptsArr = Array.from(scripts); // Super easy! Now the above code will work!

scriptsArr.forEach(function(script) {
  console.log(script);
});

console.log(val);