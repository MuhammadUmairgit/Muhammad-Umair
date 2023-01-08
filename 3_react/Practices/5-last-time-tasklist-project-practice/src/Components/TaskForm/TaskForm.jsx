import React, { useState } from "react";
import Swal from "sweetalert2";
import Tasklist from "../TaskList/Tasklist";

function TaskForm() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEdit, setIsEdit] = useState([]);

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
      if (isEdit === null) {
        addTask();
      } else {
        editTask();
      }
      setTaskInput("");
    }
    const addTask = () => {
      setTasks([...tasks, taskInput]);

      Swal.fire({
        icon: "success",
        title: "task sucessfully added",
        timer: "1200",
      });
    };
  };

  const editTask = () => {
    const currentIndex = isEdit;
    const tempTask = [...tasks];
    tempTask[currentIndex] = taskInput;
    setTasks(tempTask);
    setIsEdit(null);
  };
  const singleTaskDeleteHandler = (event, index) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      showDenyButton: "true",
      confirmationText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
        Swal.fire({
          title: "Task is deleted successfully ",
          icon: "info",
          timer: "1200",
        });
      } else {
        Swal.fire({
          title: "Task is not deleted successfully ",
          icon: "error",
          timer: "1000",
        });
      }
    });
  };
  const allTasksDeleteHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "All tasks deleted successfully",
      icon: "success",
      timer: "1200",
    });
    setTasks([]);
  };

  const editButtonHandler = (event, index) => {
    event.preventDefault();
    setIsEdit(index);
    setTaskInput(tasks[index]);
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
                    <label>New task</label>
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
              editButtonHandler={editButtonHandler}
              singleTaskDeleteHandler={singleTaskDeleteHandler}
              allTasksDeleteHandler={allTasksDeleteHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
