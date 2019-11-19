// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading to replace
const oldHeading = document.getElementById('task-title');
// We need to get the parent node of oldHeading because we want to use the method replaceChild.
const cardAction = oldHeading.parentElement;

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log('New Heading:');
console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// REMOVE LIST ITEM
lis[0].remove();

// REMOVE CHILD ELEMENT
list.removeChild(lis[3]);

// CLASSES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]; // Getting the first child of the first list item.

let val;

val = link.className; // Gives the names of all classes the element is associated with.
val = link.classList; // Gives DOM token list of element's classes and is indexable.
link.classList.add('test'); // Adding a class
link.classList.remove('test'); // Removing a class
val = link;

// ATTRIBUTES
val = link.getAttribute('href'); // Get a given attribute specified in an element's tag.
val = link.setAttribute('href', 'https://google.com'); // Sets the value for the specified attribute. Does not return anything though, so at this point val is undefined.
val = link.hasAttribute('title'); // Check whether or not an element has a given attribute. In this case it returns false.
link.removeAttribute('href'); // Remove an attribute.
val = link;

console.log(val);