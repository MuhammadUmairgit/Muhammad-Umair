import React from "react";

function DisplayBooks(props) {
  const books = props?.books;

  const deleteButtonHandler = (event) => {
    event.preventDefault();
    const currentElement = event.target.currentElement;
    const deleteValue = currentElement.parentElement;
    console.log(deleteValue, "deleteValue");
  };

  return (
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="book-list">
        {books.length > 0 &&
          books.map((singleBook, index) => {
            return (
              <tr key={index}>
                <td>{singleBook.title}</td>
                <td>{singleBook.author}</td>
                <td>{singleBook.isbn}</td>
                <td>
                  <button class="btn btn-danger" onClick={deleteButtonHandler}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default DisplayBooks;
