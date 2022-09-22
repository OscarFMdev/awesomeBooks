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

/* Navigation selectors */

const listNav = document.querySelector('.list');
const addNav = document.querySelector('.new-book');
const contactNav = document.querySelector('.contact');

/* Pages selectors */
const listPage = document.querySelector('#list');
const addPage = document.querySelector('#new-book');
const contactPage = document.querySelector('#contact');

/* Functions */

function listSelected() {
  addPage.classList.add('hide');
  addPage.classList.remove('show');
  contactPage.classList.add('hide');
  contactPage.classList.remove('show');
  listPage.classList.remove('hide');
  listPage.classList.add('show');
}

function addSelected() {
  listPage.classList.add('hide');
  listPage.classList.remove('show');
  contactPage.classList.add('hide');
  contactPage.classList.remove('show');
  addPage.classList.remove('hide');
  addPage.classList.add('show');
}

function contactSelected() {
  listPage.classList.add('hide');
  listPage.classList.remove('show');
  addPage.classList.add('hide');
  addPage.classList.remove('show');
  contactPage.classList.remove('hide');
  contactPage.classList.add('show');
}

listNav.addEventListener('click', listSelected);

addNav.addEventListener('click', addSelected);

contactNav.addEventListener('click', contactSelected);
