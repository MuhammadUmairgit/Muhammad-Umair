const AllButtons = document.querySelectorAll(".btn");
const screenInput = document.querySelector(".screen");
const clearBtn = document.querySelector(".btn-clear");
const equalBtn = document.querySelector(".btn-equal");

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
  screenInput.value = 0;
});

// eval function in javascript

equalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const currentValue = screenInput.value;
  if (onlyLetters(currentValue)) {
    alert("invalid input");
  } else {
    screenInput.value = eval(currentValue);
  }
});

screenInput.addEventListener("keyup", function (event) {
  const currentElement = event.target;
  if (onlyLetters(currentElement.value)) {
    currentElement.value = "";
  }
});

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}
