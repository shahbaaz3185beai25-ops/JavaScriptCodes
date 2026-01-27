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
//
let de = 1;
while (de <= 5) {
    console.log(de);
    de++;
}

//
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}
//
const fruit_s = ["apple", "banana", "cherry"];
let oi = 0;
while (oi < fruit_s.length) {
    console.log(fruit_s[i]);
    oi++;
}
//
let ip = 1, fact = 1;
while (ip <= 5) {
    fact *= ip;
    ip++;
}
console.log("5! =", fact);
//
let id = 1;
while (id <= 10) {
    if (id% 3 !== 0) console.log(id);
    id++;
}
//
let iw = 0;
while (true) {
    console.log(iw);
    iw++;
    if (iw === 3) break;
}
//
let ik = 0;
while (ik < 5) {
    ik++;
    if (ik === 3) continue;
    console.log(ik);
}
//
let ij = 11;
while (true) {
    if (ij % 2 === 0) {
        console.log("First even >10:", ij);
        break;
    }
    ij++;
}
let ne = 5;
let p_attern = "";

for (let i = 0; i < ne; i++) {
  for (let j = 0; j < ne; j++) {
    p_attern += "* ";
  }
  p_attern += "\n";
}

console.log(p_attern);
//
let nw = 5;
let pa_ttern = "";

for (let i = 1; i <= nw; i++) {
  for (let j = 1; j <= i; j++) {
    pa_ttern += "*";
  }
  pa_ttern += "\n";
}

console.log(pa_ttern);
//
let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  pattern += " ".repeat(n - i);
  pattern += "*".repeat(i);
  pattern += "\n";
}

console.log(pattern);
//
let no = 5;
let attern = "";

for (let i = no; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    attern += "*";
  }
  attern += "\n";
}

console.log(attern);
//
let nq = 5;
let pat = "";

for (let i = nq; i >= 1; i--) {
  pat += " ".repeat(nq - i);
  pat += "*".repeat(i);
  pat += "\n";
}

console.log(pattern);
//
let na = 5;
let pats = "";

for (let i = 1; i <= na; i++) {
  pats += " ".repeat(n - i);
  pats += "*".repeat(2 * i - 1);
  pats += "\n";
}

console.log(pats);
//
let nm = 5;
let p = "";

for (let i = nm; i >= 1; i--) {
  p += " ".repeat(nm - i);
  p += "*".repeat(2 * i - 1);
  p += "\n";
}

console.log(p);
//
let r = 90;
let b ;
(r>b)? b=89:b=78;
console.log(b);
//
let v1 = 9;
if(v1%2==0){
  console.log("Number is even");
}
else if(v1==0){
  console.log("Number is zero");
}
else{
  console.log("Number is odd");
}
//
let c1 = 89;
if(c1 ==0){
  console.log("Zero");
}
else{
  if(c1 > 0){
    if(c1%2==0){
      console.log("Positive and Even");
    }
    else{
      console.log("Positive and Odd");
    }
  }
  else if(c1< 0){
    if (c1%2==0){
      console.log("Negitive and Even");
    }
    else{
      console.log("Negitive and Odd");
    }
  }
}














