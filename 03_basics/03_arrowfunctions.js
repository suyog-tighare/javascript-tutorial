// const user = {
//     username : "hitesh",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function chai (){
//     let username = "hitesh";
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "hitesh"
//     console.log(this);
// }
// chai()
    
// const addTwo = (num1,num2 ) => {
// const addTwo = (num1,num2 ) => ({username:"hitesh"})
    // return num1+num2
// }

// console.log(addTwo(3,4));

// const myArray = [2,3,6,2,8] 
// myArray.forEach()

// Immediately Invoked Function Expression(IIFE)
 //Syntax

//  (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();

  ///////////////////// apply //////

// (function chai (){
//     console.log(`DB Connected`);
// }) ();

( (name)=>{
console.log(`DB Connected 2 ${name}`);
}) ('hitesh')


  