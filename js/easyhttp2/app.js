const http = new EasyHTTP();

// Get users from JSON Placeholder
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User data
const data = {
  name: 'Juno Tesoro',
  username: 'jutesoro',
  email: 'jutesoro@gmail.com'
};

// Create user
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
