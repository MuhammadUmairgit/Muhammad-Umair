import React, { useState } from "react";
import DisplayBook from "../../Components/DisplayBooks/DisplayBook";

function Home() {
  const [title, setTitle] = useState ("");
  const [author, setAuthor] = useState ("");
  const [isbn, setIsbn] = useState ("");
  const [books, setBooks] = useState ([]);

  const titleInputValue = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const authorInputValue = (event) => {
    event.preventDefault();
    setAuthor(event.target.value);
  };
  const isbnInputValue = (event) => {
    event.preventDefault();
    setIsbn(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const bookObject = {title, author, isbn};
    setBooks([...books, bookObject]);
    setTitle("")
    setTitle("")
  };

  return (
    <div className="container">
      <h1>Add Book</h1>
      <form id="book-form" onClick={formSubmitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            className="u-full-width"
            value={title}
            onChange={titleInputValue}
          />
        </div>
        {/* <div>{title}</div> */}
        <div>
          <label>Author</label>
          <input
            type="text"
            id="author"
            className="u-full-width"
            value={author}
            onChange={authorInputValue}
          />
        </div>
        {/* <div>{author}</div> */}
        <div>
          <label>ISBN#</label>
          <input
            type="number"
            id="isbn"
            className="u-full-width"
            value={isbn}
            onChange={isbnInputValue}
          />
        </div>
        {/* <div>{isbn}</div> */}
        <div>
          <button type="submit" className="u-full-width">
            Submit
          </button>
        </div>
      </form>
      <DisplayBook books={books} />
    </div>
  );
}

export default Home;
