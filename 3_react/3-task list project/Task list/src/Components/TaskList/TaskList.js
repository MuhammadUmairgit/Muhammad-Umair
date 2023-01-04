import React from "react";

function TaskList(props) {
  const { tasks, singleTaskDeleteHandler, allTasksDeleteHandler,editButtonHandler } = props;
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input type="text" name="filter" id="filter" />
        <label>Filter Task</label>
      </div>

      <ul className="collection">
        {tasks.length > 0 ? (
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

                <a href="/" className="delete-item secondary-content" onClick={editButtonHandler}>
                  <i className="fa fa-edit"></i>
                </a>
              </li>
            );
          })
        ) : (
          <p className="collection-item">Task is Not Found!</p>
        )}
      </ul>
      <a
        href="/"
        className="clear-tasks btn black"
        onClick={(event) => allTasksDeleteHandler(event)}
      >
        Clear Task
      </a>
    </div>
  );
}

export default TaskList;
