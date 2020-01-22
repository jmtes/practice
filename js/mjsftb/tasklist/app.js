// Define UI variables.
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners.
loadEventListeners();

// Load all event listeners
function loadEventListeners () {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all tasks
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// Add task.
function addTask (event) {
  if (taskInput.value === '') {
    window.alert('Enter a task first!');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new X link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store in local storage
  storeTask(taskInput.value);

  // Clear input
  taskInput.value = '';

  event.preventDefault();
}

// Remove task
function removeTask (event) {
  if (event.target.parentElement.classList.contains('delete-item')) {
    if (window.confirm('Are you sure?')) {
      event.target.parentElement.parentElement.remove();

      // Remove from local storage
      removeTaskFromStorage(event.target.parentElement.parentElement);
    }
  }
}

// Clear tasks
function clearTasks () {
  // taskList.innerHTML = '';

  // Faster
  // while (taskList.firstChild) {
  //   taskList.removeChild(taskList.firstChild);
  // }

  const tasks = Array.from(taskList.children);
  if (window.confirm('Are you sure?')) {
    tasks.forEach((task) => {
      task.remove();
    });
  }

  clearTasksFromStorage();
}

// Filter tasks
function filterTasks (event) {
  const text = event.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

// Store task
function storeTask (task) {
  let tasks;

  if (window.localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
  }

  tasks.push(task);
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from local storage
function getTasks () {
  let tasks;

  if (window.localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new X link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// Remove task from local storage
function removeTaskFromStorage (taskItem) {
  let tasks;

  if (window.localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(window.localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks from local storage
function clearTasksFromStorage () {
  window.localStorage.clear();
}
