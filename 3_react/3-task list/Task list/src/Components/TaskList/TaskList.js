import React from 'react'

function TaskList() {
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input
          type="text"
          name="filter"
          id="filter"
          onChange={filterInputHandler}
        />
        <label>Filter Task</label>
      </div>
<a href="/" className="clear-tasks btn black" onClick={clearTaskHandler}>
        Clear Task
      </a>
    </div>
  )
}

export default TaskList