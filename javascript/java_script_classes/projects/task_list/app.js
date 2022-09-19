//DOM UI VARIABLES
document.querySelector("#alert").style.display = "none";
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");
const clearTask = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

//event listener
taskForm.addEventListener("submit", taskFormHandler);
clearTask.addEventListener("click", clearTaskHandler);
filter.addEventListener("input", filterHandler);

//handler
function taskFormHandler(event) {
  event.preventDefault(); //default functionality ko rukdega





const taskInputValue = taskInput.value;
  if (!taskInputValue) {
    document.querySelector("#alert").style.display = "block";
    
  }
  else {
    document.querySelector("#alert").style.display = "none";






const listElement = document.createElement("li");
listElement.className = "collection-item";

listElement.innerHTML = `${taskInputValue}
  <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
  </a>`;

collection.append(listElement);

taskInput.value = "";

//bind delete functionality
listElement
    .querySelector(".delete-item i")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const currentElement = event.target;
      if (confirm("Are You Sure ?")) {
        currentElement.parentElement.parentElement.remove();
      }
    });
  }
}

function clearTaskHandler(event) {
  event.preventDefault();
  if (confirm("Are You Sure?")) {
    collection.innerHTML = "";
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









// const hover = document.querySelector("#hover");
// hover.addEventListener('click',firsthover);
// function firsthover (event){
//     event.preventDefault();
//     hover.style.backgroundColor = "red";

// }


// const para = document.querySelector(".para");
// const hover = document.querySelector("#hover");
// hover.addEventListener('click',firsthover);


// function over (){
//   hover.style.backgroundColor = "red";
//   document.querySelector(".para").style.display = "block";
//   hover.style.color = "white";
//   hover.style.border = "none";

// }


// function out (){
//   document.querySelector(".para").style.display = "none";
//   hover.style.backgroundColor = "";
//   hover.style.backgroundColor = "yellow";
//   hover.style.color = "black";
//   hover.style.border = "none";
// }

