// Template literals are part of ES6 but are compatible with all modern browsers.

const name = 'Juno';
const age = 19;
const job = 'Student';
const city = 'San Franciscso';
let html;

// Often you will be inserting HTML from JS so you're usually gonna have to create some kind of HTML string with the dynamic data you want to insert.

// Without template strings (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'; // This looks ugly and meshed together.

html = '<ul>' +
        '</li><li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

function hello() {
  return 'hello';
}

// With template strings (ES6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;