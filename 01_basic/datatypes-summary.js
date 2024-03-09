// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345679875657095657n



// Refrence (Non primitive)

//  array, Objects, Functions

const heros = ["salman", "sharukh", "ajay"];
let myObj = {
    name: "Arif",
    age: 22,
}

const myFunctions = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://tc39.es/ecma262/2023/multipage/ecmascript-language-expressions.html#sec-typeof-operator



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename = "Knowledge Hub"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Arif@google.com"

console.log(userOne.email);
console.log(userTwo.email);
