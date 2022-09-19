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

/* Functions */
function addBook(e) {
  e.preventDefault();
  const bookItem = new book(bookName.value, author.value);
  booksArray.push(bookItem);
  localStorage.setItem('books', JSON.stringify(booksArray));
  displayBooks();
}

/* Functions
function displayBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  bookList.innerHTML = books.map((book, i) => {
    return `
    <li class="book">
      <h2 class="book-title">${book.name}</h2>
      <p class="book-author">${book.author}</p>
      <button class="remove-book" data-index=${i}>Remove</button>
    </li>
    <hr style="width: 500px; margin-left: 0;">
    `;
  }).join('');
}

function removeBook(e) {
  if (!e.target.matches('button')) return;
  const index = e.target.dataset.index;
  booksArray.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(booksArray));
  displayBooks();
}

*/

/* Event Listeners 
  
form.addEventListener('submit', addBook);

bookList.addEventListener('click', removeBook);

*/