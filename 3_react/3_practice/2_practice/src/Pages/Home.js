import React from "react";
import DisplayBooks from "../Components/Display/DisplayBooks";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Add Book</h1>
      <form id="book-form">
        <div>
          <label>Title</label>
          <input type="text" id="title" className="u-full-width" />
        </div>
        {/* <div>{title}</div> */}
        <div>
          <label>Author</label>
          <input type="text" id="author" className="u-full-width" />
        </div>
        {/* <div>{author}</div> */}
        <div>
          <label>ISBN#</label>
          <input type="number" id="isbn" className="u-full-width" />
        </div>
        {/* <div>{isbn}</div> */}
        <div>
          <input type="submit" value="Submit" className="u-full-width" />
        </div>
      </form>
      <DisplayBooks />
    </div>
  );
}

export default Home;
