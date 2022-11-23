// alert('working');
// DOM stands for document object model
// go to console and type document
//document.querySelector('h1').innerText= "Muzammil Rafay"

//you can store information in variables

// DATAYPES
// there are two data types
// 1-primitive type
// 2-reference type / object type

//REFERENCE TYPE
// Accessed by reference Objects that are stored
// on the heap a pointer to a location in memory.

var store = ["one", "two", "three", 121, 121.124, null]; //array
var store = {
  a: 1,
  b: 2,
  c: 3,
}; //object literal / object

// console.log(store, " ...");
// console.log(typeof store, " ...");

//Primitive Type Variables
//store directly in the location the variable accesses stored on the stack.

var store = "something"; //string = text
var store = "something"; //string = text
var store = 12345; // Number = number
var store = true; // Boolean // 0 = false, 1 = true
var store = false; // boolean
var store = null; // null (khali hai)
var store = undefined; // undefined
var store = Symbol("values of symbol"); //symbol

// console.log(store, " ...");
// console.log(typeof store, " ...");

let muzammil_marks = 100;
let musaddiq_marks = muzammil_marks;

musaddiq_marks = 90;
// console.log(musaddiq_marks) //90
// console.log(muzammil_marks); //100

// OBJECT
let info = {
  name: "Muzammil Rafay",
  designation: "Senoir Software Engineer",
};

let info2 = info; //create reference for info variable not a new variable
// info2 = {...info}; //spread operator
info2.name = "Musaddiq";

// console.log(info.name); //Musaddiq
// console.log(info2.name); //Musaddiq

//Arr

let arr1 = ["one", "two"];
let arr2 = arr1;
// arr2 = [...arr1]; //spread operator
arr2.push("third");

// console.log(arr1); // ['one', 'two', 'third']
// console.log(arr2); // ['one', 'two', 'third']

//There are three types of variables
// 1-let
// 2-const
// 3-var

// {} = scope

// function name(){
// }

//let is working only inside of the scope
{
  let qavi_var = "qavi";
  // console.log(qavi_var); //qavi;
}
// console.log(qavi_var); //undefined;

//you cannot change the constant variable value and working only inside of the scope
const coachingName = "Squad Coders Dev";
// coachingName = 'Dev'; //error

//you can access var variable from everywhere like inside of the scope and outside of the scope.
{
  var headphonename = "sony";
}
// console.log(headphonename) //sony;

//2nd example
{
  var headphonename = "sony";
  // console.log(headphonename) //sony;
}

// javascript is case sensitive

//This means that language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters

var some = "some";
var Some = "some2";

// console.log(some);
// console.log(Some);

//naming of variables
// letters,
// underscore,
// camelcase,
// pascal case

let php_laravel_awesome; //underscore
let phpLaravelAwesomeTwo; //camel cases
let PhpLaravelAwesomeThree; //pascal cases

//Type Conversion
var testing_variable = "this is a text or string";
testing_variable = new String("this is a string"); //val is over write
testing_variable = new String(5655); //number
testing_variable = new String(true); //boolean
testing_variable = new String(new Date()); //boolean
// testing_variable = 1;

let someVariable = 1;
testing_variable = someVariable.toString();
testing_variable = (1).toString();
testing_variable = "asad".toUpperCase();

//Number

testing_variable = new Number("2");
testing_variable = new Number(true); // 1
testing_variable = new Number(false); // 0
testing_variable = new Number(null); // 0
testing_variable = new Number("hello"); // Nan = not a number
testing_variable = new Number([1, 2, 3, 4]); // Nan not a number

testing_variable = parseInt("234"); //
testing_variable = parseFloat("2340.20"); //with decimal

testing_variable = new Boolean(1);
// Boolean { true }
testing_variable = new Boolean(0);
// Boolean { false }

testing_variable = {
  name: "Muzammil",
  designation: "Senoir Developer",
  companyName: "Koderlabs",
};

// console.table(testing_variable);
// console.warn(testing_variable);
// console.info(testing_variable);
// console.error(testing_variable);

