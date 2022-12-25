import React, { useState } from "react";
import DisplayBooks from "../../Components/DisplayBooks/DisplayBooks";
import "./Home.less";

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
            onChange={titleInputHandler}
            value={title}
          />
        </div>
        {/* <div>{title}</div> */}
        <div>
          <label>Author</label>
          <input
            type="text"
            id="author"
            className="u-full-width"
            onChange={authorInputHandler}
            value={author}
          />
        </div>
        {/* <div>{author}</div> */}
        <div>
          <label>ISBN#</label>
          <input
            type="number"
            id="isbn"
            className="u-full-width"
            onChange={isbnInputHandler}
            value={isbn}
          />
        </div>
        {/* <div>{isbn}</div> */}
        <div>
          <input type="submit" value="Submit" className="u-full-width" />
        </div>
      </form>
      <DisplayBooks books={books} />
    </div>
  );
}

export default Home;
