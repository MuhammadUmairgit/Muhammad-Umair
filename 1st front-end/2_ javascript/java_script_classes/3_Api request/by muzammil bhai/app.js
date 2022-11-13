//DOM UI VARIABLES
const button = document.querySelector("#button2");
const customers = document.querySelector("#customers");

//listeners
button.addEventListener("click", buttonHandler);
function buttonHandler(event) {
  event.preventDefault(); //default functionaltiy ko rukdo
  //create ajax request from xhr
  //createAjaxRequestFromXhr();

  //by default request method is get in fetch api
  fetch("customers.json")
    .then(function (data) {
      //convert data to json
      return data.json();
    })
    .then(function (data) {
      // console.log(data, "data");
      let output = "";
      if (data.length > 0) {
        data.forEach(function (singleData) {
          output += `<ul>
                <li>ID: ${singleData.id}</li>
                <li>Name: ${singleData.name}</li>
                <li>Company:  ${singleData.company}</li>
                <li>Phone:  ${singleData.phone}</li>
            </ul>`;
        });
      }
      customers.innerHTML = output;
    })
    .catch(function (error) {
      console.error(error);
    });
}

// function createAjaxRequestFromXhr() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "customers.json", true);
//   xhr.onload = function () {
//     if (this.status == 200) {
//       //   console.log(this.responseText, "this.responseText");
//       //   console.log(typeof this.responseText, "this.responseText");

//       //convert string to JSON

//       const data = JSON.parse(this.responseText);
//       //   console.log(typeof data, "data");

//       let output = "";
//       if (data.length > 0) {
//         data.forEach(function (singleData) {
//           output += `<ul>
//                 <li>ID: ${singleData.id}</li>
//                 <li>Name: ${singleData.name}</li>
//                 <li>Company:  ${singleData.company}</li>
//                 <li>Phone:  ${singleData.phone}</li>
//             </ul>`;
//         });
//       }
//       customers.innerHTML = output;
//     }
//   };
//   xhr.onerror = function (error) {
//     console.error(error);
//   };
//   xhr.send();
// }

// /*
// REQUEST METHODS

// GET = get data
// POST = store data
// PUT = update data
// PATCH = partially update date
// DELETE = delete data

// */
