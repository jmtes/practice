// By tacking on the async keyword before your function, your function will return a promise even if you specified it to return something else, which can be seen in the example below.
async function myFunc () {
  // return 'Hello';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = true;

  if (!error) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

async function getUsers () {
  // Await response of the fetch call
  const res = await window.fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it's resolved
  // This is the equivalent of the second .then() you tack after the fetch call to call the resolve of the promise.
  const data = await res.json();

  // Only proceed once second promise is resolved
  // This return is passed to the .then() tacked onto the call to getUsers().
  return data;
}

getUsers()
  .then(users => console.log(users));
