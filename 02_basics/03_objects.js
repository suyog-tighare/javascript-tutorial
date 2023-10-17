// singleton
 // Object.create

// object literals

const mySym = Symbol("key1")

const JSuser ={
    name : "Hitesh",
    "full name" : "Hitesh Chowdhury",
    [mySym] : "key1",
    age : 22,
    location:"jaipur",
    email :"hitesh@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["mon","sat"]
}
console.log(JSuser);

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["full name"])
console.log(JSuser[mySym])

JSuser.email= "hitesh@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email="hiteshmikrosoft@gmail.com"
console.log(JSuser);

// Greeting an user

JSuser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JSuser.greeting());

JSuser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(JSuser.greetingTwo());