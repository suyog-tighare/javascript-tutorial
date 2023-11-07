const myArr = [1,2,3]

// const myTotal = myArr.reduce(function(accumulator,currentValue){
//     console.log(`acc : ${accumulator} and curr val : ${currentValue}`); 
//     return accumulator + currentValue
// }, 0 )

const myTotal = myArr.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "python course",
        price : 699
    },
    {
        itemName : "date sci course",
        price : 1299
    }
    
]
const addAll = shoppingCart.reduce((acc , item,) => acc + item.price , 0)
console.log(addAll);