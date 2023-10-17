// singleton or construction method

// const tinderUser = new Object()

const tinderUser = {}

 tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname :{
//         userFullName : {
//         firstName : "hitesh",
//         lastName : "chowdhury"
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firstName);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// const obj3 ={obj1,obj2}
// Assigning value
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

// Using spread method
// const obj3 ={...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
    email: "sjnfwaf@gmail.com" 
   },
    {
        id : 2,
    email: "fsfss@gmail.com" 
   }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));