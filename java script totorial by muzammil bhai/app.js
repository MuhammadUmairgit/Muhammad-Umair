//dom (Document Object Model)
// https://www.w3schools.com/js/js_htmldom.asp

/*
When a web page is loaded, the browser creates a Document Object Model of the page.
The HTML DOM model is constructed as a tree of Objects:
*/
let valOfDom;

valOfDom = document;
valOfDom = document.all;
valOfDom = document.body;
valOfDom = document.head;
valOfDom = document.all.length;
valOfDom = document.doctype;
valOfDom = document.domain;
valOfDom = document.URL;
valOfDom = document.characterSet;
valOfDom = document.contentType;

valOfDom = document.forms;
valOfDom = document.forms[0];
valOfDom = document.links;
valOfDom = document.forms[0].id;
valOfDom = document.forms[0].method;
valOfDom = document.forms[0].action;

valOfDom = document.links;
valOfDom = document.links[0];
valOfDom = document.links[0].id;
valOfDom = document.links[0].className;
valOfDom = document.links[0].classList;
valOfDom = document.links[0].classList[0];

valOfDom = document.images;

valOfDom = document.scripts[0].getAttribute("src");

valOfDom = document.scripts;

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

document.querySelector("#task-button").innerText = "Add New Tasks";
document.querySelector("#task-title").style.color = "red";

const taskTitle = document.getElementById("task-title");

// Change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "red";
taskTitle.style.padding = "20px";
// taskTitle.style.margin = '20px';

taskTitle.style.display = "none";
taskTitle.style.display = "block";

//it will return array of elements
console.log(document.getElementsByClassName("collection"));
//it will return one element
console.log(document.getElementById("task-title"));
//it is same as css selector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));

// Change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
// taskTitle.innerText = "Hamdan";

// console.log(valOfDom);
// console.log(document.links[0]);

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_lightbulb

// document.querySelector("ul li").style.color = "blue";

//it will return array
let allLiElements = document.querySelectorAll("ul li");

allLiElements = document.querySelectorAll("ul li:nth-child(odd)");
allLiElements = document.querySelectorAll("ul li:nth-child(even)");

allLiElements.forEach(function (singleLi, index) {
  //   console.log(index, "index");
  //   console.log(singleLi, "singleLi");
  singleLi.style.color = "blue";
});

document.querySelector("ul li:nth-child(5)").style.color = "red";
document.querySelector("ul li:nth-child(1)").style.color = "purple";

//Traversing

document
  .querySelector(".fa-remove")
  .addEventListener("click", function (event) {
    // console.log("click is working");
    // console.log(event.target, " event.target");
    const currentElement = event.target;
    currentElement.parentElement.parentElement.remove();
  });

let valTraversingDom;
const list = document.querySelector("ul.collection");

document.querySelector("#task-title").children;

//get children nodes
valTraversingDom = list.childNodes;
// valTraversingDom = list.childNodes[0];
// valTraversingDom = list.childNodes[0].nodeName;
// valTraversingDom = list.childNodes[0].nodeType;

//node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node (line break)
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes

valTraversingDom = list.children;

valTraversingDom = list.childNodes;

valTraversingDom = list.parentNode;

valTraversingDom = list.parentElement;

console.log(valTraversingDom, " valTraversingDom");