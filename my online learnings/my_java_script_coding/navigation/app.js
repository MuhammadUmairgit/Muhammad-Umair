const button = document.querySelector("#li");
const lii = document.querySelectorAll(".li");
const main = document.querySelector("#mainn");

button.addEventListener("submit", navigationHandler);

function navigationHandler(event){
    event.preventDefault();
    if(confirm("Are You Sure?")) {
        main.style.display = "block";
    }
    else {
        main.style.display = "none";
    }
}
























li.addEventListner("click",hoverNavigation)

function hoverNavigation (event) { 

    event.preventDefault();
    lii.style.display = "none";






    // if () {
    //     document.getElementsByClassName("li").style.display = "block";
    // }
    // else () {
    //     document.getElementsByClassName("li").style.display = "none";
    // }
}