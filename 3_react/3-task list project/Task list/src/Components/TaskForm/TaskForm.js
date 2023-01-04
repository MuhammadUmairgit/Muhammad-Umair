import React, { useState } from "react";
import Swal from "sweetalert2";
import TaskList from "../TaskList/TaskList";

function TaskForm() {
  const [taskInput, setTaskInput] = useState();
  const [isEdit, setIsEdit] = useState();
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };

  const taskSubmitHandler = (event) => {
    event.preventDefault();
    if (!taskInput) {
      Swal.fire({
        icon: "error",
        title: "Please fill the task",
      });
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const singleTaskDeleteHandler = (event, index) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: "yes",
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
        Swal.fire("Task is deleted successfully!", "", "sucess");
      } else {
        Swal.fire("Task is not deleted!", "", "info");
      }
    });
  };

  const allTasksDeleteHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure",
      showDenyButton: "yes",
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks([]);
        Swal.fire("All tasks are deleted successfully", "", "sucess");
      } else {
        Swal.fire(
          "Tasks is not deleted if you want to delete it so click on yes",
          "",
          "sucess"
        );
      }
    });
  };
  const editButtonHandler = (event, index) => {
    event.preventDefault();
    setIsEdit(index);
    setTaskInput(tasks[index]);
    const currentIndex = isEdit;
    const tempTask = [...tasks];
    tempTask[currentIndex] = taskInput;
    setTasks(tempTask);
    setIsEdit(null);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <div className="row">
                <form id="task-form" onSubmit={taskSubmitHandler}>
                  <div className="input-field col s12">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      onChange={taskInputHandler}
                      value={taskInput}
                    />
                    <label>New task</label>
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

            <TaskList
              tasks={tasks}
              singleTaskDeleteHandler={singleTaskDeleteHandler}
              //   allTasksDeleteHandler={allTasksDeleteHandler}
              editButtonHandler={editButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
