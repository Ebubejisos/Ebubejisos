// SWITCHES : A REPLACEMENT FOR ELSE IF STATEMENTS
/*
let grade = window.prompt("Input Grade").valueOf();
switch (true) {
   case grade >= 70:
      document.write("Excellent");
      break;
   case grade >= 60:
      document.write("You did Good");
      break;
   case grade >= 50:
      document.write("You Passed");
      break;
   case grade < 50:
      document.write("You Failed!");
      break;
   default:
      document.write(grade, " is not a grade");
}
*/

// NOT OPERATOR '!'
/*
let temp = 15;
// statement below means if temp is not > 0
if (!(temp > 0)) {
   console.log("It's is cold outside")
}
else {
   console.log("it's is hot outside");
}
let sunny = true;
if (!sunny) {
   console.log("It's cloudy outside");
}
else {
   console.log("It's sunny outside")
}
*/

// LOOP : WHILE=INFINITE , FOR=DEFINED OCCURENCE, BREAK & CONTINUE
// While loop
/*
let userName = "";
while (userName == "" || userName == null) {
   userName = window.prompt("Enter your name");
}
console.log("Hello", userName);
*/
// for loop
/*
for (let i = 10; i > 0; i--) {
   console.log(i);
}
console.log("HAPPY NEW YEAR!");
*/
// break and continue
// break: puts a stop to loop at specified point
// continue: skips a specified point and continues the rest of the loop
/*
for (let i = 1; i <= 20; i++) {
   if (i == 13) {
      // break;
      continue;
   }
   console.log(i);
}
*/

//NESTED LOOP
/*
for (let i = 1; i <= 3; i++) {
   for (let j = 1; j <= 3; j++) {
      console.log(j);
   }
}
*/
/*
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter num of rows");
let columns = window.prompt("Enter num of columns");
for (let i = 1; i <= rows; i++) {
   for (let j = 1; j <= columns; j++) {
      document.getElementById("myRectangle").innerHTML += symbol;
   }
   // to start next row in a new line
   document.getElementById("myRectangle").innerHTML += "<br>";
   // Note: "+=" behaves like 'append' statement
}
*/

// RETURNING A FUNCTION i.e using a function before it is declared
/*
let area;
let width = window.prompt("Enter width");
let height = window.prompt("Enter height");

area = getArea(width, height);
console.log("The area of the square is:", area);

function getArea(width, height) {
   return width * height;
}
*/

// TERNARY OPERATOR: syntax = condition ? - if : else;
/*
let adult = checkAge(21);
console.log(adult);

function checkAge(age){
   return age >= 18 ? true : false
}
*/
/*
checkWinner(true);
function checkWinner(win) {
   win ? console.log("You Win!") : console.log("You Lose!")
}
*/

// TEMPLATE LITERALS: allows use of embeded variables within a string
/*
let userName = "Bro"
let items = 3;
let total = 75;
let text =
   `Hello ${userName}<br>
 You have ${items} items in your cart<br>
 Your total is $${total}`;
document.getElementById("someText").innerHTML = text;
*/

// NUMBER STYLES AND UNITS
/*
let myNum = 100;
// myNum = myNum.toLocaleString("en-US");
// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
// myNum = myNum.toLocaleString(undefined, { style: "percent" })
myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

console.log(myNum);
*/

// ARRAYS
/* looping or Array listing */
/*
let prices = [5, 10, 15, 20, 25];
for (let i = prices.length - 1; i >= 0; i -= 1) {
   console.log(prices[i]);
}
for (let i of prices) {
   console.log(i);
} */


/* sorting arrays in alphabetical/reverse orders */
/*
let fruits = ["banana", "mango", "apple", "orange"]
// fruits = fruits.sort();
fruits = fruits.sort().reverse();
for (let fruit of fruits) {
   // console.log(fruit);
}
*/

/* 2D arrays = array of arrays */
/*
let Fruits = ["banana", "mango", "apple", "orange"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["pork", "fish", "chicken"]
groceryList = [Fruits, vegetables, meats];
// this  calls and replaces the value in the nested array with the help of row and columns as in matrices, numbered from zero
groceryList[2][2] = "steak";
for (let list of groceryList) {
   // this calls individual items in the nested array
   for (let items of list) {
      console.log(items);
   }
}
*/

// SPREAD OPERATOR = unpacks an array elements inorder to pass arguments
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = ["bob", "suzzy", "reed"];
let class2 = ["amy", "bryan", "julie"];
// ".push" inserts and element or in our case an array, due to the spread operator, into an array
class1.push(...class2);
console.log(...class1);
*/
// rest parameter = array of function for dealing with multiple variables
/* 
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b))

function sum(...numbers) {
   let total = 0;
   for (let number of numbers) {
      total += number;
   }
   return total
   //"numbers" is the array of function and also the argument name for calling the function, while "number" unpacks the function, 
} 
*/