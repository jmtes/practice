// A callback is a function that is passed as a parameter to another function and is then run inside that function's body.
// You've been using callbacks with each forEach. That particular callback is not async, but it is a callback nonetheless.
// setTimeout() also takes a callback which actually is async.

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

// function createPost (post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts () {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({
//   title: 'Post Three',
//   body: 'This is post three'
// });

// getPosts();

// When you run the above code and look at the page, you'll see that Post Three is not displayed because it takes 2 seconds to make the post but only 1 second to display the posts and we decided to do this synchronously.

// Let's do it asynchronously using callbacks now.

// Here we add an extra parameter 'callback', a function, which we call after pushing the new post to our array of posts.
function createPost (post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
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

// Now when we call createPost(), we pass in getPosts because that's what we want to run upon adding the new post.
createPost({
  title: 'Post Three',
  body: 'This is post three'
}, getPosts);

// Post Three now shows up when you load the page!

// Callbacks can be confusing but soon you'll see just how valuable they are!
// Essentially, just remember that they're functions passed to other functions to be called within them. That's not too complicated now, is it?
