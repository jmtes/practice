// Event bubbling is the bubbling up of events through the DOM. When an event happens on a particular element in the DOM, it will actually bubble up through its parents.
// Event delegation is where we put a listener on a parent element and then using logic inside of the event handler to target the element that we actually want that event for.

// EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', () => {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', () => {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', () => {
//   console.log('card');
// });

// When you click on the card title element, all of the above event listeners will be fired because of event bubbling.

// EVENT DELEGATION
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem () {
//   console.log('delete item');
// }

// The above code only works on the first delete button but not for the rest. This is a case where we'd need to use event delegation to get the behavior we want.

// Another situation where you'd need to use event delegation is when you dynamically insert something into the DOM using JS. For example, if you insert a new list item that was not there when the page loaded.

function deleteItem (event) {
  // console.log(event.target);

  if (event.target.parentElement.classList.contains('delete-item')) {
    event.target.parentElement.parentElement.remove();
  }
}

document.body.addEventListener('click', deleteItem);