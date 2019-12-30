/*
 * EasyHTTP Library - a library for making HTTP requests
 *
 * @version 3.0.0
 */

class EasyHTTP {
  // Make a GET request
  async get (url) {
    const res = await window.fetch(url);
    const resData = await res.json();
    return resData;
  }

  // Make a POST request
  async post (url, data) {
    const res = await window.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  }

  // Make a PUT request
  async put (url, data) {
    const res = await window.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  }

  // Make DELETE request
  async delete (url, data) {
    const res = await window.fetch(url, {
      method: 'DELETE'
    });
    const resData = await 'Resource deleted.';
    return resData;
  }
}
