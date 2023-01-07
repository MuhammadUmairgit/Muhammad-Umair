import React, { useState } from "react";
import Swal from "sweetalert2";
import Tasklist from "../TaskList/Tasklist";

function TaskForm() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const titleInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!taskInput) {
      Swal.fire({
        icon: "error",
        title: "Please fill the task",
        timer: "1500",
      });
      return;
    } else {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
      Swal.fire({
        icon: "success",
        title: "task sucessfully added",
        timer: "1200",
      });
    }
  };
  const singleTaskDeleteHandler = (event, index) => {
    event.preventDefault();
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
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
                      value={taskInput}
                      onChange={titleInputHandler}
                    />
                    <label>new task</label>
                  </div>
                  <button
                    className="waves-effect waves-light btn"
                    type="submit"
                  >
                    Add task
                  </button>
                </form>
              </div>
            </div>

            <Tasklist
              tasks={tasks}
              //   editButtonHandler={editButtonHandler}
              singleTaskDeleteHandler={singleTaskDeleteHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
