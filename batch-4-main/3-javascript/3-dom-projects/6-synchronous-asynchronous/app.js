// Syncronous line of code step by step
// console.log("html css");
// // asdasdasd; //you will get the error
// console.log("javascript");
// console.log("react");
// console.log("react native");

//we have to wait in asynchronous programming

// console.log("html css");
// setTimeout(function () {
//   asdasdasdasdasd;
// }, 0);
// console.log("javascript");
// console.log("react");
// console.log("react native");

//set Timeout asyncronous function in javascript

//is javascript is asynchronous by default ?
//no

//Thread
//Javascript is Single Thread
//ek waqt me ek kam bs

//Javascript is not multi thread langauge but we have some methods for performing multi threading tasks

//how

//browser understand only binrary langauge like 0101010101010101010 not javascript

// we have compilers for executing our javascript language like v8 engine
//every browser have own compiler like chrome have v8 engine, firefox have spidermonkey, ie use chakra

//event loop

// first line go to call stack -> (first in & last out)
//if we have we api method it will go to web api section then callback queue then we have event loop so it will check
//if our callstack is free then it will go to callback

//how we can convert our normal syncrhronous code to asynchronous
//we have three methdos for that

// 1-Callback (Web Api Callback)
// 2-Promise
// 3- Async Await

// 1- Callback

// const muzammil = "muzammil";
// console.log(muzammil);

// // settimeout is callback
// setTimeout(function () {
//   asdasdasdasd;
// }, 1000);

// const musaddiq = "musaddiq";
// console.log(musaddiq);

//Promise (Web Api)

const doSomeThing = new Promise(function (resolve, reject) {
  const success = "working1111";
  if (success == "working") {
    resolve("your code is resolved");
  } else {
    reject("this error occured");
  }
});

//resolve wali chiz ayegi then me
//reject wali chiz ayegi catch me

doSomeThing
  .then(function (resolve) {
    console.log(resolve, "resolve");
  })
  .catch(function (reject) {
    console.log(reject, "reject");
  });

//fetch is built in method in windows which is using promise by default

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (resolve) {
    return resolve.json();
  })
  //chaining in promise
  .then(function (resolve) {
    // console.log(resolve);
  })
  .catch(function (reject) {
    console.log(reject);
  });

//one question for promise
// let promise = Promise.resolve(); //wait
// promise.then(() => alert("promise done!")); //wait
// alert("code finished"); // this alert shows first

const getTodosData = function () {
  //you are returning the promise
  return (
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function (resolve) {
        return resolve.json();
      })
      //chaining in promise
      .then(function (resolve) {
        return resolve;
      })
      .catch(function (reject) {
        console.log(reject);
      })
  );
};

//Async Await (you can handle the returned promise)

const doSomethingWithData = async function () {
  //without await it will show you Promise {<pending>}
  const data = await getTodosData(); //because this is also returned promise
  // console.log(data, "data");
  if (data) {
    //if data exists
    data.forEach((singleItem) => {
      // console.log(singleItem);
    });
  }
};

doSomethingWithData();

//Types of Promise

// Promise.all
// Promise.allSettled
// Promise.race
// Promise.any

//Promise all
//i will wait for all promises and if any one of promise is reject it will reject the whole promise
Promise.all([
  new Promise(function (resolve) {
    setTimeout(() => resolve(1), 3000);
  }), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(function (resolve) {
  // alert(resolve);
}); // 1,2,3 when promises are ready: each promise contributes an array member

// any promise is reject in promise all

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // Error: Whoops!

//Promise.allSettled
//it will not reject the whole promise if anyone promise is rejected

Promise.allSettled([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
])
  .then((resolve) => console.log(resolve))
  .catch(alert); // Error: Whoops!

//Promise.race
//it will resolve only first promise and not reject other promises

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

//Promise.any
//it will resolve first promise and reject other promises

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Whoops!")), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// JSON VS XML
// Both are format and use send & recieve data asyncronusly

// JSON Example
// {
//   "employees":[
//       { "firstName":"John", "lastName":"Doe" },
//       { "firstName":"Anna", "lastName":"Smith" },
//       { "firstName":"Peter", "lastName":"Jones" }
//   ]
// }

// XML Example
{
  /* <employees>
  <employee>
    <firstName>John</firstName> <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName> <lastName>Smith</lastName>
  </employee>
  <employee>
    <firstName>Peter</firstName> <lastName>Jones</lastName>
  </employee>
</employees> */
}

// AJAX STANDS FOR Asynchronous Javascript AND Xml
// Set of Web Technologies
// Send & Receive Data asynchronously
// Does not interfere with the current
// Json has replaced XML for the most part

//Ajax Features

// make async requests in the background
// no page reload/refersh
// fetch Data
// Very Intractive
// Display The Data or Append the Data

//API
// Application programming interface

//get data from url
//send data from url

// Popular tools for ajax

// Fetch Api
// Axios
// Superaragent
// JQuery
// Node Http
