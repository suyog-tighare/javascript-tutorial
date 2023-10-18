// function sayMyName(){
//     console.log("ok");
// }
// sayMyName()

// function addNumbers (number1,number2){
// console.log(number1+number2);
// }
// const result = addNumbers(3,5)
// console.log("Result:",result)
// addNumbers(3,4)
// addNumbers("3","4")

// function addNumbers (number1,number2){
//     // let result = number1+number2
//     // return result
//     return number1+number2
//     }
//     const result = addNumbers(3,5)
//     console.log("Result:",result);

// function loginUserMessage(username="sam"){
//     if (!username){
// console.log("please enter username");
// return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateCartPrice (...num1){
   return num1
}
console.log(calculateCartPrice(2))
// but waht if more values comes?
// we will use rest operator (...num1)
console.log(calculateCartPrice(200,300,400))

const user = {
    username : "hitesh",
    price : 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

const myNewArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray);
console.log(returnSecondValue([100,1000,10000]))