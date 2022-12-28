import React from "react";

function DisplayBooks(props) {
  const {books,deleteButtonhandler} = props;

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
                <td><button>Edit</button></td>
                <td>
                  <a
                    href="./"
                    onClick={(event) => deleteButtonhandler(event, index)}
                  >
                    X
                  </a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default DisplayBooks;
