import React from "react";

function DisplayBook(props) {
  const { books, deleteButtonHandler, editButtonHandler } = props;
  return (
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Edit</th>
          <th>Delete</th>
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
                  <button onClick={(event) => editButtonHandler(event, index)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => deleteButtonHandler(event, index)}
                  >
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

export default DisplayBook;
