/*Object constructor*/
function book(name, author) {
  this.name = name;
  this.author = author;
}

/* Create booksArray and set it to empty if localStorage is null */
const booksArray = JSON.parse(localStorage.getItem('books')) || [];

/* Selector */
const bookList = document.querySelector('.book-list');
const bookName = document.querySelector('.book-name');
const author = document.querySelector('.author');
const form = document.querySelector('form');

