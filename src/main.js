/* Selector */
const bookList = document.querySelector('.book-list');
const bookName = document.querySelector('.book-name');
const author = document.querySelector('.author');
const form = document.querySelector('form');

/* Navigation selectors */
const listNav = document.querySelector('.list');
const addNav = document.querySelector('.new-book');
const contactNav = document.querySelector('.contact');

/* Pages selectors */
const listPage = document.querySelector('#list');
const addPage = document.querySelector('#new-book');
const contactPage = document.querySelector('#contact');

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

/* Navigation Functions */

function listSelected() {
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  listPage.style.display = 'block';
  listNav.style.color = 'blue';
  if (collection.booksArray.length === 0) {
    bookList.innerHTML = '<h2 class="no-books">No books yet</h2>';
  }
}

function addSelected() {
  listPage.style.display = 'none';
  listNav.style.color = 'black';
  contactPage.style.display = 'none';
  contactNav.style.color = 'black';
  addPage.style.display = 'flex';
  addNav.style.color = 'blue';
}

function contactSelected() {
  listPage.style.display = 'none';
  listNav.style.color = 'black';
  addPage.style.display = 'none';
  addNav.style.color = 'black';
  contactPage.style.display = 'block';
  contactNav.style.color = 'blue';
}

/* Displays books on DOM loaded */
collection.displayBooks();

form.addEventListener('submit', (e) => {
  collection.addBook(e);
  bookName.value = '';
  author.value = '';
  listSelected();
});
bookList.addEventListener('click', collection.removeBook.bind(collection));

/* Navigation event listeners */
listNav.addEventListener('click', listSelected);
addNav.addEventListener('click', addSelected);
contactNav.addEventListener('click', contactSelected);
window.addEventListener('load', listSelected);

const timeDisplay = document.getElementById('date');

function refreshTime() {
  const dateString = new Date().toString();
  const formattedString = dateString.replace('AM', 'am');
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
