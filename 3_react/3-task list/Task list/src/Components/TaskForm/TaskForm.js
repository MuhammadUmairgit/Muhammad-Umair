import React from 'react'

function TaskForm() {
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
              filteredTasks={searchTasks}
              editTaskHandler={editTaskHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm