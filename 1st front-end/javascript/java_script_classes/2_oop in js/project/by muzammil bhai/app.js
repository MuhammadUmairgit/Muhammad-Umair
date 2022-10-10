//DOM UI VARIABLES
const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const bookList = document.querySelector("#book-list");

//OOPS stands for object oriented programming
function UI() {}

UI.prototype.addBook = function (book) {
  // console.log(book); {title:'',author:'',isbn:''}
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `<tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X<a></td>
        </tr>`;
  bookList.appendChild(tableRow);
};

UI.prototype.clearFields = function () {
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
};

function CreateBookObject(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//Event Listeners
form.addEventListener("submit", formSubmitHandler);

//Event listeners Handlers
function formSubmitHandler(event) {
  event.preventDefault();
  // console.log("clicked");
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const isbnValue = isbnInput.value;

  const ui = new UI();
  const bookObject = new CreateBookObject(titleValue, authorValue, isbnValue);
  // console.log(bookObject, "bookObject");
  // ui.addBook({ title: titleValue, author: authorValue, isbn: isbnValue });
  ui.addBook(bookObject);
  ui.clearFields();
}