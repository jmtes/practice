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

// Modify user info
http.put('https://jsonplaceholder.typicode.com/users/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
