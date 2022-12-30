import React, { useState } from "react";
import DisplayBook from "../Components/DisplayBook.js/DisplayBook"
import "./Home.js";

function Home() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]);

  const titleInputHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const authorInputHandler = (event) => {
    event.preventDefault();
    setAuthor(event.target.value);
  };

  const isbnInputHandler = (event) => {
    event.preventDefault();
    setIsbn(event.target.value);
  };

  const bookFormSubmitHandler = (event) => {
    event.preventDefault();

    if (title === "" || isbn === "" || author === "") {
      alert("please fill the values");
      return;
    }

    // const bookObject = { title: title, author: author, isbn: isbn };

      createRecord();

  };

  const createRecord = () => {
    const bookObject = { title, author, isbn };
    setBooks([...books, bookObject]);

    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <div className="container">
      <h1>Add Book</h1>
      <form id="book-form" onSubmit={bookFormSubmitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            className="u-full-width"
            value={title}
            onChange={titleInputHandler}
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
            onChange={authorInputHandler}
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
            onChange={isbnInputHandler}
          />
        </div>
        {/* <div>{isbn}</div> */}
        <div>
          <button type="submit" className="u-full-width">
            Submit
          </button>
        </div>
      </form>
      <DisplayBook/>
    </div>
  );
}

export default Home;
