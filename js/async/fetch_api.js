document.getElementById('button1').addEventListener('click', getText);

function getText () {
  window.fetch('test.txt')
    .then(function (res) {
      // res will be a Response object.
      // res.text() also returns a Promise, so another .then() needs to be tacked on after this one.
      console.log(res);
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
