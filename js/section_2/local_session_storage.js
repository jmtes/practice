// You can use the local storage API to save key/value pairs to the window object's localStorage key.
// Whatever you set as a value has to be a string. You can still save arrays and objects and whatnot to local storage, but you will have to JSON.stringify it first.
// After that, when you want to read the values for the data types they actually are again, you're gonna want to use the JSON.parse method on them.

// The difference between local and session storage is that local storage will persist until you manually clear it out in your settings or through your program. Meanwhile, session storage will only persist until the browser is closed.

// Set local storage item
localStorage.setItem('name', 'Juno');
localStorage.setItem('age', '19');

// Set session storage item
sessionStorage.setItem('name', 'Enne');

// Remove from storage
// localStorage.removeItem('name');

// Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear(); // Name and age are null now.

// console.log(name, age);

document.querySelector('form').addEventListener('submit', (event) => {
  const task = document.getElementById('task').value;

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');

  event.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

if (tasks) {
  tasks.forEach(function (task) {
    console.log(task);
  });
}
