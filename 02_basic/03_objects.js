// singleton

// object literals

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Arif",
    "full name": "Arif khan",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email : "arif@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "Arif@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Arif@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting())