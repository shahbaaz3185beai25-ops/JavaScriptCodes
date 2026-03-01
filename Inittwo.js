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
// --- EXAMPLE 1: Increment ---
let n1 = Number(prompt("1. Limit:"));
for (let i = 0; i < n1; i++) console.log("Out: " + i);
// Input: 3
// Output: 0, 1, 2

// --- EXAMPLE 2: Decrement ---
let n2 = Number(prompt("2. Start:"));
for (let i = n2; i > 0; i--) console.log("Out: " + i);
// Input: 3
// Output: 3, 2, 1

// --- EXAMPLE 3: Multiplication ---
let n3 = Number(prompt("3. Table:"));
for (let i = 1; i <= 10; i++) console.log(n3 + "x" + i + "=" + (n3 * i));
// Input: 5
// Output: 5x1=5 ... 5x10=50

// --- EXAMPLE 4: Even Step ---
let n4 = Number(prompt("4. Max:"));
for (let i = 0; i <= n4; i += 2) console.log("Even: " + i);
// Input: 4
// Output: 0, 2, 4

// --- EXAMPLE 5: Total Sum ---
let n5 = Number(prompt("5. Sum:"), s5 = 0);
for (let i = 1; i <= n5; i++) s5 += i;
console.log("Total: " + s5);
// Input: 4
// Output: 10

// --- EXAMPLE 6: Array Loop ---
let a6 = ["A", "B", "C"];
for (let i = 0; i < a6.length; i++) console.log("Item: " + a6[i]);
// Input: None
// Output: A, B, C

// --- EXAMPLE 7: Binary Growth ---
let n7 = Number(prompt("7. Max:"));
for (let i = 1; i <= n7; i *= 2) console.log("Val: " + i);
// Input: 8
// Output: 1, 2, 4, 8

// --- EXAMPLE 8: String Index ---
let s8 = prompt("8. Word:");
for (let i = 0; i < s8.length; i++) console.log(s8[i]);
// Input: "Hi"
// Output: H, i

// --- EXAMPLE 9: Early Exit ---
for (let i = 1; i < 5; i++) if (i === 3) break; else console.log(i);
// Input: None
// Output: 1, 2

// --- EXAMPLE 10: Skip Value ---
for (let i = 1; i < 4; i++) if (i === 2) continue; else console.log(i);
// Input: None
// Output: 1, 3

// --- EXAMPLE 11: Factorial Calc ---
let n11 = Number(prompt("11. n:"), r11 = 1);
for (let i = n11; i > 1; i--) r11 *= i;
console.log(r11);
// Input: 3
// Output: 6

// --- EXAMPLE 12: List Fill ---
let a12 = [];
for (let i = 0; i < 3; i++) a12.push(i);
console.log(a12);
// Input: None
// Output: [0, 1, 2]

// --- EXAMPLE 13: Flip String ---
let s13 = prompt("13. In:"), v13 = "";
for (let i = s13.length - 1; i >= 0; i--) v13 += s13[i];
console.log(v13);
// Input: "Up"
// Output: "pU"

// --- EXAMPLE 14: Find Smallest ---
let a14 = [9, 2, 5], m14 = a14[0];
for (let i = 1; i < 3; i++) if (a14[i] < m14) m14 = a14[i];
console.log(m14);
// Input: None
// Output: 2

// --- EXAMPLE 15: Vowel Match ---
let s15 = prompt("15. Str:"), c15 = 0;
for (let i = 0; i < s15.length; i++) if ("aei".includes(s15[i])) c15++;
console.log(c15);
// Input: "ace"
// Output: 2

// --- EXAMPLE 16: Star Line ---
let n16 = Number(prompt("16. n:"), l16 = "");
for (let i = 0; i < n16; i++) l16 += "*";
console.log(l16);
// Input: 3
// Output: ***

// --- EXAMPLE 17: Ternary Fizz ---
for (let i = 1; i < 4; i++) console.log(i % 3 === 0 ? "F" : i);
// Input: None
// Output: 1, 2, F

// --- EXAMPLE 18: Object Keys ---
let o18 = {a: 1, b: 2}, k18 = Object.keys(o18);
for (let i = 0; i < 2; i++) console.log(k18[i]);
// Input: None
// Output: a, b

// --- EXAMPLE 19: Dual Counter ---
for (let i = 0, j = 2; i <= j; i++, j--) console.log(i, j);
// Input: None
// Output: 0 2, 1 1

// --- EXAMPLE 20: Big Step ---
for (let i = 10; i >= 0; i -= 5) console.log(i);
// Input: None
// Output: 10, 5, 0

// --- EXAMPLE 21: Grid Log ---
for (let i = 0; i < 2; i++) for (let j = 0; j < 1; j++) console.log(i, j);
// Input: None
// Output: 0 0, 1 0

// --- EXAMPLE 22: Not Array ---
let a22 = [true, false];
for (let i = 0; i < 2; i++) console.log(!a22[i]);
// Input: None
// Output: false, true

// --- EXAMPLE 23: Average Set ---
let a23 = [1, 3], t23 = 0;
for (let i = 0; i < 2; i++) t23 += a23[i];
console.log(t23 / 2);
// Input: None
// Output: 2

// --- EXAMPLE 24: Percentage ---
let a24 = [0.1, 0.2];
for (let i = 0; i < 2; i++) console.log(a24[i] * 100 + "%");
// Input: None
// Output: 10%, 20%

// --- EXAMPLE 25: Target Search ---
let a25 = ["x", "y"], idx = -1;
for (let i = 0; i < 2; i++) if (a25[i] === "y") idx = i;
console.log(idx);
// Input: None
// Output: 1

// --- EXAMPLE 26: Forced Break ---
let c26 = 0;
for (;;) { if (c26 === 1) break; console.log("Hi"); c26++; }
// Input: None
// Output: Hi

// --- EXAMPLE 27: Char Mask ---
let s27 = prompt("27. In:"), m27 = "";
for (let i = 0; i < s27.length; i++) m27 += "X";
console.log(m27);
// Input: "ok"
// Output: "XX"

// --- EXAMPLE 28: String Build ---
let s28 = "";
for (let i = 1; i < 4; i++) console.log(s28 += i);
// Input: None
// Output: 1, 12, 123

// --- EXAMPLE 29: Fib Start ---
let f29 = [0, 1];
for (let i = 2; i < 4; i++) f29[i] = f29[i - 1] + f29[i - 2];
console.log(f29);
// Input: None
// Output: [0, 1, 1, 2]

// --- EXAMPLE 30: Truth Filter ---
let a30 = [0, 1, ""];
for (let i = 0; i < 3; i++) if (a30[i]) console.log("T: " + a30[i]);
// Input: None
// Output: T: 1
