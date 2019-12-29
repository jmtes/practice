const http = new EasyHTTP();

// Get Users from JSON Placeholder
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));
