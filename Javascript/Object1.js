//Object Declaration Singleton using Literal

let mykey=Symbol("Key1")//Symbol

const user={
    name:"Anjali",
    "full name":"Anjali Potraj",
    age:"20",
    [mykey]:"Mykey1",
    email:"anjali@gmail.com",
    isLoggin:"false",
    loginDays:["mon","th","fir"],
}
//Accessing
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user.loginDays[1]);



//Object.freeze(user);
user.greeting=function()
{
    console.log("Hello Javascript");
}
console.log(user.greeting());

user.greeting2=function()
{
    console.log('HI This is ${this.name}');
}
console.log(user.greeting2());