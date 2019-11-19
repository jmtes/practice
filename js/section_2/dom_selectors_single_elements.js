// Selectors allow us to pull things from the DOM so we can do things with them.
// jQuery has been used to manipulate the DOM but with the advancements of vanilla JS it has become largely unnecessary and just adds bloat to your script.

// Single element selectors allow you to grab one element by its id or class or what have you. It only stores one thing, so if you use it with a class that appears more than once in the DOM, it's just going to grab the first one.
// Multiple element selectors will actually get all the elements that fit the criteria and return an HTMLCollection or node list depending on which selector you use.

// There are two single element selectors.

// document.getElementById()
console.log(document.getElementById('task-title')); // Returns that HTML element.

// Get things from the element
console.log(document.getElementById('task-title').id); // Returns 'task-title'.
console.log(document.getElementById('task-title').className); // In this case, nothing is returned because the element in question has no class.

// Change styling
// document.getElementById('task-title').style.background = '#333'; // Gives the h5 a dark background.
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.background = 'none';

// You don't want to do this to style your project, you want to implement these in response to events.

// Change content/text
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>';

// This isn't very efficient so we're just going to make a new variable to store the element in.

const taskTitle = document.getElementById('task-title');

console.log(taskTitle);

// document.querySelector()
// Much more powerful and versatile and is a lot like jQuery in terms of functionality!

console.log('Using document.querySelector');
console.log(document.querySelector('#task-title')); // By id
console.log(document.querySelector('.card-title')); // By class
console.log(document.querySelector('h5')); // By tag name

document.querySelector('li').style.color = 'yellow'; // Only affects first <li>.
document.querySelector('ul li').style.color = 'blue'; // Using nested tags

document.querySelector('li:last-child').style.color = 'green'; // Using CSS pseudoclasses, in this case it will affect the last <li>.
document.querySelector('li:nth-child(3)').style.color = 'orange'; // Makes the 3rd <li> orange.
document.querySelector('li:nth-child(4)').textContent = 'Buy dinner'; // Changes text of 4th <li>.
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // Only the first odd <li> is affected.
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // Only the first even <li> is affected.
