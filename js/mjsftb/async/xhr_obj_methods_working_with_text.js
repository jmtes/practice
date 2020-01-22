document.getElementById('button').addEventListener('click', loadData);

function loadData () {
  // Create an XHR Object.
  const xhr = new XMLHttpRequest();

  // The open() method's parameters specify the type of request we want to make, the URL or filename we want to make it to, and whether or not we want it to be async.
  xhr.open('GET', 'data.txt', true);

  // Outputs 1
  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  // xhr.onprogress = function () {
  //   console.log('READYSTATE', xhr.readyState);
  // };

  xhr.onload = function () {
    // This should specify what we want to do with the data once we get it.
    // Outputs 4
    // console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // xhr.onreadystatechange = function () {
  //   // Outputs 1, 2, 3, and 4
  //   // console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  // You'll want to include an onerror function in case something goes wrong with the request.
  xhr.onerror = function () {
    console.log('Request error');
  };

  // The send() method initiates the request.
  xhr.send();

  // readyState Values
  // 0: Request not initialized
  // 1: Server connection established
  // 2: Request received
  // 3: Processing request
  // 4: Request finished and response is ready

  // xhr.readyState would be used to access our object's readyState value.

  // By the time we get to the onload(), we're already at stage 4.
  // onload() is a new method. Previously, the onreadystatechange() method had to be used and you would have to check whether or not you were actually at stage 4, as is shown in the commented code above.
}
