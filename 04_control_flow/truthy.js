// const userEmail = "h@hitest.com"
// if(userEmail){
//     console.log("got user email");
// } else {
//     console.log("dont have user email");
// }

// falsy values
// false, 0 , -0 ,  BigInt 0n, "", null, undefined, NaN

// truthy values
// true , 1,"0", 'false' , " ", [],{}, function(){}, 


// if email got is in array []
// if (userEmail.length ===0){
//     console.log("array is empty");
// }

// if email got is empty obj {}
// const emptyObj = {}
// if (Object.keys(emptyObj).length===0){
// console.log("Object is empty");
// }


// Nullish Coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// var1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);