/*
 * EasyHTTP Library - a library for making HTTP requests
 *
 * @version 2.0.0
 */

class EasyHTTP {
  // Make a GET request
  get (url) {
    return new Promise((resolve, reject) => {
      window.fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make a POST request
  post (url, data) {
    return new Promise((resolve, reject) => {
      window.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make a PUT request
  put (url, data) {
    return new Promise((resolve, reject) => {
      window.fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}
