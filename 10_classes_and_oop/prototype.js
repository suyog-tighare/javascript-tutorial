// let myName = "hitesh     "
let myChannel = "chai     "

// console.log(myName.trim().length); -->low iq wala method
// console.log(myChannel.trueLength);

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello`);
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyhitesh()
// heroPower.heyhitesh()

//inheritance

const user = {
    name : "chai",
    email : "chai.google.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

// Teacher.__proto__ = User

//modern syntax

// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()