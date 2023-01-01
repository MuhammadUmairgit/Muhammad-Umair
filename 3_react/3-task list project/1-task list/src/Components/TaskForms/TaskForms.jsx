import React, { useState } from "react";
import Swal from "sweetalert2";
import TaskList from "../TaskList/TaskList";

function TaskForms() {
  const [taskInput, setTaskInput] = useState();
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };
  

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log(task, "task");
    setTasks([...tasks, taskInput]);

    setTaskInput("");

    const clearButtonHandler = (event, index) => {
      event.preventDefault()
      Swal.fire({
        title: "Are You Sure?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          const tempTask = [...tasks];
          tempTask.splice(index, 1);
          setTasks(tempTask);
  
          Swal.fire("task is deleted successfully!", "", "success");
        }else {
          Swal.fire("task is not deleted successfully!", "", "info");
        }
      });
  };

  const clearTaskButtonHandler = (event) => {};
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
            <TaskList
              tasks={tasks}
              clearButtonHandler={clearButtonHandler}
              clearTaskButtonHandler={clearTaskButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForms;
