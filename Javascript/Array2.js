let morvel_heros=["Ironman","thor","Spiderman"]
console.log(morvel_heros);
let dc_heros=["superman","flash","batman"]
console.log(dc_heros);
// morvel_heros.push(dc_heros) //push method insert one array to another array
// console.log(morvel_heros);
// console.log(morvel_heros[3][2]);

let all_heros=morvel_heros.concat(dc_heros)
console.log(all_heros);

console.log(Array.isArray("Anjali"));
console.log(Array.of("Anjali"));//create Array

console.log(Array.from("Anjali"));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));