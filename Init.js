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
//
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
//
let c2 = 89;
if (c2 == 0) {
  console.log("Zero");
} else if (c2 > 0 && c2 % 2 == 0) {
  console.log("Positive and Even");
} else if (c2 > 0 && c2 % 2 != 0) {
  console.log("Positive and Odd");
} else if (c2 < 0 && c2 % 2 == 0) {
  console.log("Negative and Even");  
} else if (c2 < 0 && c2 % 2 != 0) {
  console.log("Negative and Odd");
}
//
let ipq = 1;

do {
  console.log(ipq);
  ipq++;
} while (ipq <= 5);
//
let h = 0 ;
while (h<10){
  console.log("Num:"+ h);
  h++;
}
//
let f = 0;
do{
  console.log("Good"+f);
  f++;
}
while(f<10);
//
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let r_h = 0;
while(r_h<cars.length){
  console.log(cars[r_h]);
  r_h++;
}
//
let iko = 0;
while (iko <= 10) {
    console.log(iko);
    iko += 2;
}


for (let r_op = 0; r_op<=10;r_op++){
  console.log("13 * ", r_op, "==", r_op*13)
}
for (let i =10; i>=0; --i){
  console.log(i);
  
}

//
const car_s=["a","b","c","d","e"];
for ( let f_op=0;f_op<=cars.length;f_op++){
  console.log(car_s[f_op]);
}
let f_oq = 0;
while(f_oq<car_s.length){
  console.log(car_s[f_oq]);
  f_oq ++;
}
//
for (let f_oj = 0; f_oj<=2; f_oj++){
  console.log(f_oj+"Hello World");
}
// 
for(let f_oy=0;f_oy<=9;f_oy++){
  console.log("JavaScript is Good");
}
let g_op=0;
while(g_op<=10){
  console.log(g_op);
  g_op++;
}

let s_oi=12321;
let rs_oi=s_oi.toString();
let original_oi=rs_oi.split('').reverse().join('');
console.log(original_oi==s_oi);
//
const hello = () => "Hi JS!"; console.log(hello());
//
const cars_d={a:"MS",b:"BH"};

for (let key in cars_d){
  console.log(key+":"+cars_d[key]);
}
//
const cars_id=["red","blue","pink"];
for ( let key_op of cars_id){
  console.log(key_op);
}
//
const numbers = [10, 20, 30];

// for...in (Returns index)
for (let i in numbers) {
  console.log(i); // "0", "1", "2"
}

// for...of (Returns value)
for (let val of numbers) {
  console.log(val); // 10, 20, 30
}
//
const user = { name: "Alice", age: 25 };
for (let key in user) { console.log(key); }
//
const arr = ['a', 'b'];
for (let i of arr) { console.log(i, typeof i); }
//
const furis={a:"v",b:"w",c:"v",d:"x",e:"a",k:"t"};
var c_ount = 0;
for (let i in furis){
  console.log(i);
  c_ount++;
}
//
const data = { id: 101, name: "Admin", code: 404 };
for (let k in data) { 
    if (typeof data[k] === 'number') console.log(k); 
}
//
const info = { city: "New York", zip: "10001" };
let res = "";
for (let k in info) {
  console.log(k);
}
//
const h_io = ['s','k','j'];
for (let g_io in h_io){
  console.log(g_io); //returns indices;
}
//
const fruits_opi = ["🍎", "🍌"];
for (let f of fruits_opi) { console.log(f); }
//
let g_oi = [20,90];
let tot = 0;
for (let f_de of g_oi){
  tot+=f_de;
}
console.log(tot);
















