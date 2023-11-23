//Array declaration

const myArr=[1,2,3,4,5]
 console.log(myArr);
// console.log(myArr[2]); 

let arr=new Array('A','B','C');
//console.log(arr);

let arrStr=["abc","pqr","xyz"]
//console.log(arrStr);

//Methods
//console.log(myArr.length);
console.log(myArr.concat(arr));
//myArr.pop(5);
//console.log(myArr);

arr.pop()   // No need to give argument, it removes last element
//console.log(arr);

// console.log(myArr.slice(1,4));
// console.log(myArr);

let newarr=myArr.splice(1,3)
// console.log(newarr);
// console.log(myArr);

console.log(arr.unshift(6));  //element inserted at first index
console.log(arr);
console.log(arr.shift());
console.log(arr);