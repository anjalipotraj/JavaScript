function myFunction(){
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A"); 
    console.log("L");    
    console.log("I");
}


//myFunction()    //Fun calling

// function add(num1,num2)
// {
//     console.log(num1+num2)
// }
//add(3,6)

function add(num1,num2)
{
    let result=num1+num2
    return result
}

const result=add(7,2)
console.log(result);

function loginUser(user)
{
    if(user===undefined)
    {
        console.log("Please enter user name");
        return
    }
    //return '${user} just logged in '
}
username=loginUser("Anjali")
console.log(username);
loginUser();