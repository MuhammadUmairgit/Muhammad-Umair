/*

in javascript everything is object

*/

//Object Literals
const muzammil = {
  name: "Muzammil Rafay",
  age: 25,
};

// console.log(muzammil);

//create object from function

function personOne() {
  //this refer to current function
  this.name = "Muzammil Rafay";
  this.age = 25;
  this.birthday = "27-11-1996";
}

// console.log(new personOne());

//constructor functions

// new personOne(); = you are intializing the function
function PersonTwo(name, age, birthday) {
  //what is this ?
  // current instance
  this.name = name;
  this.age = age;
  this.birthday = new Date(birthday);

  this.calculateAge = function () {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    //absolute value
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const person = new PersonTwo("Muzammil", 1212121, "1996-11-27");

// console.log(person, "person");
// console.log(person.calculateAge(), "calculateAge");

//OOP stands for object oriented programming

//Create Object from class

class PersonClass {
  constructor(name, age) {
    //this = current class
    this.name = name; //properties
    this.age = age; //properties
  }
  hello() {
    //methods
    return "hello";
  }
  checkName() {
    //methods
    return this.name;
  }
}

// PersonClass.hello();wrong

const personClass = new PersonClass("Muzammil", 25);
// console.log(personClass); //initilize the class

// console.log(personClass.hello());
// console.log(personClass.checkName());

//static methods in class

//when you don't want to initialize the class so you can use static methods
class PersonThreeFour {
  static genericHello() {
    return "Hello Checking";
  }
}

// console.log(PersonThreeFour.genericHello()); //you are getting the value with out intialize

//Four Pillars In OOP

/*
Inheritance = Wirasat
Abstraction = Chupa wa
Polymorphism = talk with multiple
Encapsulation = 


in javascript one more thing prototype inheritance
*/

// Inheritance Wirasat وراثت

class Parent {
  motherLanguage() {
    return "Urdu";
  }
}
const parentVar = new Parent();
// console.log(parentVar.motherLanguage());

// Children Class
class Children extends Parent {}

const childrenVar = new Children();
// console.log(childrenVar.motherLanguage());

// PROTOTYPE INHERITANCE
//Object.prototype
//Person.prototype

const heros = [];

//if you check in your console you have length method and you have prototype method and in that methods you have alot functions like push

// this is because javascript is assigning some builtin methods in to your variable according to datatype like string,array,object

// heros
// []length: 0[[Prototype]]: Array(1)0: "bbb"at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 1map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

function PersonProto(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

PersonProto.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const personProto = new PersonProto("muzammil", "rafay", "1996-11-27");

// console.log(personProto, "personProto");
console.log(personProto.__proto__.calculateAge(), "personProto");
console.log(personProto.calculateAge(), "personProto");

//Accessing parent function method in prototype functions

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// {firstName:"Muzammil",lastName:"lastName"}
Person2.prototype.greeting = function () {
  return `Hello there my name is ${this.firstName} ${this.lastName}`;
};

// const person2 = new Person2("Muzammil", "Mustaqeem");
// console.log(person2.greeting());

//we need to inherit parent function in to children function with prototype methods

function Customer(firstName, lastName, phone, membership) {
  Person2.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

Customer.prototype = Object.create(Person2.prototype);

const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1, "customer1");
console.log(customer1.greeting(), "customer1.greeting()");
