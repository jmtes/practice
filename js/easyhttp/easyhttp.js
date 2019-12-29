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

  // The 'this' in the above if statement refers to 'this.http'. This will work. However, it is recommended to just use an arrow function like below, which provides a lexical 'this'.

  // this.http.onload = () => {
  //   if (this.http.status === 200) {
  //     console.log(this.http.responseText);
  //   }
  // };

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
