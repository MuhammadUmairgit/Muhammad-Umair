//Class Based Library

// class EasyHttp {
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     });
//   }
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         headers: {
//           "Content-type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(data),
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error));
//     });
//   }
//   put(url, data) {
//     fetch(url, {
//       headers: {
//         "Content-type": "application/json",
//       },
//       method: "PUT",
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   }
//   patch(url, data) {
//     fetch(url, {
//       headers: {
//         "Content-type": "application/json",
//       },
//       method: "PATCH",
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   }
//   delete(url) {
//     fetch(url, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   }
// }

//Function Based Library

function EasyHttp() {}

EasyHttp.prototype.get = function (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

EasyHttp.prototype.post = function (url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

EasyHttp.prototype.put = function (url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

EasyHttp.prototype.patch = function (url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        "Content-type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

EasyHttp.prototype.delete = function (url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const easyHttp = EasyHttp();
// easyHttp.__proto__.get();
// easyHttp.get();
