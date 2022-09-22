/* Selector */
const bookList = document.querySelector('.book-list');
const bookName = document.querySelector('.book-name');
const author = document.querySelector('.author');
const form = document.querySelector('form');

/* Object constructor */
function Book(name, author) {
  this.name = name;
  this.author = author;
}

class Collection {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('books')) || [];
  }

  displayBooks() {
    bookList.innerHTML = this.booksArray.map((book, i) => `
      <li class="book element-${i % 2}">
        <div class="text">
        <h2 class="book-info">"${book.name}" by ${book.author}</h2>
        </div>
        <button class="remove-book" data-index=${i}>Remove</button>
      </li>
      `).join('');
  }

  addBook(e) {
    e.preventDefault();
    const bookItem = new Book(bookName.value, author.value);
    this.booksArray.push(bookItem);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }

  removeBook(e) {
    if (!e.target.matches('button')) return;
    const { index } = e.target.dataset;
    this.booksArray.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.booksArray));
    this.displayBooks();
  }
}

const collection = new Collection();

/* Displays books on DOM loaded */
collection.displayBooks();

form.addEventListener('submit', collection.addBook.bind(collection));
bookList.addEventListener('click', collection.removeBook.bind(collection));

/* Navigation */

const listPage = document.getElementById('list');
const addPage = document.getElementById('newBook');
const contactPage = document.getElementById('contact');

listPage.addEventListener('click', () => {

});

addPage.addEventListener('click', () => {

});

contactPage.addEventListener('click', () => {

});