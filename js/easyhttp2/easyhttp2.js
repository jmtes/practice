/*
 * EasyHTTP Library - a library for making HTTP requests
 *
 * @version 2.0.0
 */

class EasyHTTP {
  // Make a GET request
  get (url) {
    window.fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
