function easyHTTP () {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  // this.http.onload = function () {
  //   if (this.status === 200) {
  //     console.log(this.responseText);
  //   }
  // };

  // The 'this' in the above if statement resolves to 'this.http'. This will work. However, it is recommended to just use an arrow function like below, which provides a lexical 'this'.

  // this.http.onload = () => {
  //   if (this.http.status === 200) {
  //     console.log(this.http.responseText);
  //   }
  // };

  // Above the `this` in `this.http.onload` and the one in `this.http.status` are resolving to the same object!

  // Another way to fix this in ES5 without arrow functions is to make another variable like so:

  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  // 'self' is set to whatever 'this' is in the scope of easyHTTP.prototype.get.

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json');

  const self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-Type', 'application/json');

  const self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
