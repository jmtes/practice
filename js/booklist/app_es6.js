// Define Book class
class Book {
  constructor (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Define UI class
class UI {
  addBookToList (book) {
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
  }

  deleteBook (target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  showAlert (msg, className) {
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
  }
}

// Local storage class
class Store {
  static getBooks () {
    let books;

    if (window.localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(window.localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks () {
    const books = Store.getBooks();

    books.forEach((book) => {
      const ui = new UI();

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook (book) {
    const books = Store.getBooks(); // We're using the class name instead of this because getBooks is a static method.

    books.push(book);

    window.localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook (isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    window.localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
    // Add book to local storage
    Store.addBook(book);
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
  // Remove from local storage
  Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
  // Show message
  ui.showAlert('Book removed.', 'success');

  event.preventDefault();
});
