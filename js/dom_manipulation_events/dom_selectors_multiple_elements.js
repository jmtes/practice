// These selectors are used to retrieve more than one element and they return either an HTMLCollection or a NodeList.

// document.getElementsByClassName()

console.log('Using document.getElementsByClassName');

const items = document.getElementsByClassName('collection-item');

console.log(items); // Returns an HTMLCollection of all task list items.
console.log(items[0]); // Returns first list item.

items[0].style.color = 'red';
items[3].textContent = 'Hello';

// We don't just have to use getElementsByClassName on a global scope.
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems); // If you were to make a div with the class 'collection-item' outside of the <ul> tag, it would appear in the variable 'items' but not 'listItems'. This is how you can filter what your query returns!

// document.getElementByTagName

console.log('Using document.getElementsByTagName');

const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'blue';
lis[3].textContent = 'Go shopping';

// To reiterate, an HTMLCollection is not an array! You cannot use array methods with it! To convert one to an array, do the following:

const lisArr = Array.from(lis);
console.log(lisArr.reverse()); // Now you can reverse it!
lisArr.reverse(); // It's rewind time.
lisArr.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

// document.querySelectorAll
// querySelectorAll is like the other selectors we've seen so far except it returns a NodeList rather than an HTMLCollection.
// NodeLists actually count not just elements, but also things like text nodes. You can also perform some array methods on them without needing to convert them first.

console.log('Using document.querySelectorAll');

const things = document.querySelectorAll('ul.collection li.collection-item'); // This will yield the same results as the previous selectors. The point is that you can put any kind of CSS selector in here just as if we were using jQuery.

console.log(things); // Returns <li> elements as a NodeList.

things.forEach(function (thing) {
  console.log(thing.className);
}); // This works without a conversion!

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li) {
  li.style.background = '#77878B';
});
liEven.forEach(function (li) {
  li.style.background = '#B7D5D4';
});

// Regular old for-loops work for HTMLCollections even if you don't convert them into arrays because you can still use length on an HTMLCollection!
