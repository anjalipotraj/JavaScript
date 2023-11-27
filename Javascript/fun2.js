//"..." this is rest operator or spread operator"
function myFunction(val1,...num){
    return (val1,num);
}

const result=myFunction(100,200,300,400)
console.log(result);

const User={
    username:"Anjali",
    password:"anjali@123"
}

function loginUser(obj)
{

console.log(obj.username);
console.log(obj.password);
}

loginUser(User)

//Arrray
const Arrray=[10,20,30,40,50]

function arrayFunction(getArray)
{
    return getArray[3]
}

let val=arrayFunction(Arrray)
console.log(val);