// Promises are part of the ES6 standard and serve as an alternative to callbacks for handling async operations. They're called promises because while they're handling those operations, they promise to do something when they are finished.
// Promise responses are handled with a .then function, inside which is what we'll do when the promise is complete.

const posts = [
  {
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  }
];

function createPost (post) {
  // The resolve parameter should be the function we want to call when we successfully complete the operation. This is passed as a parameter to the .then() function we'll tack onto the call to createPost().
  // The reject parameter should be the function we want to call when there is an error we want to throw. This is passed as a parameter to the .catch() function we'll tack on after the .then().
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts () {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post Three',
  body: 'This is post three'
})
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });

// The Fetch API returns a promise, so it's important to understand what they are before diving into Fetch.
