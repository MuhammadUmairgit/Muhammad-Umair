//DOM UI VARIABLES
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");
const clearTask = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

//event listener
taskForm.addEventListener("submit", taskFormHandler);
clearTask.addEventListener("click", clearTaskHandler);
filter.addEventListener("input", filterHandler);
document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);

//handler
function taskFormHandler(event) {
  event.preventDefault(); //default functionality ko rukdega

  const taskInputValue = taskInput.value;
  if (!taskInputValue) {
    alert("please fill the task");
    return;
  }

  const listElement = document.createElement("li");
  listElement.className = "collection-item";

  listElement.innerHTML = `${taskInputValue}
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>`;

  collection.append(listElement);

  storeTaskInLocalStorage(taskInputValue);

  taskInput.value = "";

  //bind delete functionality
  listElement
    .querySelector(".delete-item i")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const currentElement = event.target;
      if (confirm("Are You Sure ?")) {
        const mainElement = currentElement.parentElement.parentElement;
        deleteTaskFromLocalStorage(mainElement.innerText);
        mainElement.remove();
      }
    });
}

function clearTaskHandler(event) {
  event.preventDefault();
  if (confirm("Are You Sure?")) {
    collection.innerHTML = "";
    localStorage.setItem("tasks", null);
  }
}

function filterHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  const filterInputValue = currentElement.value.toLowerCase();

  const collectionItems = document.querySelectorAll(".collection-item");

  collectionItems.forEach(function (singleCollectionItem) {
    const taskInnerText = singleCollectionItem.innerText.toLowerCase();
    if (taskInnerText.indexOf(filterInputValue) == -1) {
      singleCollectionItem.style.display = "none";
    } else {
      singleCollectionItem.style.display = "block";
    }
  });
}

function getTasks() {
  const getTaskFromLocalStorage = localStorage.getItem("tasks");
  let tasks;

  if (getTaskFromLocalStorage == "null") {
    tasks = [];
  } else {
    tasks = JSON.parse(getTaskFromLocalStorage);
  }

  return tasks;
}

function storeTaskInLocalStorage(taskName) {
  const tasks = getTasks();
  tasks.push(taskName);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTaskFromLocalStorage(taskName) {
  const tasks = getTasks();

  if (tasks.length > 0) {
    tasks.forEach(function (singleTask, index) {
      if (singleTask == taskName) {
        tasks.splice(index, 1);
      }
    });
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasks = getTasks();
  if (tasks.length > 0) {
    tasks.forEach(function (singleTask, index) {
      const listElement = document.createElement("li");
      listElement.className = "collection-item";

      listElement.innerHTML = `${singleTask}
      <a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
      </a>`;

      collection.append(listElement);

      //bind delete functionality
      listElement
        .querySelector(".delete-item i")
        .addEventListener("click", function (event) {
          event.preventDefault();
          const currentElement = event.target;
          if (confirm("Are You Sure ?")) {
            const mainElement = currentElement.parentElement.parentElement;
            deleteTaskFromLocalStorage(mainElement.innerText);
            mainElement.remove();
          }
        });
    });
  }
}
