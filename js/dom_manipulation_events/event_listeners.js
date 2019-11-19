let clearTasks = document.querySelector('.clear-tasks');

// The first parameter is the event we're listening for.
// The second parameter is what we want to happen once the event happens. This is an example wherein we use an unnamed function.
// clearTasks.addEventListener('click', (event) => {
  // The event parameter is the event object.
  // console.log('Hello World');
  // event.preventDefault();
  // This prevents default behavior. In this case, it keeps the link from redirecting. The same effect can be achieved by making clearTasks' href attribute have the value '#'.
// });

// Let's use a named function now.
clearTasks.addEventListener('click', onClick);

function onClick(event) {
  // console.log('clicked');

  let val;
  val = event;

  // EVENT TARGET ELEMENT
  val = event.target; // Return an element.
  val = event.target.className;
  val = event.target.classList;

  event.target.innerText = 'Hello';

  // EVENT TYPE
  val = event.type;

  // TIMESTAMP
  val = event.timeStamp;

  // EVENT COORDINATES RELATIVE TO WINDOW
  val = event.clientY; // Amount in pixels from the top at which the event occurred.
  val = event.clientX; // Amount in pixels from the left at which the event occurred.

  // COORDINATES RELATIVE TO THE ELEMENT
  val = event.offsetY;
  val = event.offsetX;

  console.log(val);
}

// The event target will be super important once we get to event delegation!
