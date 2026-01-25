// Array length check
let items = [1, 2, 3];
let message = items.length > 0 ? " Non-empty List " : "Empty list";
console.log(message); 
//
let a = 20;
if (a >= 18) {
  console.log("Adult");
}
// Output: Adult
//
let ag_2 = 16;
if (ag_2 >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}
// Output: Cannot vote
//
let scores = 85;
if (scores >= 90) {
  console.log("Grade A");
} else {
  if (scores >= 80) {
    console.log("Grade B");
  } else {
    console.log("Grade C");
  }
}
// Output: Grade B
//
let vote=100456;
if (vote>=1000){
    console.log("Won!");
}else{
    if (vote>500){
        console.log("Attempt Again");
    }
    else{
        console.log("Not in majority");
}
}
//
let age = 20;
if (age >= 18) {
  console.log("Adult");
}
// Output: Adult
//
let age_2 = 16;
if (age_2 >= 18) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}
// Output: Cannot vote
//
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else {
  if (score >= 80) {
    console.log("Grade B");
  } else {
    console.log("Grade C");
  }
}
// Output: Grade B
//
let votes=456;
if (votes>=1000){
    console.log("Won!");
}else{
    if (votes>500){
        console.log("Attempt Again");
    }
    else{
        console.log("Not in majority");
}
}
let time = 4;
if(time>15){
  console.log("Good Evening");
}
else if(time > 12){
  console.log("Good Afternoon");
}
else{
  console.log("Good Morning");
}
//
let v = 1;
switch(v){
  case 1:
    console.log("First")
    break;
  case 2:
    console.log("Second")
    break;
  case 3:
    console.log("Third")
    break;
  default:
    console.log("Invalid")
  }
//
let operator = "+";
let num1 = 10, num2 = 5;
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  default:
    result = "Invalid operator";
}
console.log(result);
// Output: 15
//
for(let f = 0; f < 10; f+=1){
  console.log("Js is interesting..", f+1 );
}
//
// Count 1 to 10
for (let i = 1; i <= 10; i++) { 
  console.log(i);
}

// Count backward
for (let i = 10; i >= 1; i--) {
  console.log(i);
 }

// Skip numbers (step 2)
for (let i = 0; i <= 10; i += 2) { 
  console.log(i);
}

// Array loop
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//
for(let i=1; i<=5; i++) {
    console.log(i);
}
//
for(let i=0; i<=10; i+=2) {
    console.log(i);
}
let str = "hello";
let count = 0;
for(let i=0; i<str.length; i++) {
    if("aeiou".includes(str[i])) count++;
}
console.log("Vowels:", count);
//
for(let i=1; i<=5; i++) {
    console.log("*".repeat(i));
}
//
let nums = [4, 2, 9, 7, 5];
let max = nums[0];
for(let i=1; i<nums.length; i++) {
    if(nums[i] > max) max = nums[i];
}
console.log("Largest:", max);
//
for(let i=10; i>=1; i--) {
    if(i === 4) break;
    console.log(i);
}










