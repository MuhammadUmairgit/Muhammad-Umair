const AllButtons = document.querySelectorAll(".btn");
const screenInput = document.querySelector(".screen");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");


equalBtn.addEventListener("click", function (event){
    event.preventDefault();
    screenInput.value = eval (screenInput.value)
})


if (AllButtons.length > 0) {
  AllButtons.forEach(function (singleButton) {
    singleButton.addEventListener("click", function (event) {
      event.preventDefault();
      const currentElement = event.target;
      //   const ButtonValue = currentElement.innerText;
      //   const ButtonValue = currentElement.getAttribute("data-num");
      const ButtonValue = currentElement.dataset.num;
      //   screenInput.value = screenInput.value + ButtonValue;
      screenInput.value += ButtonValue;
    });
  });
}

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  screenInput.value = "";
});

// eval function in javascript