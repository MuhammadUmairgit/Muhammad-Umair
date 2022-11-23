// function (){
// }

// () => {}
// param => data //by default return is already implement

const http = new EasyHttp();

//Get Request
http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data, "data"))
  .catch((error) => console.error(error, "error"));

//POST REQUEST
http
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Custom Post 2 ASDAS",
    body: "This is a custom post 2 ASDASD",
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//PUT REQUEST
const dataTwo = {
  title: "Custom Post 2 ASDAS",
  body: "This is a custom post 2 ASDASD",
};
http
  .put("https://jsonplaceholder.typicode.com/posts/1", dataTwo)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//DELETE REQUEST
http
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//GET METHOD = RECORD GET
//POST METHOD = DATA STORE
//PUT METHOD = DATA UPDATE
//PATCH METHOD = DATA UPDATE (partialy)
//DELETE METHOD = DATA DELETE

// REST
// Representational State Transfer
// Architecture style for desiginig networked applcations
// relies on stateless, client-server protocol,almost always HTTP
// Treats server objects as resources that can be created or destroyed
// can be used by virtually any programming language
// All apis have their own rules and structures

//GET //https:someurl.com/api/users //get all users
//GET //https:someurl.com/api/users/1 //get single users
//POST //https:someurl.com/api/users //add user
//PUT //https:someurl.com/api/users/1 //update user
//DELETE //https:someurl.com/api/users/1 //delete user

// WHAT IS AN API ?
// APPLICATION Programming Interface
// Contract provided by one piece of software to another
// Structured request and response
// we just worked with an api that takes a request and responds with jokes

//SOAP

// SOAP is a messaging protocol specification for exchanging structured information
//in the implementation of web services in computer networks.
