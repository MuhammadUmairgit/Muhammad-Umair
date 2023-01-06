import React from "react";

function DisplayBook(props) {
    const {books} = props;
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
        {books.length > 0 books.map}
      </tbody>
    </table>
  );
}

export default DisplayBook;
