import React from "react";

function Tasklist(props) {
  const {
    tasks,
    singleTaskDeleteHandler,
    editButtonHandler,
    allTasksDeleteHandler,
  } = props;

  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input type="text" name="filter" id="filter" />
        <label>Filter Task</label>
      </div>
      <ul className="collection">
        {tasks.length > 0 &&
          tasks.map((singleTask, index) => {
            return (
              <li className="collection-item" key={index}>
                {singleTask}
                <a
                  href="/"
                  className="delete-item secondary-content"
                  onClick={(event) => singleTaskDeleteHandler(event, index)}
                >
                  <i className="fa fa-remove"></i>
                </a>
                <a
                  href="/"
                  className="delete-item secondary-content"
                  onClick={(event) => editButtonHandler(event, index)}
                >
                  <i className="fa fa-edit"></i>
                </a>
              </li>
            );
          })}
      </ul>
      <a href className="clear-tasks btn black" onClick={allTasksDeleteHandler}>
        Clear Tasks
      </a>
    </div>
  );
}

export default Tasklist;
