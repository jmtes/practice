document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText () {
  window.fetch('test.txt')
    .then(function (res) {
      // res will be a Response object.
      // res.text() also returns a Promise, so another .then() needs to be tacked on after this one.
      return res.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get local JSON data
function getJSON () {
  window.fetch('posts.json')
    .then(function (res) {
      // res will be a Response object.
      // res.text() also returns a Promise, so another .then() needs to be tacked on after this one.
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (datum) {
        output += `<li>${datum.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from external API
function getExternal () {
  window.fetch('https://api.github.com/users')
    .then(function (res) {
      // res will be a Response object.
      // res.text() also returns a Promise, so another .then() needs to be tacked on after this one.
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
