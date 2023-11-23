const mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toJSON());
// console.log(typeof mydate);

//const mycreateddate=new Date(2023,2,11)
//const mycreateddate=new Date(2023,2,23,11,3)
const mycreateddate=new Date("11-23-2023")

//console.log(mycreateddate.toLocaleString());

let mytimestamp=Date.now()
//console.log(mytimestamp.toString());

let newdate=new Date();
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getMonth());

console.log('Today is ${newdate.getDay()} Date is ${newdate.getDate()} Month is ${newdate.getMonth()} ');