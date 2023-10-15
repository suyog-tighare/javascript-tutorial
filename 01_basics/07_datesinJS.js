// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date(2023,0,23,5,3);
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate0 = new Date()
console.log(newDate0);
console.log(newDate0.getMonth());
console.log(newDate0.getDay());

// `${newDate.getDay()} and time is ${}

newDate0.toLocaleString('default',{
    weekday : "long"
})