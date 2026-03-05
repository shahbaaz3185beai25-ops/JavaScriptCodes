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
/*
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
// Output: T: 1 */
/*
// --- EXAMPLE 1: Basic Counter ---
let i1 = 0, n1 = Number(prompt("1. Limit:"));
while (i1 < n1) console.log("Out: " + i1++);
// Input: 3
// Output: 0, 1, 2

// --- EXAMPLE 2: Reverse Count ---
let i2 = Number(prompt("2. Start:"));
while (i2 > 0) console.log("Out: " + i2--);
// Input: 3
// Output: 3, 2, 1

// --- EXAMPLE 3: Sum of N ---
let i3 = 1, n3 = Number(prompt("3. Sum up to:"), s3 = 0);
while (i3 <= n3) s3 += i3++;
console.log("Total: " + s3);
// Input: 4
// Output: 10

// --- EXAMPLE 4: Even Numbers ---
let i4 = 0, n4 = Number(prompt("4. Max:"));
while (i4 <= n4) { if (i4 % 2 === 0) console.log(i4); i4++; }
// Input: 4
// Output: 0, 2, 4

// --- EXAMPLE 5: Multiplication Table ---
let i5 = 1, n5 = Number(prompt("5. Table of:"));
while (i5 <= 10) { console.log(n5 + "x" + i5 + "=" + (n5 * i5)); i5++; }
// Input: 2
// Output: 2x1=2 ... 2x10=20

// --- EXAMPLE 6: Factorial ---
let n6 = Number(prompt("6. Fact of:"), r6 = 1);
while (n6 > 1) r6 *= n6--;
console.log(r6);
// Input: 4
// Output: 24

// --- EXAMPLE 7: Power of 2 ---
let i7 = 1, n7 = Number(prompt("7. Max val:"));
while (i7 <= n7) { console.log(i7); i7 *= 2; }
// Input: 10
// Output: 1, 2, 4, 8

// --- EXAMPLE 8: Skip Odds ---
let i8 = 0, n8 = Number(prompt("8. Max:"));
while (i8 <= n8) { if (i8 % 2 === 0) console.log(i8); i8++; }
// Input: 5
// Output: 0, 2, 4

// --- EXAMPLE 9: User Input Validation ---
let n9 = 0;
while (n9 <= 0) n9 = Number(prompt("9. Enter positive num:"));
console.log("Valid: " + n9);
// Input: -1, 5
// Output: Valid: 5

// --- EXAMPLE 10: Fibonacci Sequence ---
let a10 = 0, b10 = 1, i10 = 0, n10 = Number(prompt("10. Steps:"));
while (i10 < n10) { console.log(a10); let t = a10 + b10; a10 = b10; b10 = t; i10++; }
// Input: 3
// Output: 0, 1, 1

// --- EXAMPLE 11: Digit Extraction (Modulus) ---
let n11 = Number(prompt("11. Num:"));
while (n11 > 0) { console.log(n11 % 10); n11 = Math.floor(n11 / 10); }
// Input: 123
// Output: 3, 2, 1

// --- EXAMPLE 12: Sum of Digits ---
let n12 = Number(prompt("12. Num:"), s12 = 0);
while (n12 > 0) { s12 += n12 % 10; n12 = Math.floor(n12 / 10); }
console.log(s12);
// Input: 15
// Output: 6

// --- EXAMPLE 13: Binary Search Logic (Half) ---
let n13 = Number(prompt("13. Start:"));
while (n13 > 1) { console.log(n13); n13 = Math.floor(n13 / 2); }
// Input: 10
// Output: 10, 5, 2

// --- EXAMPLE 14: Guessing Game Logic ---
let secret = 7, guess = 0;
while (guess !== secret) guess = Number(prompt("14. Guess (1-10):"));
console.log("Correct!");
// Input: 2, 7
// Output: Correct!

// --- EXAMPLE 15: Odd Counter ---
let i15 = 1, n15 = Number(prompt("15. Max:"));
while (i15 <= n15) { console.log(i15); i15 += 2; }
// Input: 5
// Output: 1, 3, 5

// --- EXAMPLE 16: Multiples of 3 ---
let i16 = 3, n16 = Number(prompt("16. Max:"));
while (i16 <= n16) { console.log(i16); i16 += 3; }
// Input: 10
// Output: 3, 6, 9

// --- EXAMPLE 17: Infinite with Break ---
let i17 = 0;
while (true) { if (i17 === 2) break; console.log("Run"); i17++; }
// Input: None
// Output: Run, Run

// --- EXAMPLE 18: Decrement by 5 ---
let i18 = 20;
while (i18 >= 0) { console.log(i18); i18 -= 5; }
// Input: None
// Output: 20, 15, 10, 5, 0

// --- EXAMPLE 19: Double Counter ---
let x19 = 1, y19 = 10;
while (x19 < y19) { console.log(x19 + "-" + y19); x19++; y19--; }
// Input: None
// Output: 1-10, 2-9, 3-8, 4-7, 5-6

// --- EXAMPLE 20: Compound Interest Logic ---
let bal20 = 100, i20 = 0;
while (i20 < 3) { bal20 *= 1.1; i20++; }
console.log(bal20);
// Input: None
// Output: 133.1

// --- EXAMPLE 21: Find GCD Logic ---
let a21 = 12, b21 = 8;
while (a21 !== b21) { if (a21 > b21) a21 -= b21; else b21 -= a21; }
console.log(a21);
// Input: None
// Output: 4

// --- EXAMPLE 22: Square Numbers ---
let i22 = 1, n22 = Number(prompt("22. Max:"));
while (i22 * i22 <= n22) { console.log(i22 * i22); i22++; }
// Input: 20
// Output: 1, 4, 9, 16

// --- EXAMPLE 23: Average Inputs ---
let sum23 = 0, count23 = 0, input23 = 1;
while (count23 < 2) { input23 = Number(prompt("23. Num:")); sum23 += input23; count23++; }
console.log(sum23 / 2);
// Input: 10, 20
// Output: 15

// --- EXAMPLE 24: Power of N ---
let base = 2, exp = 3, res24 = 1;
while (exp > 0) { res24 *= base; exp--; }
console.log(res24);
// Input: None
// Output: 8

// --- EXAMPLE 25: Password Attempts ---
let pass25 = 0, tries25 = 0;
while (pass25 !== 123 && tries25 < 2) { pass25 = Number(prompt("25. Pin:")); tries25++; }
// Input: 111, 222
// Output: (Loop ends after 2 tries)

// --- EXAMPLE 26: Divisibility Check ---
let i26 = 1;
while (i26 <= 10) { if (i26 % 4 === 0) console.log(i26); i26++; }
// Input: None
// Output: 4, 8

// --- EXAMPLE 27: Ternary in While ---
let i27 = 1;
while (i27 <= 3) console.log(i27++ % 2 === 0 ? "Even" : "Odd");
// Input: None
// Output: Odd, Even, Odd

// --- EXAMPLE 28: Count to Neg ---
let i28 = 2;
while (i28 >= -1) console.log(i28--);
// Input: None
// Output: 2, 1, 0, -1

// --- EXAMPLE 29: Simple Progress ---
let p29 = 0;
while (p29 < 100) { p29 += 40; console.log(p29 + "%"); }
// Input: None
// Output: 40%, 80%, 120%

// --- EXAMPLE 30: Final Countdown ---
let i30 = 3;
while (i30 >= 0) { console.log(i30 === 0 ? "Go!" : i30); i30--; }
// Input: None
// Output: 3, 2, 1, Go! 
// // --- EXAMPLE 1: Global Scope Access ---
let global1 = "I am global";
function showGlobal() {
    console.log(global1);
}
showGlobal();
// Input: None
// Output: I am global

// --- EXAMPLE 2: Local (Function) Scope ---
function localScope() {
    let local2 = "I am local";
    console.log(local2);
}
localScope();
// Input: None
// Output: I am local

// --- EXAMPLE 3: Block Scope (let) ---
{
    let block3 = "Inside block";
    console.log(block3);
}
// console.log(block3); // Error: block3 is not defined
// Input: None
// Output: Inside block

// --- EXAMPLE 4: Block Scope (const) ---
if (true) {
    const block4 = "Constant in block";
    console.log(block4);
}
// Input: None
// Output: Constant in block

// --- EXAMPLE 5: Var in Block (No Block Scope) ---
if (true) {
    var notBlocked = "I escape blocks";
}
console.log(notBlocked);
// Input: None
// Output: I escape blocks

// --- EXAMPLE 6: Function Parameter Scope ---
function paramScope(p) {
    console.log(p);
}
paramScope("Hello");
// console.log(p); // Error: p is local to function
// Input: "Hello"
// Output: Hello

// --- EXAMPLE 7: Global Variable Modification ---
let count7 = 0;
function update7() {
    count7 = 10;
}
update7();
console.log(count7);
// Input: None
// Output: 10

// --- EXAMPLE 8: Shadowing (Global vs Local) ---
let name8 = "GlobalName";
function shadow8() {
    let name8 = "LocalName";
    console.log(name8);
}
shadow8();
// Input: None
// Output: LocalName

// --- EXAMPLE 9: Shadowing (Global stays same) ---
let val9 = 100;
function check9() {
    let val9 = 200;
}
check9();
console.log(val9);
// Input: None
// Output: 100

// --- EXAMPLE 10: Nested Function Scope ---
function outer10() {
    let outerVar = "Outer";
    function inner10() {
        console.log(outerVar);
    }
    inner10();
}
outer10();
// Input: None
// Output: Outer

// --- EXAMPLE 11: Loop Block Scope (let) ---
for (let i = 0; i < 2; i++) {
    console.log(i);
}
// console.log(i); // Error: i is block scoped
// Input: None
// Output: 0, 1

// --- EXAMPLE 12: Loop Scope (var) ---
for (var j = 0; j < 2; j++) {
    // Empty
}
console.log(j);
// Input: None
// Output: 2

// --- EXAMPLE 13: Multiple Blocks ---
{ let x = 1; }
{ let x = 2; console.log(x); }
// Input: None
// Output: 2

// --- EXAMPLE 14: Global Const ---
const PI = 3.14;
function getPI() {
    return PI;
}
console.log(getPI());
// Input: None
// Output: 3.14

// --- EXAMPLE 15: Re-declaration in Local ---
let a15 = 5;
function redo15() {
    let a15 = 10;
    a15 = 20;
    console.log(a15);
}
redo15();
// Input: None
// Output: 20

// --- EXAMPLE 16: Function Scope with var ---
function varFunc() {
    var x16 = "Function Scoped";
}
// console.log(x16); // Error: var is still local to functions
// Input: None
// Output: (ReferenceError)

// --- EXAMPLE 17: If Block Scope ---
let status17 = "Safe";
if (true) {
    let status17 = "Danger";
    console.log(status17);
}
console.log(status17);
// Input: None
// Output: Danger, Safe

// --- EXAMPLE 18: Global Object Property (Simplified) ---
var globalVar18 = "VarGlobal";
// In browsers, this appears in window.globalVar18
console.log(globalVar18);
// Input: None
// Output: VarGlobal

// --- EXAMPLE 19: Parameters vs Global ---
let user19 = "Admin";
function greet19(user19) {
    console.log(user19);
}
greet19("Guest");
// Input: "Guest"
// Output: Guest

// --- EXAMPLE 20: Lexical Scope Basic ---
let x20 = "Outside";
function outer20() {
    function inner20() {
        console.log(x20);
    }
    inner20();
}
outer20();
// Input: None
// Output: Outside

// --- EXAMPLE 21: Changing Global inside Block ---
let y21 = 5;
if (true) {
    y21 = 10; // No 'let' keyword, refers to global
}
console.log(y21);
// Input: None
// Output: 10

// --- EXAMPLE 22: Const in Function ---
function constFunc() {
    const C = 50;
    console.log(C);
}
constFunc();
// Input: None
// Output: 50

// --- EXAMPLE 23: Block Scope in Switch ---
let grade23 = "A";
switch(grade23) {
    case "A": {
        let msg = "Great";
        console.log(msg);
        break;
    }
}
// Input: None
// Output: Great

// --- EXAMPLE 24: Global Assignment without Declaration ---
function ghost24() {
    z24 = "I am unintended global"; 
}
ghost24();
console.log(z24);
// Input: None
// Output: I am unintended global

// --- EXAMPLE 25: Same Name in Different Blocks ---
if (true) { let b = 1; }
if (true) { let b = 2; console.log(b); }
// Input: None
// Output: 2

// --- EXAMPLE 26: While Loop Block Scope ---
let k26 = 0;
while (k26 < 1) {
    let blockK = "Looping";
    console.log(blockK);
    k26++;
}
// Input: None
// Output: Looping

// --- EXAMPLE 27: Shadowing with Const ---
const val27 = "Outer";
function check27() {
    const val27 = "Inner";
    console.log(val27);
}
check27();
// Input: None
// Output: Inner

// --- EXAMPLE 28: Returning Local Variable ---
function returnLocal() {
    let secret = "Hidden";
    return secret;
}
console.log(returnLocal());
// Input: None
// Output: Hidden

// --- EXAMPLE 29: Block Scope inside Function ---
function nest29() {
    let a = 1;
    if (true) {
        let a = 2;
        console.log(a);
    }
    console.log(a);
}
nest29();
// Input: None
// Output: 2, 1

// --- EXAMPLE 30: Deeply Nested Blocks ---
{
    let level1 = 1;
    {
        let level2 = 2;
        console.log(level1 + level2);
    }
}
// Input: None
// Output: 3
// // --- EXAMPLE 1: Regular Function inside Object ---
const obj1 = {
    name: "Regular",
    greet: function() {
        // Regular function has its own 'this' pointing to obj1
        return this.name;
    }
};
console.log(obj1.greet());
// Input: None
// Output: Regular

// --- EXAMPLE 2: Arrow Function as Object Method ---
const obj2 = {
    name: "Arrow",
    greet: () => {
        // Parent scope is Global (Window/Global Object)
        return this.name;
    }
};
console.log(obj2.greet());
// Input: None
// Output: undefined (or empty string in some environments)

// --- EXAMPLE 3: setTimeout with Regular Function ---
const obj3 = {
    val: 10,
    run: function() {
        setTimeout(function() {
            // Regular function resets 'this' to Global/Timeout
            console.log("Reg: " + this.val);
        }, 100);
    }
};
obj3.run();
// Input: None
// Output: Reg: undefined

// --- EXAMPLE 4: setTimeout with Arrow Function ---
const obj4 = {
    val: 20,
    run: function() {
        setTimeout(() => {
            // Arrow function inherits 'this' from run()
            console.log("Arrow: " + this.val);
        }, 100);
    }
};
obj4.run();
// Input: None
// Output: Arrow: 20

// --- EXAMPLE 5: Nested Functions (Regular) ---
const obj5 = {
    count: 5,
    doMath: function() {
        function inner() { return this.count; }
        return inner(); // Called as a plain function, 'this' is lost
    }
};
console.log(obj5.doMath());
// Input: None
// Output: undefined

// --- EXAMPLE 6: Nested Functions (Arrow) ---
const obj6 = {
    count: 10,
    doMath: function() {
        const inner = () => { return this.count; };
        return inner(); // Inherits 'this' from doMath
    }
};
console.log(obj6.doMath());
// Input: None
// Output: 10

// --- EXAMPLE 7: Array Method with Regular Function ---
const obj7 = {
    factor: 2,
    nums: [1, 2],
    calc: function() {
        return this.nums.map(function(n) {
            return n * this.factor; // 'this' is lost inside map callback
        });
    }
};
console.log(obj7.calc()[0]);
// Input: None
// Output: NaN

// --- EXAMPLE 8: Array Method with Arrow Function ---
const obj8 = {
    factor: 3,
    nums: [1, 2],
    calc: function() {
        return this.nums.map((n) => {
            return n * this.factor; // Inherits 'this' from calc
        });
    }
};
console.log(obj8.calc()[0]);
// Input: None
// Output: 3

// --- EXAMPLE 9: Event Listener Simulation (Regular) ---
const btnReg = {
    label: "Submit",
    init: function() {
        // In real DOM, 'this' would be the button element
        const fakeClick = function() { console.log(this.label); };
        fakeClick();
    }
};
btnReg.init();
// Input: None
// Output: undefined

// --- EXAMPLE 10: Event Listener Simulation (Arrow) ---
const btnArrow = {
    label: "Send",
    init: function() {
        const fakeClick = () => { console.log(this.label); };
        fakeClick();
    }
};
btnArrow.init();
// Input: None
// Output: Send

// --- EXAMPLE 11: Constructor-like Object (Regular) ---
function Counter() {
    this.num = 0;
    this.timer = function() {
        setTimeout(function() {
            this.num++; // Fails: 'this' is not the Counter instance
            console.log("Reg: " + this.num);
        }, 10);
    };
}
const c1 = new Counter();
c1.timer();
// Output: Reg: NaN

// --- EXAMPLE 12: Constructor-like Object (Arrow) ---
function CounterArr() {
    this.num = 100;
    this.timer = function() {
        setTimeout(() => {
            this.num++; // Success: 'this' is the CounterArr instance
            console.log("Arrow: " + this.num);
        }, 10);
    };
}
const c2 = new CounterArr();
c2.timer();
// Output: Arrow: 101

// --- EXAMPLE 13: Manual 'this' Binding (Regular) ---
const person13 = {
    name: "Ali",
    show: function() {
        const self = this; // Old way to save 'this'
        setTimeout(function() {
            console.log(self.name);
        }, 5);
    }
};
person13.show();
// Output: Ali

// --- EXAMPLE 14: Lexical 'this' (Modern way) ---
const person14 = {
    name: "Sara",
    show: function() {
        setTimeout(() => {
            console.log(this.name); // No need for 'self = this'
        }, 5);
    }
};
person14.show();
// Output: Sara
// // --- EXAMPLE 1: No Parameters ---
const greet = () => {
    return "Hello!";
};
console.log(greet());
// Input: None
// Output: Hello!

// --- EXAMPLE 2: Single Parameter ---
const square = (n) => {
    return n * n;
};
console.log(square(4));
// Input: 4
// Output: 16

// --- EXAMPLE 3: Multiple Parameters ---
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));
// Input: 5, 3
// Output: 8

// --- EXAMPLE 4: Simple String Concatenation ---
const fullName = (first, last) => {
    return first + " " + last;
};
console.log(fullName("John", "Doe"));
// Input: "John", "Doe"
// Output: John Doe

// --- EXAMPLE 5: Simple Interest Calculation ---
const getInterest = (p, r, t) => {
    return (p * r * t) / 100;
};
console.log(getInterest(1000, 5, 2));
// Input: 1000, 5, 2
// Output: 100

// --- EXAMPLE 6: Check Even Number ---
const isEven = (num) => {
    return num % 2 === 0;
};
console.log(isEven(10));
// Input: 10
// Output: true

// --- EXAMPLE 7: Area of Rectangle ---
const area = (l, w) => {
    return l * w;
};
console.log(area(10, 5));
// Input: 10, 5
// Output: 50

// --- EXAMPLE 8: Converting Celsius to Fahrenheit ---
const toFah = (c) => {
    return (c * 9/5) + 32;
};
console.log(toFah(30));
// Input: 30
// Output: 86

// --- EXAMPLE 9: Check Positive Number ---
const isPos = (n) => {
    return n > 0;
};
console.log(isPos(-5));
// Input: -5
// Output: false

// --- EXAMPLE 10: Minimum of Two Numbers ---
const getMin = (a, b) => {
    return a < b ? a : b;
};
console.log(getMin(15, 25));
// Input: 15, 25
// Output: 15

// --- EXAMPLE 11: Cube of a Number ---
const cube = (n) => {
    return n * n * n;
};
console.log(cube(3));
// Input: 3
// Output: 27

// --- EXAMPLE 12: Return an Object Literal ---
const getPoint = (x, y) => {
    return { x: x, y: y };
};
console.log(getPoint(10, 20));
// Input: 10, 20
// Output: { x: 10, y: 20 }

// --- EXAMPLE 13: Perimeter of Square ---
const peri = (s) => {
    return 4 * s;
};
console.log(peri(5));
// Input: 5
// Output: 20

// --- EXAMPLE 14: Check if String is Long ---
const isLong = (str) => {
    return str.length > 5;
};
console.log(isLong("Gemini"));
// Input: "Gemini"
// Output: true

// --- EXAMPLE 15: Average of Three Numbers ---
const avg = (a, b, c) => {
    return (a + b + c) / 3;
};
console.log(avg(10, 20, 30));
// Input: 10, 20, 30
// Output: 20

// --- EXAMPLE 16: Multiply Three Numbers ---
const multi3 = (a, b, c) => {
    return a * b * c;
};
console.log(multi3(2, 3, 4));
// Input: 2, 3, 4
// Output: 24

// --- EXAMPLE 17: Get Last Character ---
const lastChar = (s) => {
    return s[s.length - 1];
};
console.log(lastChar("JS"));
// Input: "JS"
// Output: S

// --- EXAMPLE 18: Check Voting Eligibility ---
const canVote = (age) => {
    return age >= 18;
};
console.log(canVote(16));
// Input: 16
// Output: false

// --- EXAMPLE 19: Double a Number ---
const double = (n) => {
    return n * 2;
};
console.log(double(12));
// Input: 12
// Output: 24

// --- EXAMPLE 20: Simple Greeting by Time ---
const timeGreet = (hour) => {
    return hour < 12 ? "Morning" : "Evening";
};
console.log(timeGreet(15));
// Input: 15
// Output: Evening
// // --- EXAMPLE 1: Hoisting (Declaration) ---
// Declarations are hoisted, so they can be called before definition.
console.log(greetDecl());

function greetDecl() {
    return "Hello from Declaration!";
}
// Input: None
// Output: Hello from Declaration!

// --- EXAMPLE 2: Hoisting (Expression) ---
// Expressions are not hoisted; calling before definition causes an error.
try {
    console.log(greetExpr());
} catch (e) {
    console.log("Error: greetExpr is not defined yet");
}

const greetExpr = function() {
    return "Hello from Expression!";
};
// Input: None
// Output: Error: greetExpr is not defined yet

// --- EXAMPLE 3: Syntax (Naming) ---
// Declarations must have a name. Expressions can be anonymous.
const anonymous = function() {
    return "I am anonymous";
};
console.log(anonymous());

function named() {
    return "I am named";
}
console.log(named());
// Input: None
// Output: 
// I am anonymous
// I am named

// --- EXAMPLE 4: Conditional Definition (Declarations) ---
// Function declarations in blocks behave inconsistently across browsers.
if (true) {
    function test() { return "True Block"; }
}
console.log(test());
// Input: None
// Output: True Block

// --- EXAMPLE 5: Conditional Definition (Expressions) ---
// Expressions are safer for conditional logic because they follow block scope.
let logic;
if (true) {
    logic = function() { return "Safe Expression"; };
}
console.log(logic());
// Input: None
// Output: Safe Expression

// --- EXAMPLE 6: Use as Callbacks ---
// Expressions are commonly passed directly into other functions.
const nums = [1, 2];
nums.forEach(function(n) {
    console.log(n * 2);
});
// Input: [1, 2]
// Output: 
// 2
// 4

// --- EXAMPLE 7: Object Methods ---
// Expressions are used to define methods inside objects.
const person = {
    talk: function() { return "Speaking..."; }
};
console.log(person.talk());
// Input: None
// Output: Speaking...

// --- EXAMPLE 8: IIFE (Immediately Invoked Function Expression) ---
// Only expressions can be used to create IIFEs.
(function() {
    console.log("Run immediately!");
})();
// Input: None
// Output: Run immediately!

// --- EXAMPLE 9: Reassignment ---
// Expressions assigned to 'let' can be changed; declarations cannot be "reassigned" the same way.
let dynamicFunc = function() { return "Version 1"; };
dynamicFunc = function() { return "Version 2"; };
console.log(dynamicFunc());
// Input: None
// Output: Version 2

// --- EXAMPLE 10: The 'name' Property ---
// Declarations have a fixed name property.
function myOriginalName() {}
const myAlias = function() {};

console.log(myOriginalName.name);
console.log(myAlias.name);
// Input: None
// Output: 
// myOriginalName
// myAlias*/