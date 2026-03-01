/* const prompt =require('prompt-sync')({sigint : true});
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
/*const prompt =require('prompt-sync')({sigint : true});
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
//
str = "Shah";

function reverseStringRecursive(str, index = 0) {
    
    if (index >= str.length) {
        return '';
    }
    
    return reverseStringRecursive(str, index + 1) + str[index];
}


const inputString = prompt("Enter a string to reverse:");
if (inputString !== null && inputString !== '') {
    const reversed = reverseStringRecursive(inputString);
    console.log(`Original: ${inputString}`);
    console.log(`Reversed: ${reversed}`);
    alert(`Original: ${inputString}\nReversed: ${reversed}`);
} else {
    console.log("No input provided.");*/

//
//
// Arrow function to concatenate first and last name
/*const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;*/

// Example usage:
/* let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = getFullName(firstName, lastName);
console.log("Your full name is: " + fullName); */
/*
const nums = [5, 6, 7];
const multiplied = nums.map((n, i) => n * i);
console.log(multiplied); // [0, 6, 14] 
// 
*/
const prompt = require('prompt-sync')();
let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let salary = parseFloat(prompt("Enter your salary with decimals:"))
console.log(`Name:${name} ,Age:${age} ,Salary:${salary}`);


// --- EXAMPLE 1 ---
// Input: User enters "1"
// Output: "Mon"
let d1 = prompt("Ex 1: Day Number (1-3):");
switch(d1) { 
    case "1": console.log("Example 1 Output: Mon"); break; 
    case "2": console.log("Example 2 Output: Tue"); break; 
    default: console.log("Example 1 Output: Day 3+"); 
}

// --- EXAMPLE 2 ---
// Input: User enters "red"
// Output: "Stop"
let d2 = prompt("Ex 2: Traffic Light Color (red/green):");
switch(d2) { 
    case "red": console.log("Example 2 Output: Stop"); break; 
    case "green": console.log("Example 2 Output: Go"); break; 
}

// --- EXAMPLE 3 ---
// Input: User enters "Apple"
// Output: "$2"
let d3 = prompt("Ex 3: Fruit (Apple/Banana):");
switch(d3) { 
    case "Apple": console.log("Example 3 Output: $2"); break; 
    case "Banana": console.log("Example 3 Output: $1"); break; 
}

// --- EXAMPLE 4 ---
// Input: User enters "1"
// Output: "Jan"
let d4 = prompt("Ex 4: Month Number (1-2):");
switch(d4) { 
    case "1": console.log("Example 4 Output: Jan"); break; 
    case "2": console.log("Example 4 Output: Feb"); break; 
}

// --- EXAMPLE 5 ---
// Input: User enters "3"
// Output: "Great"
let d5 = prompt("Ex 5: Star Rating (1-3):");
switch(d5) { 
    case "3": console.log("Example 5 Output: Great"); break; 
    case "1": console.log("Example 5 Output: Poor"); break; 
}

// --- EXAMPLE 6 ---
// Input: User enters "+"
// Output: 15
let d6 = prompt("Ex 6: Operator (+ or -):");
switch(d6) { 
    case "+": console.log("Example 6 Output:", 10 + 5); break; 
    case "-": console.log("Example 6 Output:", 10 - 5); break; 
}

// --- EXAMPLE 7 ---
// Input: User enters "Chrome"
// Output: "Supported"
let d7 = prompt("Ex 7: Browser Name:");
switch(d7) { 
    case "Chrome": case "Edge": console.log("Example 7 Output: Supported"); break; 
    default: console.log("Example 7 Output: Unknown"); 
}

// --- EXAMPLE 8 ---
// Input: User enters "Square"
// Output: "Side * Side"
let d8 = prompt("Ex 8: Shape (Square/Circle):");
switch(d8) { 
    case "Square": console.log("Example 8 Output: Side * Side"); break; 
    case "Circle": console.log("Example 8 Output: PI * r * r"); break; 
}

// --- EXAMPLE 9 ---
// Input: User enters "EUR"
// Output: 110
let d9 = prompt("Ex 9: Currency (EUR):");
switch(d9) { 
    case "EUR": console.log("Example 9 Output:", 100 * 1.1); break; 
}

// --- EXAMPLE 10 ---
// Input: User enters "A"
// Output: "Excellent"
let d10 = prompt("Ex 10: Grade (A/B):");
switch(d10) { 
    case "A": console.log("Example 10 Output: Excellent"); break; 
    default: console.log("Example 10 Output: Good"); 
}

// --- EXAMPLE 11 ---
// Input: User enters "1"
// Output: "Winter"
let d11 = prompt("Ex 11: Month (1, 4):");
switch(d11) { 
    case "1": console.log("Example 11 Output: Winter"); break; 
    case "4": console.log("Example 11 Output: Spring"); break; 
}

// --- EXAMPLE 12 ---
// Input: User enters "Sunday"
// Output: "Weekend"
let d12 = prompt("Ex 12: Day of Week:");
switch(d12) { 
    case "Saturday": case "Sunday": console.log("Example 12 Output: Weekend"); break; 
    default: console.log("Example 12 Output: Weekday"); 
}