// you can use arthmetic operators in javascript

testing_variable = 5 + 5;
testing_variable = 5 - 5;
testing_variable = 5 / 5;
testing_variable = 5 % 5;
testing_variable = 5 * 5;

//Math Object

testing_variable = Math.PI; //3.141592653589793
testing_variable = Math.E;
//The Math.E property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.
testing_variable = Math.round(2.4);

// The Math.floor() function returns the largest integer less than or equal to a given number.
testing_variable = Math.pow(8, 4); // 8 * 8 * 8 * 8
testing_variable = Math.min(2, 33, 4, 1, 0);
testing_variable = Math.max(2, 33, 100, 4, 1, 0);
testing_variable = Math.random() * 20 + 1;

// testing_variable = Math.floor(2.4);

/*==================================
=            math floor            =
==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3

/*=====  End of math floor  ======*/

// console.log(testing_variable);
// console.log(typeof testing_variable, " type");

//String Concatination

let firstName = "Muzammil";
let lastName = "Rafay";

let fullName = firstName + " " + lastName;

//single quote ''
//double quote ""

// let testString =
//   "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24";
let testString =
  "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24";

// \n = line break
testString =
  "Hello, World my name is 'Muzammil Mustaqeem and my age 'is 24 \n This is awesome \n we are creating the space";

// console.log(testString);

testString =
  "Hello, World my name is '" +
  fullName +
  " and my age 'is 24 \n This is awesome \n we are creating the space";

// console.log(testString);
// console.log(firstName, " firstName");
// console.log(lastName, " lastName");
// console.log(fullName);

// Template Literal

//  `` = back tag
// interpolation = ${}

testString = `Hello, World my name is '${fullName} and my age "is 24 
this is awesome
we are creating the space
`;

// console.log(
//   testString.concat(" new thing", " one more thing", " one more thing")
// );

// testString.toLowerCase();
// testString.toUpperCase();
let testingVar = testString.replace("Muzammil Rafay", "Hamdan Raza");

//check exist text
testingVar = testString.includes("World my name is"); //boolean

// console.log(testingVar);

let deliveryCharges = 0;
// let productName = "Briyani";
let productName = "Cooldrink";
let customerLocation = "north karachi";
let conditionLocation = "north karachi";

//agar
if (productName == "Briyani") {
  //condition
  deliveryCharges += 50;
} else {
  deliveryCharges += 20;
}

if (customerLocation == conditionLocation) {
  deliveryCharges += 100;
}

// console.log(deliveryCharges);

//Array Methods

const fruits = ["Mango", "Banana", "Apple"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits.length);
// console.log(fruits.push("Grapes")); //add new value at the end of array

const mix = new Array(
  11,
  22, //number
  "stirng",
  true, //bolean
  false, //bolean
  null,
  undefined,
  ["working", "working2"], //array
  { a: 1, b: 2, c: 3 } //object literal
); //string = text

let mix2 = new Array(
  {
    name: "muzammil",
    email: "muzammil.rafay@gmail.com",
    status: "Active",
  },
  {
    name: "musaddiq",
    email: "musaddiq@gmail.com",
    status: "Active",
  },
  {
    name: "azam",
    email: "azam@gmail.com",
    status: "Deactive",
  }
); //string = text

// console.log(mix2);
// console.log(Array.isArray(mix2));

const numbers = [22, 60, 10, 88, 99]; //numbers
// numbers.push(2000); //Add on the end of array
// numbers.unshift(9999); //Add on the start of array
// numbers.pop(); //remove array from end
// numbers.shift(); //remove array from start
// numbers.splice(1, 1); //remove from array
// numbers.splice(1, 3); //remove from array
// console.log(numbers);
// numbers.reverse();
// console.log(numbers.sort());
numbers.sort(function (x, y) {
  return x - y;
  //ascending
});

numbers.sort(function (x, y) {
  return y - x;
  //descending
});

// const findNumber = numbers.find(function (singleNumber) {
//   return singleNumber == 60;
// });

