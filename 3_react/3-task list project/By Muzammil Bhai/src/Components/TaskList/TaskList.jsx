import React from "react";

function TaskList(props) {
  const { tasks } = props;
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
              </li>
            );
          })}
      </ul>
      <a className="clear-tasks btn black">Clear Task</a>
    </div>
  );
}

export default TaskList;
