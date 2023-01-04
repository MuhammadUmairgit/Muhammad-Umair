import React from "react";

function TaskList(props) {
  const {
    tasks,
    singleTaskDeletingHandler,
    allTasksDeleteButtonHandler,
    filteredTaskInputHandler,
    filteredTasks,
    editButtonHandler,
  } = props;
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input
          type="text"
          name="filter"
          id="filter"
          onChange={filteredTaskInputHandler}
        />
        <label>Filter Task</label>
      </div>
      <ul className="collection">
        {filteredTasks.length > 0 &&
          filteredTasks.map((singleTask, index) => {
            return (
              <li className="collection-item" key={index}>
                {singleTask}
                <a
                  href
                  className="delete-item secondary-content"
                  onClick={(event) => singleTaskDeletingHandler(event, index)}
                >
                  <i className="fa fa-remove"></i>
                </a>
                <a
                  href
                  className="delete-item secondary-content"
                  onClick={(event) => editButtonHandler (event,index)}
                >
                  <i className="fa fa-edit"></i>
                </a>
              </li>
            );
          })}
      </ul>
      <a
        href
        className="clear-tasks btn black"
        onClick={allTasksDeleteButtonHandler}
      >
        Clear Task
      </a>
    </div>
  );
}

export default TaskList;