// const findArr = mix2.find(function (singleArray) {
//   return singleArray.name == "azam";
// }); //single value or object

const findArr = mix2.filter(function (singleArray) {
  return singleArray.status == "Active";
}); //return array

const findArr2 = mix2.map(function (singleArray) {
  if (singleArray.name != "azam") {
    return {
      fullName: singleArray.name,
      emailTwo: singleArray.email,
    };
  }
}); //return array

// [
//   {
//     fullName: "aaaa",
//     emailTwo: "bbbbb",
//   },
// ];

// console.log(numbers);
// console.log(findArr);

//loop

for (let index = 0; index < numbers.length; index++) {
  // console.log(index);
  const element = numbers[index];
  // console.log(element);
}

let valDate;
const today = new Date();
// let birthday = new Date("9-10-1981"); // Month - Date - Year
// birthday = new Date("November 27 1996"); // Month Date Year
// birthday = new Date("11/27/1996"); // Month Date Year

// console.log(birthday);
// console.log(today);

valDate = today.getMonth() + 1;
valDate = today.getFullYear();
valDate = today.getMinutes();
valDate = today.getHours();
valDate = today.getSeconds();
valDate = today.getMilliseconds();
valDate = today.getTime();
// console.log(valDate);

today.setMonth(1); // -1
today.setDate(2); // -1
today.setFullYear(1985);
today.setHours(3);
today.setMinutes(22);
today.setSeconds(25);

// console.log(today, "  today");

// COMPARISON

// Comparison operators are used in logical statements to
// determine equality or difference between variables or values.

const conditionVariableChecking = "8";

// == equal to

//agar اگر
// if (false) {
if (conditionVariableChecking == 8) {
  // console.log("condition is working");
}
//warna ورنہ
else {
  // console.log("condition is not working");
}

// === three equal to / check type also

// console.log(typeof conditionVariableChecking); //string
// console.log(typeof 8); //number

if (conditionVariableChecking === 8) {
  // console.log("2nd condition is working");
} else {
  // console.log("2nd condition is not working");
}

//not equal to = !=

const mobile = "iphone";

if (mobile != "china") {
  // console.log("mobile is not from china");
}

//not equal !== / so it will check the both type
const mobiletwo = 1;
if (mobiletwo !== "1") {
  // console.log("mobile two is working");
}

// GREATER OR LESS THAN
// > greater than
// < less than
// example of crocodile mouth
let id = 100;

if (id < 40) {
  //id less than 400 se
  // console.log("CORRECT");
} else {
  // console.log("INCORRECT");
}

if (id > 40) {
  //id less than 400 se
  // console.log("CORRECT");
} else {
  // console.log("INCORRECT");
}

// LOGICAL OPERATORS
// && AND = both condition should be true
// || OR = one condition should be true

let laptop = "hp";
let ram = "4gb";

if (laptop == "hp" && ram == "8gb") {
  // console.log("laptop condition is true");
} else {
  // console.log("laptop condition is false");
}

if (laptop == "hp" || laptop == "dell") {
  // console.log("laptop condition is true");
} else {
  // console.log("laptop condition is false");
}

// TERNARY OPERATOR
//single if or else
// console.log(
// id === 100 ? "CORRECT Ternary Operator" : "INCORRECT Ternary Operator"
// ); //single line

//condition ? // if it is true : //if it is false ;

//multiple if with else if
//id = 100

if (id == 101) {
  // console.log("101 is true");
} else if (id == 100) {
  // console.log("100 is true");
} else if (id == 102) {
  // console.log("102 is true");
} else if (id == 103) {
  // console.log("103 is true");
} else if (id == 104) {
  // console.log("104 is true");
} else if (id == 105) {
  // console.log("105 is true");
} else if (id == 106) {
  // console.log("106 is true");
} else if (id == 107) {
  // console.log("107 is true");
} else {
  // console.log("not match any conditions");
}

