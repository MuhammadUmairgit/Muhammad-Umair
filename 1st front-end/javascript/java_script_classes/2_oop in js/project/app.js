const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const bookList = document.querySelector("#book-list");



function UI () {}
UI.prototype.addbook = function (book) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<tr>
    <td>muzammil</td>
    <td>muzammil</td>
    <td>muzammil</td>
    <td><a href="#" class="delete">X<a></td>
  </tr>`;
  bookList.appendChild(tableRow);
}



form.addEventListener("submit",formSubmitHandler);

function formSubmitHandler (event) {
    event.preventDefault();
    const titleInput = titleInput.value;
    const authorValue = authorValue.value;
    const isbnValue = isbnValue.value;

    const UI = new UI ();
    const bookObject = new CreateBookObject(titleValue, authorValue, isbnValue);
}