function easyHttp() {
  this.http = new XMLHttpRequest();
}

//second parameter is function
easyHttp.prototype.get = function (url, callback) {
  let self = this;
  self.http.open("GET", url, true);
  self.http.onload = function () {
    if (self.http.status == 200 || self.http.status == 201) {
      //1st param is response
      //2nd param is error
      callback(JSON.parse(self.http.responseText), null);
    } else {
      callback(null, "Error: " + self.http.status);
    }
  };
  self.http.send();
};

easyHttp.prototype.post = function (url, data, callback) {
  let self = this;
  self.http.open("POST", url, true);
  self.http.setRequestHeader("Content-type", "application/json");
  self.http.onload = function () {
    if (self.http.status == 200 || self.http.status == 201) {
      callback(JSON.parse(self.http.responseText), null);
    } else {
      callback(null, "Error: " + self.http.status);
    }
  };
  self.http.send(JSON.stringify(data));
};

easyHttp.prototype.put = function (url, data, callback) {
  let self = this;
  self.http.open("PUT", url, true);
  self.http.setRequestHeader("Content-type", "application/json");
  self.http.onload = function () {
    if (self.http.status == 200 || self.http.status == 201) {
      callback(JSON.parse(self.http.responseText), null);
    } else {
      callback(null, "Error: " + self.http.status);
    }
  };
  self.http.send(JSON.stringify(data));
};

easyHttp.prototype.delete = function (url, callback) {
  let self = this;
  self.http.open("DELETE", url, true);
  self.http.onload = function () {
    if (self.http.status == 200 || self.http.status == 201) {
      callback("RECORD IS DELETED", null);
    } else {
      callback(null, "Error: " + self.http.status);
    }
  };
  self.http.send();
};

const httpCustom = new easyHttp();

httpCustom.get(
  `https://jsonplaceholder.typicode.com/posts`,
  function (success, error) {
    console.log(success, "success");
    console.log(error, "error");
  }
);

httpCustom.post(
  `https://jsonplaceholder.typicode.com/posts`,
  {
    title: "Title",
    Body: "Body",
  },
  function (success, error) {
    console.log(success, "success");
    console.log(error, "error");
  }
);

httpCustom.put(
  `https://jsonplaceholder.typicode.com/posts/1`,
  {
    title: "Title",
    Body: "Body",
  },
  function (success, error) {
    console.log(success, "success");
    console.log(error, "error");
  }
);

httpCustom.delete(
  `https://jsonplaceholder.typicode.com/posts/1`,
  function (success, error) {
    console.log(success, "success");
    console.log(error, "error");
  }
);
