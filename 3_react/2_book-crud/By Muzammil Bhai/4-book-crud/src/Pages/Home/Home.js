import React, { useState } from "react";
import DisplayBooks from "../../Components/DisplayBooks/DisplayBooks";
import "./Home.less";

function Home() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

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
    if (isEdit === null) {
      createRecord();
    } else {
      updateRecord();
    }
  };

  const createRecord = () => {
    const bookObject = { title, author, isbn };
    setBooks([...books, bookObject]);

    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const updateRecord = () => {
    const currentIndex = isEdit;
    const tempBooks = [...books];
    tempBooks[currentIndex].title = title;
    tempBooks[currentIndex].author = author;
    tempBooks[currentIndex].isbn = isbn;

    setBooks(tempBooks);

    setIsEdit(null);

    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const handleDeleteBook = (event, index) => {
    event.preventDefault();

    if (window.confirm("Are You Sure")) {
      const tempBooks = [...books];
      tempBooks.splice(index, 1);
      setBooks(tempBooks);
    }
    console.log(handleDeleteBook, "deleted");
  };

  const handleEditBook = (event, index) => {
    event.preventDefault();

    const tempBook = [...books];
    const currentBook = tempBook[index];

    setTitle(currentBook.title);
    setAuthor(currentBook.author);
    setIsbn(currentBook.isbn);

    setIsEdit(index);
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
          <button type="submit" className="u-full-width">
            {isEdit === null ? "Submit" : "Update"}
          </button>
        </div>
      </form>
      <DisplayBooks
        books={books}
        handleDeleteBook={handleDeleteBook}
        handleEditBook={handleEditBook}
      />
    </div>
  );
}

export default Home;
