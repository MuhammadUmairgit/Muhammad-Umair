import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";

function TaskForms() {
  const [taskInput, setTaskInput] = useState();
  const [tasks, setTasks] = useState([]);
  // [
  //   'first task',
  //   'second task',
  //   'third task',
  // ]

  const taskInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(task, "task");
    setTasks([...tasks, taskInput]);

    setTaskInput("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <div className="row">
                <form id="task-form" onSubmit={formSubmitHandler}>
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      onChange={taskInputHandler}
                      value={taskInput}
                    />
                    <label>new task</label>
                  </div>
                  <button
                    className="waves-effect waves-light btn"
                    type="submit"
                  >
                    Add Task
                  </button>
                </form>
              </div>
            </div>
            {/* TASK LIST */}
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForms;
