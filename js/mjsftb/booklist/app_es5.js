// Book Constructor
function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI () {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Insert columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

// Delete book from list
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

// Clear form fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Show alert
UI.prototype.showAlert = function (msg, className) {
  // Create div'
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(msg));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  window.setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function (event) {
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate input
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields.', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Show success
    ui.showAlert('Book Added!', 'success');
    // Clear fields
    ui.clearFields();
  }

  event.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (event) {
  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(event.target);
  // Show message
  ui.showAlert('Book removed.', 'success');

  event.preventDefault();
});