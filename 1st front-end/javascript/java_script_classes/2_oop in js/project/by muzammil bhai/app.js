//DOM UI VARIABLES
const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const bookList = document.querySelector("#book-list");
const container = document.querySelector(".container");
const bookForm = document.querySelector("#book-form");

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

  // tableRow.querySelector("a").addEventListener("click", bookDeleteHandler);
  bookList.appendChild(tableRow);
};

UI.prototype.clearFields = function () {
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
};

UI.prototype.showAlert = function (message, className = "success") {
  const createDiv = document.createElement("div");
  createDiv.className = `alert ${className} `;
  createDiv.innerText = message;

  container.insertBefore(createDiv, bookForm);

  setTimeout(function () {
    createDiv.remove();
  }, 1000);
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
  ui.showAlert("book is addedd successfully!");
  ui.clearFields();
}

// function bookDeleteHandler(event) {
//   const currentElement = event.target;
//   const exactTableRow = currentElement.parentElement.parentElement;

//   if (confirm("Are You Sure ?")) {
//     exactTableRow.remove();
//   }
// }

bookList.addEventListener("click", bookListHandler);
//event bubling when ever you bind the event listener to parent element it will effect all your children element
function bookListHandler(event) {
  event.preventDefault();
  // event.stopPropagation(); // it will prevent the event bubling funcationality
  const currentElement = event.target;
  if (currentElement.className == "delete") {
    const exactTableRow = currentElement.parentElement.parentElement;

    if (confirm("Are You Sure ?")) {
      exactTableRow.remove();
      const ui = new UI();
      ui.showAlert("book is removed successfully!", "error");
    }
  }
}
