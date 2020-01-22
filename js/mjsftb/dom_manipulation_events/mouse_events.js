const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// EVENT HANDLER
function runEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);

  heading.innerText = `Event Coordinates are ${event.clientX}, ${event.clientY}`;
}

// CLICK
// clearBtn.addEventListener('click', runEvent);

// DOUBLE CLICK
// clearBtn.addEventListener('dblclick', runEvent);

// MOUSEDOWN (CLICK AND HOLD)
// clearBtn.addEventListener('mousedown', runEvent);

// MOUSEUP (RELEASING AFTER A CLICK)
// clearBtn.addEventListener('mouseup', runEvent);

// MOUSEENTER (WHEN MOUSE ENTERS AN ELEMENT)
// card.addEventListener('mouseenter', runEvent);

// MOUSELEAVE (WHEN MOUSE LEAVES AN ELEMENT)
// card.addEventListener('mouseleave', runEvent);

// MOUSEOVER (WHEN MOUSE ENTERS AN ELEMENT)
// card.addEventListener('mouseover', runEvent);

// MOUSEOUT (WHEN MOUSE LEAVES AN ELEMENT)
// card.addEventListener('mouseout', runEvent);

// The difference between mouseenter/mouseleave and mouseover/mouseout is that the former will only fire on the initial parent element and not on any of its children.

// MOUSEMOVE (ANY MOVEMENT INSIDE THE ELEMENT)
// Can be used to do some cool stuff with games and just things that are very interactive.
card.addEventListener('mousemove', runEvent);

