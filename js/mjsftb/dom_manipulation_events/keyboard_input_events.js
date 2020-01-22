const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clearing a form from JS
taskInput.value = '';

// When a form is submitted
// form.addEventListener('submit', runEvent);

// INPUT EVENTS
// taskInput.addEventListener('keydown', runEvent); // Fires whenever a key is pressed in the input field. You may want to capture the input with each keydown.
// taskInput.addEventListener('keyup', runEvent); // Fires whenever a key is released in the input field.
// taskInput.addEventListener('focus', runEvent); // Fires when you click inside the input field and thus put it into focus.
// taskInput.addEventListener('blur', runEvent); // Fires when you click outside the input field and thus put it out of focus.
// taskInput.addEventListener('cut', runEvent); // Fires when the input is cut from the field.
// taskInput.addEventListener('paste', runEvent); // Fires when input is pasted into the field.
// taskInput.addEventListener('input', runEvent); // Captures any event wherein input is added or removed from the field.
select.addEventListener('change', runEvent); // Fires whenever an input is changed.
taskInput.addEventListener('change', runEvent); // This only fires after the field has been put out of focus.

function runEvent (event) {
  console.log(`EVENT TYPE: ${event.type}`);

  console.log(event.target.value);

  // heading.innerText = event.target.value;

  // Get the input value
  // console.log(taskInput.value);

  // event.preventDefault(); // You're usually gonna want to do this with a submit.
};