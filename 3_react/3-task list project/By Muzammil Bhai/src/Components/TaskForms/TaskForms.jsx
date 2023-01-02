import React, { useState } from "react";
import Swal from "sweetalert2";
import TaskList from "../TaskList/TaskList";

function TaskForms() {
  const [taskInput, setTaskInput] = useState();
  const [filterInput, setFilterInput] = useState();
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
    if (!taskInput) {
      Swal.fire({
        icon: "error",
        title: "Please Fill The Task",
      });
      return;
    }
    // console.log(task, "task");
    setTasks([...tasks, taskInput]);

    setTaskInput("");
  };

  const deleteTaskHandler = (event, index) => {
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

  const clearTaskHandler = (event) => {
    event.preventDefault();
    setTasks([]);
    Swal.fire("All tasks are deleted successfully!", "", "success");
  };

  const filterInputHandler = (event) => {
    event.preventDefault();
    setFilterInput(event.target.value);
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
                    Add Task
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForms;
