import React, { useState } from "react";
import DisplayContent from "../Pages/DisplayContent";

function Home() {
  const [input, setInput] = useState("");

  
  const inputValue = (event) => {
      event.preventDefault();
      setInput(event.target.value);
    };
    
    const submitButtonHandler = (event) => {
      event.preventDefault();
      if (inputValue === "") {
        alert("Please fill the value first");
      }
    };
  const inputValueHandler = () => {
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <form id="task-form" action="">
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      value={input}
                      onChange={inputValueHandler}
                    />
                    {/* <label for="task">New Task</label> */}
                  </div>
                </div>
                <input
                  type="submit"
                  value="Add Task"
                  className="btn"
                  onClick={submitButtonHandler}
                />
                {/* <button type="submit" value="Add Task" className="btn">  */}
              </form>
            </div>
            <div className="card-action">
              <h5 id="task-title">Tasks</h5>
              <div className="input-field col s12">
                <input type="text" name="filter" id="filter" />
                {/* <label for="filter">Filter Task</label> */}
              </div>
              <ul className="collection">
                <DisplayContent />
              </ul>
              <button className="clear-tasks btn black">Clear Tasks</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
