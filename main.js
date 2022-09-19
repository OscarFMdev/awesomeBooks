/*Object constructor*/
function book(name, author) {
  this.name = name;
  this.author = author;
}

/* Create booksArray and set it to empty if localStorage is null */
const booksArray = JSON.parse(localStorage.getItem('books')) || [];

