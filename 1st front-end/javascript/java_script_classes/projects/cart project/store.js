const btn = document.querySelectorAll(".btn");
const listElement = document.querySelectorAll(".cart-items");




btn.addEventListener("submit", taskFormHandler);

function taskFormHandler (event) {
    if (click){
        document.querySelector("#cart-row").style.display = "block";
    }
    else {
        document.querySelector("#cart-row").style.display = "none";
    }
}
