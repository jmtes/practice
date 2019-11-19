let val;

const list = document.querySelector('ul.collection'); // Return <ul> item with class 'collection'.
const listItem = document.querySelector('li.collection-item:first-child'); // Return first <li> item with class 'collection-item'.

val = listItem;
val = list;

// We're gonna look at different properties of these nodes that have to do with getting their children and parents.

// Get child nodes
val = list.childNodes; // Returns NodeList of all of list's children (the <li> tags) and also the newlines between them. If you were to get rid of a newline between an </li> and the next <li>, the length of the NodeList would decrease by 1.
val = list.childNodes[0]; // Returns a text node in this case.
val = list.childNodes[0].nodeName; // Returns '#text' in this case.
val = list.childNodes[0].nodeType; // Returns 3 in this case.

// nodeType return values and what they mean
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - The Document Itself
// 10 - The Doctype

// In most cases, you're not going to care about the text nodes, which is when using children instead of childNodes is preferable.

// Get children element nodes
val = list.children; // Returns an HTMLCollection of all of list's children (the <li> tags), excluding the newline text nodes.

// Essentially, childNodes returns ALL the children of an element, whereas children only returns children that are element nodes, which is for the most part all we want when we're working with the DOM.

val = list.children[1]; // Gives second <li> item.
list.children[1].textContent = 'Go to bed';

// Getting children of children
list.children[3].children[0].id = 'test-link';

val = list.children[3].children[0];

// Getting the first child
val = list.firstChild; // Will give first node whether or not it is an element.
val = list.firstElementChild; // Will give first child node that is an element.

// Getting the last child
val = list.lastChild; // Will give the last child node whether or not it is an element.
val = list.lastElementChild; // Will give the last child node that is an element.

// Getting count of children
val = list.childElementCount;

// Getting a parent node
val = listItem.parentNode;
val = listItem.parentElement;
// In most cases both of the above will yield the same result.
val = listItem.parentElement.parentElement; // You can get the parent of a parent!

// Getting next sibling
val = listItem.nextSibling; // Will give the next sibling node regardless of whether or not it is an element.
val = listItem.nextElementSibling; // Will give the next sibling node that is an element.
val = listItem.nextElementSibling.nextElementSibling; // Getting two siblings after

// Getting previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // Returns null in this case because there is no previous sibling.

console.log(val);
