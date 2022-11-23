//DOM UI VARIABLES
const button = document.querySelector("#button");
const output = document.querySelector("#output");

button.addEventListener("click", buttonHandler);

function buttonHandler(event) {
  event.preventDefault();
  //get data asynchronously from url
  /*
  fetch("data.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      console.log(data, "data");
    })
    .catch(function (error) {
      console.error(error);
    });
  */
  //create an xhr object
  const xhr = new XMLHttpRequest();
  //open
  xhr.open("GET", "data.txt", true);

  //optional - use for showing the spinner or loader
  xhr.onprogress = function () {
    // console.log(xhr.readyState, "xhr.readyState");
  };

  xhr.onload = function () {
    // console.log(xhr.readyState, "xhr.readyState");
    // console.log(this.status, "this.status");
    if (this.status == 200) {
      output.innerHTML = this.responseText;
    }
  };

  xhr.onerror = function (error) {
    console.error(error, "Request error...");
  };

  xhr.send();
}

// HTTP Statuses
// 200: "OK"
// 201: "OK"
// 403: "Forbidden"
// 500: "internal error"
// 404: "Not Found"
// 304: "Not Modified"

// in xml request

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