// you can define conditions without braces
if (id == 100)
  //its mean id have something in variable
  // console.log("CORRECT");
  // else console.log("INCORRECT");

  // let musaddiq;
  // console.log(musaddiq, "musaddiq");

  // if (!musaddiq) console.log("CORRECT Musaddiq variable has a value");
  // else console.log("INCORRECT Musaddiq variable has not a value ");

  //switch statement
  // const color2 = "blue";
  // switch (color2) {
  //   case "red":
  //     // console.log("color is red");
  //     break;
  //   case "blue":
  //     // console.log("color is blue");
  //     break;
  //   default:
  //     // console.log("color is not blue nor red");
  // }

  // if(color2 == 'red'){
  //   console.log("color is red");
  // }else if(color2 == 'blue'){
  //   console.log('color is blue')
  // }else{
  //   console.log("color is not blue nor red");
  // }

  //second example
  // let day;

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

// console.log("Today is " + day  + '\n ');
// console.log(`Today is ${day}`);

//Functions

//A function is simply a “chunk” of code that you can use over and over again, rather than writing it out multiple times. Functions enable programmers to break down or decompose a problem into smaller chunks, each of which performs a particular task.

//declare function
function anyname() {
  console.log("anyname function is working");
}

// function call
anyname();

//function parameters or arguement

// function fullname(firstName, lastName) {
//   console.log(firstName, " firstname");
//   console.log(lastName, " lastName");
// }

// fullname("Muhammad", "Muzammil");

//return in functions

function fullname(firstName, lastName) {
  //template leteral
  return `Your Full name is ${firstName} ${lastName}`;
}

// const returrenedValue = fullname("Muhammad", "Muzammil");
// console.log(returrenedValue);
console.log(fullname("Muhammad", "Muzammil"));

//set default parameter

function fullname(firstName = "John", lastName = "Doe") {
  //template leteral
  return `Your Full name is ${firstName} ${lastName}`;
}

// console.log(fullname());
// console.log(fullname("Muhammad", "Muzammil"));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

let add2 = (function (firstParam = "", SecondParam = "") {
  // console.log("function is declared with callback");
  // console.log(`firstParam is ${firstParam}`);
  // console.log(`SecondParam is ${SecondParam}`);
})("1st", "2nd");

const todo = {
  //object literals
  add: function () {
    // console.log("Add todo..");
  },
  edit: function (id) {
    //parameter
    // console.log(`Edit todo ${id}`);
  },
  // working:true,
  // working2:'working2',
};

todo.add();
todo.edit(29);

//why use closures

//global variables
let a = 4;
function myFunction() {
  return a * a;
}

//local variables
function myFunction() {
  let a = 4;
  return a * a;
}

//counter function

// Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

// The counter should now be 3

// issue : counter = 100 then call add() it will show 101 in counter variable
//we can resolve this issue by Closures function

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3
//issue : resolve

//look at window object

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// window.alert("Hello World");

// console.log(window, "window");

// Prompt
// const input = prompt();
// console.log(input, "input");

// Confirm
// if (confirm("Are you sure")) {
//   // console.log("YES");
// } else {
//   // console.log("NO");
// }
let val89899;

// // Outter height and width
val89899 = window.outerHeight;
val89899 = window.outerWidth;

// // Inner height and width
val89899 = window.innerHeight;
val89899 = window.innerWidth;

// // Scroll points
val89899 = window.scrollY;
val89899 = window.scrollX;

// // // Location Object
val89899 = window.location;

//navigator = browser

if (window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position, "position");
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

//   // Location Object
val89899 = window.location;
val89899 = window.location.hostname;
val89899 = window.location.port;
val89899 = window.location.href;
val89899 = window.location.search;

// // Redirect
// window.location.href = "http://google.com";
// //Reload

// setTimeout(function () {
//   window.location.reload();
// }, 3000); //three seconds

// window.history.go(-2);
// val89899 = window.history.length;

// // Navigator Object
// val89899 = window.navigator;
// val89899 = window.navigator.appName;
// val89899 = window.navigator.appVersion;
// val89899 = window.navigator.userAgent;
// val89899 = window.navigator.platform;
// val89899 = window.navigator.vendor;
// val89899 = window.navigator.language;

console.log(val89899);