// --- EXAMPLE 13 ---
// Input: User enters "S"
// Output: "Small"
let d13 = prompt("Ex 13: T-Shirt Size (S/M/L):");
switch(d13) { 
    case "S": console.log("Example 13 Output: Small"); break; 
    case "M": case "L": console.log("Example 13 Output: Large"); break; 
}

// --- EXAMPLE 14 ---
// Input: User enters "Dog"
// Output: "Woof"
let d14 = prompt("Ex 14: Animal (Dog/Cat):");
switch(d14) { 
    case "Dog": console.log("Example 14 Output: Woof"); break; 
    case "Cat": console.log("Example 14 Output: Meow"); break; 
}

// --- EXAMPLE 15 ---
// Input: User enters "a"
// Output: "Vowel"
let d15 = prompt("Ex 15: Enter a Letter:").toLowerCase();
switch(d15) { 
    case "a": case "e": case "i": case "o": case "u": console.log("Example 15 Output: Vowel"); break; 
    default: console.log("Example 15 Output: Consonant"); 
}

// --- EXAMPLE 16 ---
// Input: User enters "admin"
// Output: "All Access"
let d16 = prompt("Ex 16: Role:");
switch(d16) { 
    case "admin": console.log("Example 16 Output: All Access"); break; 
    default: console.log("Example 16 Output: Limited Access"); 
}

// --- EXAMPLE 17 ---
// Input: User enters "Earth"
// Output: "3rd Planet"
let d17 = prompt("Ex 17: Planet Name:");
switch(d17) { 
    case "Earth": console.log("Example 17 Output: 3rd Planet"); break; 
}

// --- EXAMPLE 18 ---
// Input: User enters "js"
// Output: "Javascript"
let d18 = prompt("Ex 18: File Extension:");
switch(d18) { 
    case "js": console.log("Example 18 Output: Javascript"); break; 
    case "py": console.log("Example 18 Output: Python"); break; 
}

// --- EXAMPLE 19 ---
// Input: User enters "1"
// Output: "Noob"
let d19 = prompt("Ex 19: Gamer Level (1-2):");
switch(d19) { 
    case "1": console.log("Example 19 Output: Noob"); break; 
    case "2": console.log("Example 19 Output: Pro"); break; 
}

// --- EXAMPLE 20 ---
// Input: User enters "1"
// Output: "Starting Game"
let d20 = prompt("Ex 20: 1.Start 2.Exit:");
switch(d20) { 
    case "1": console.log("Example 20 Output: Starting Game"); break; 
    case "2": console.log("Example 20 Output: Exiting"); break; 
}

// --- EXAMPLE 21 ---
// Input: User enters "White"
// Output: "In Stock"
let d21 = prompt("Ex 21: Shirt Color:");
switch(d21) { 
    case "White": console.log("Example 21 Output: In Stock"); break; 
}

// --- EXAMPLE 22 ---
// Input: User enters "w"
// Output: "Moving Up"
let d22 = prompt("Ex 22: Direction (w/a/s/d):");
switch(d22) { 
    case "w": console.log("Example 22 Output: Moving Up"); break; 
}

// --- EXAMPLE 23 ---
// Input: User enters "12"
// Output: "$10"
let d23 = prompt("Ex 23: Pizza Size (12/16):");
switch(d23) { 
    case "12": console.log("Example 23 Output: $10"); break; 
}

// --- EXAMPLE 24 ---
// Input: User enters "ES"
// Output: "Hola"
let d24 = prompt("Ex 24: Language Code (ES/EN):");
switch(d24) { 
    case "ES": console.log("Example 24 Output: Hola"); break; 
    case "EN": console.log("Example 24 Output: Hello"); break; 
}

// --- EXAMPLE 25 ---
// Input: User enters "Coffee"
// Output: "Served Hot"
let d25 = prompt("Ex 25: Drink:");
switch(d25) { 
    case "Coffee": console.log("Example 25 Output: Served Hot"); break; 
}

// --- EXAMPLE 26 ---
// Input: User enters "Mac"
// Output: "Apple OS"
let d26 = prompt("Ex 26: OS:");
switch(d26) { 
    case "Mac": console.log("Example 26 Output: Apple OS"); break; 
}

// --- EXAMPLE 27 ---
// Input: User enters "Tall"
// Output: "12oz"
let d27 = prompt("Ex 27: Cup Size:");
switch(d27) { 
    case "Tall": console.log("Example 27 Output: 12oz"); break; 
}

// --- EXAMPLE 28 ---
// Input: User enters "404"
// Output: "Not Found"
let d28 = prompt("Ex 28: Status Code:");
switch(d28) { 
    case "404": console.log("Example 28 Output: Not Found"); break; 
    case "200": console.log("Example 28 Output: Success"); break; 
}

// --- EXAMPLE 29 ---
// Input: User enters "Pro"
// Output: "$15/mo"
let d29 = prompt("Ex 29: Subscription Tier:");
switch(d29) { 
    case "Pro": console.log("Example 29 Output: $15/mo"); break; 
}

// --- EXAMPLE 30 ---
// Input: User enters "6"
// Output: "Win!"
let d30 = prompt("Ex 30: Dice Roll:");
switch(d30) { 
    case "6": console.log("Example 30 Output: Win!"); break; 
    default: console.log("Example 30 Output: Try again"); 
}

