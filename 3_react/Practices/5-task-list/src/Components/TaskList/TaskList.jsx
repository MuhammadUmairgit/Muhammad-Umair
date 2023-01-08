import React, { memo } from "react";

function TaskList(props) {
  const {
    deleteTaskHandler,
    clearTaskHandler,
    filterInputHandler,
    filteredTasks,
    editTaskHandler,
  } = props;
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input
          type="text"
          name="filter"
          id="filter"
          onChange={filterInputHandler}
        />
        <label>Filter Task</label>
      </div>

      <ul className="collection">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((singleTask, index) => {
            return (
              <li className="collection-item" key={index}>
                {singleTask}

                <a
                  href="/"
                  className="delete-item secondary-content"
                  onClick={(event) => deleteTaskHandler(event, index)}
                >
                  <i className="fa fa-remove"></i>
                </a>

                <a
                  href="/"
                  className="delete-item secondary-content"
                  onClick={(event) => editTaskHandler(event, index)}
                >
                  <i className="fa fa-edit"></i>
                </a>
              </li>
            );
          })
        ) : (
          <p className="collection-item">Task is Not Found!</p>
        )}
      </ul>
      <a href="/" className="clear-tasks btn black" onClick={clearTaskHandler}>
        Clear Task
      </a>
    </div>
  );
}

export default memo(TaskList);
