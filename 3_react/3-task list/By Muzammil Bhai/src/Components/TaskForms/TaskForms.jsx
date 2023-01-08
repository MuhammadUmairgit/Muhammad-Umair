import React, { useState } from "react";
import Swal from "sweetalert2";
import TaskList from "../TaskList/TaskList";

function TaskForms() {
  const [taskInput, setTaskInput] = useState();
  const [filterInput, setFilterInput] = useState();
  const [tasks, setTasks] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
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
    if (!taskInput) {
      Swal.fire({
        icon: "error",
        title: "Please Fill The Task",
      });
      return;
    }else{
    if (isEdit === null) {
      addTask();
    } else {
      editTask();
    }

    setTaskInput("");
  };

  const addTask = () => {
    setTasks([...tasks, taskInput]);
  };

  const editTask = () => {
    const currentIndex = isEdit;
    const tempTasks = [...tasks];
    tempTasks[currentIndex] = taskInput;

    setTasks(tempTasks);

    setIsEdit(null);
  };

  const deleteTaskHandler = (event, index) => {
    event.preventDefault();
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
      } else {
        Swal.fire("task is not deleted successfully!", "", "info");
      }
    });
  };

  const clearTaskHandler = (event) => {
    event.preventDefault();
    setTasks([]);
    Swal.fire("All tasks are deleted successfully!", "", "success");
  };

  const filterInputHandler = (event) => {
    event.preventDefault();
    setFilterInput(event.target.value);
  };

  const editTaskHandler = (event, index) => {
    event.preventDefault();
    setIsEdit(index);
    setTaskInput(tasks[index]);
  };

  const filterInputValue = filterInput ? filterInput.toLowerCase() : "";
  const filteredTasks = tasks.filter((singleTask) =>
    singleTask.toLowerCase().includes(filterInputValue)
  );

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
                    {isEdit === null ? "Add" : "Update"} Task
                  </button>
                </form>
              </div>
            </div>
            {/* TASK LIST */}
            <TaskList
              tasks={tasks}
              deleteTaskHandler={deleteTaskHandler}
              clearTaskHandler={clearTaskHandler}
              filterInputHandler={filterInputHandler}
              filteredTasks={filteredTasks}
              editTaskHandler={editTaskHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForms;
