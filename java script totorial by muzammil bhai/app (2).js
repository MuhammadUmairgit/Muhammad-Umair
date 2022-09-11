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

allLiElementsOdd = document.querySelectorAll("ul li:nth-child(odd)");
allLiElementsEven = document.querySelectorAll("ul li:nth-child(even)");

allLiElementsOdd.forEach(function (singleLi, index) {
  //   console.log(index, "index");
  //   console.log(singleLi, "singleLi");
  singleLi.style.color = "blue";
});

allLiElementsEven.forEach(function (singleLi, index) {
  singleLi.style.color = "red";
});

document.querySelector("ul li:nth-child(5)").style.color = "red";
document.querySelector("ul li:nth-child(1)").style.color = "purple";

//Traversing

//up down in dom

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

// Get children element nodes
valTraversingDom = list.children;
valTraversingDom = list.children[1].textContent = "the text is changed";
// Children of children
// valTraversingDom = list.children[3];
listTwo = document.querySelector(".card-action");
valTraversingDom = listTwo.children[0].children[0].id = "test-link";
// valTraversingDom = list.children[3].children[0].id = 'test-link';

// First child
// valTraversingDom = list.firstChild; //with nodes
valTraversingDom = list.firstElementChild; ////only get element

// Last child
valTraversingDom = list.lastChild; //with nodes
valTraversingDom = list.lastElementChild; //only get element

// Count child elements
valTraversingDom = list.childElementCount;

const listItem = document.querySelector("li.collection-item:first-child");

// Get parent node
// valTraversingDom = listItem.parentNode;
// valTraversingDom = listItem.parentElement;
// valTraversingDom = listItem.parentElement.parentElement;

// Get next sibling
valTraversingDom = listItem;
valTraversingDom = listItem.nextSibling; //with nodes
valTraversingDom = listItem.nextElementSibling;
valTraversingDom =
  listItem.nextElementSibling.nextElementSibling.previousElementSibling;
// Get prev sibling
valTraversingDom = listItem.previousSibling; //with nodes
valTraversingDom = listItem.previousElementSibling;

//create element in dom

const listNewElement = document.createElement("li");
listNewElement.className = "collection-item";
listNewElement.classList.add("collection-item");
listNewElement.classList.add("newwwww");
listNewElement.classList.remove("newwwww");

listNewElement.id = "collection-id-id";
// listNewElement.className = "collection-item aasdasdasd asdasdasdas asdasda s asdasdasd asd asd asd as";
// listNewElement.innerText = "List Item";
listNewElement.innerHTML = `List Item APPENDED <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove"></i>
                                </a>`;

const collection = document.querySelector(".collection");

collection.appendChild(listNewElement);

// console.log(listNewElement, " listNewElement");

// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text node
newHeading.appendChild(document.createTextNode("Task List"));

// // Get the old heading
const oldHeading = document.getElementById("task-title");
// // get Parent element
const cardAction = document.querySelector(".card-action");

// // Replace
cardAction.replaceChild(newHeading, oldHeading);

//Attributes Methods
let valTest;
valTest = linkTwo.getAttribute("href");
valTest = linkTwo.setAttribute("href", "http://google.com");
linkTwo.setAttribute("title", "Google");
valTest = linkTwo.hasAttribute("title"); //true
valTest = linkTwo.hasAttribute("id"); //false
linkTwo.removeAttribute("title");

//Javascript Engine
/*

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”. For example:

V8 – in Chrome, Opera and Edge.
SpiderMonkey – in Firefox.
…There are other codenames like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.

*/

//Event Listner