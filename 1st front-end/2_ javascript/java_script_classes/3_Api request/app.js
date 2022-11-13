const button = document.querySelector("#button2");
const costomers = document.querySelector("#customers");

button.addEventListener("click", buttonHandler);
function buttonHandler(event) {
  event.preventDefault();
  fetch("customers.json")
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
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
