const taskInput = document.querySelector("#task");
const taskForm = document.querySelector("#task-form");

// document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskInputValue = taskInput.value;

  if (!taskInputValue) {
    alert("Please Fill The Task!");
    return;
  }
  const listElement = document.createElement("li");
  listElement.className = "collection-item";

  listElement.innerHTML = `${taskInputValue}
  <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>`;
  collection.append(listElement);

  // storeTaskInLocalStorage(taskInputValue);

  taskInput.value = "";

  listElement
    .querySelector(".delete-item i")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const currentElement = event.target;
      if (confirm("Are You Sure")) {
        const mainElement = currentElement.parentElement.parentElement;
        // deleteTaskFromLocalStorage(mainElement.innerText);
        mainElement.remove();
      }
    });
});
