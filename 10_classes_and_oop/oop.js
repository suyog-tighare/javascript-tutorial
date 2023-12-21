// Object literal
const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        //console.log("got user details from database");
        // console.log(`Username:(this.username)`);
        // console.log(this);
    }
}
// console.log(user.username);

// console.log(user.getUserDetails());

//constructor - creates new context

function User (username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}
const userOne = new User("hitesh",12,true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne);
console.log(userTwo);