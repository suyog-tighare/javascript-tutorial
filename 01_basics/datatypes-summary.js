// // ****Primitive**** (copy by Value type)

// // 7 types : String, Number , Boolean , Null, undefined , Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail ;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 32646343762874238472n

// // ****Non-Primitive*** (Reference Type)

// // Arrays , Objects, Functions

// const heroes = ["shaktiman","naagraj","doga"];
// let myObj = {
//     name : "hitesh",
//     age: 22,
// }

// const myFunction= function (){
//    console.log("hello world");
// }


// console.log(typeof anotherId);
// console.log(typeof myObj);
// console.log(typeof heroes);
// console.log(typeof myFunction);
// console.log(typeof(bigNumber));
// console.log(typeof score);

// ********memory type in JS *********

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "hiteshchowdhury.com"

let anotherName = myYoutubeName
anotherName = "chai aur code"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "upi@ybl"

}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);