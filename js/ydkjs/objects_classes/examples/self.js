function identify () {
  var self = this;
  setTimeout(function () {
    console.log(self.name);
  }, 100);
}

var user = {
  name: 'Foster'
};

identify.call(user); // "Foster"

identify(); // Interestingly enough, this logs "Philomena". I suppose global object properties persist even without the script that sets them!
