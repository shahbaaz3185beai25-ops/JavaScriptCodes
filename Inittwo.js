/*  const prompt =require('prompt-sync')({sigint : true});
const name = prompt("What is your name? ");
console.log(`Hey there ${name}`);
const num = prompt("enter a number ");
console.log("Your number + 4 = ");
console.log(Number(num)+4;
const prompt =require('prompt-sync')({sigint : true});
let n1 = prompt("Enter first number");
let n2 = prompt("Enter second number")
function calc(n1,n2,s){
    if (s == '+'){
        console.log(n1+n2);
    }else if( s == '-'){
        console.log(n1-n2);
    }
}
calc()
let arr1 = [1,2,3,4,5];
let arr2 = [1,3,4,6,4,2,1];
let arr3 = [9,8,6] ;
console.log(arr1 , arr2 , arr3);*/
//
// 
const prompt =require('prompt-sync')({sigint : true});
let n = parseInt(prompt("Enter the size of the square (number):"));

if (n < 1) {
  console.log("Number must be at least 1.");
} else {
  let output = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      
      if (i === 1 || i === n || j === 1 || j === n) {
        output += "* ";
      } else {
        output += "  ";  
      }
    }
    output += "\n";
  }

  console.log(output);
}
//
let i,j
let row ="";
let obj ={"Name":"Shah","age":"25"};
console.log(obj);
let obj2={...obj,"age":277};
for(const key in obj2){
    let element = obj2[key];
    }
let marks ={
    h:90,
    s:40,
    shi:56,
    sh:90,
}
let obj3 ={...marks,"h":100}
console.log(marks)
console.log(obj2)
function sum(...name1){
    console.log(name1);
}