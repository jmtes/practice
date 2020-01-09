// The observer pattern allows us to subscribe and unsubscribe fromm certain events or functionalities. It can be used to notify the DOM of certain elements to be updated.

// Angular relies heavily on this pattern through event management within the scope.

function EventObserver () {
  // This property represents the functions that will be passed into the event observer.
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    // Filter out from the list whichever item in the observers array matches the function passed in. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      // call() is a method that can be invoked with function-type objects.
      item.call();
    });
  }
};

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
