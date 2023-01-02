import React, { useState } from "react";
import Swal from "sweetalert2";
import TaskList from "../TaskList/TaskList";

function TaskForm() {
  const [taskInput, setTaskInput] = useState();
  const [tasks, setTasks] = useState([]);
  const [filterInput, setFilteredInput] = useState();
  const [isEdit, setIsEdit] = useState();

  const taskInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };

  const submitFormHandler = (event) => {
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
    Swal.fire({
      icon: "success",
      title: "Task successfully added",
    });
    return;
  };

  const singleTaskDeletingHandler = (event, index) => {
    Swal.fire({
      title: "Are You Sure?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isconfirmed) {
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);

        Swal.fire("task is deleted successfully!", "", "success");
      } else {
        Swal.fire("task is not deleted successfully!", "", "info");
      }
    });
  };

  const allTasksDeleteButtonHandler = (event) => {
    event.preventDefault();
    setTasks([]);
    Swal.fire("All tasks deleted successfully!", " ", "success");
  };

  const filteredTaskInputHandler = (event) => {
    event.preventDefault();
    setFilteredInput(event.target.value);
  };

  const filterInputValue = filterInput ? filterInput.toLowerCase() : "";
  const filteredTasks = tasks.filter((singleTask) =>
    singleTask.toLowerCase().includes(filterInputValue)
  );

  const editButtonHandler = (event, index) => {
    event.preventDefault();
    const tempTask = [...tasks];
    const currentTask = tempTask[index];
    setTaskInput(currentTask.title);
    setIsEdit(index);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <div className="row">
                <form id="task-form" onSubmit={submitFormHandler}>
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

            <TaskList
              tasks={tasks}
              singleTaskDeletingHandler={singleTaskDeletingHandler}
              allTasksDeleteButtonHandler={allTasksDeleteButtonHandler}
              filteredTaskInputHandler={filteredTaskInputHandler}
              filteredTasks={filteredTasks}
              editButtonHandler={editButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
