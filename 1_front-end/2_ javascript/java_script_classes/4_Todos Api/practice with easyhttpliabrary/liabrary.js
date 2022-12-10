function EasyHttp () {}

EasyHttp.prototype.get = function (url) {
    return new Promise((resolve, reject) => {
        fetch (url)
       .then((response) => response.json())
       .then((data) => resolve(data))
       .catch((error) => reject(error)); 
    });
};

EasyHttp.prototype.post = function (url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            header: {
                "Content-type":"application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        })
        .then((response => response.json()))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
};
EasyHttp.prototype.put = function (url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            header: {
                "Content-type":"application/json",
            },
            method: "PUT",
            body: JSON.stringify(data),
        })
        .then((response => response.json()))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
};
EasyHttp.prototype.patch = function (url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            header: {
                "Content-type":"application/json",
            },
            method: "PATCH",
            body: JSON.stringify(data),
        })
        .then((response => response.json()))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
};
EasyHttp.prototype.post = function (url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "DELETE",
            body: JSON.stringify(data),
        })
        .then((response => response.json()))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
};

const easyHttp = EasyHttp();

