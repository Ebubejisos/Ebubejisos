// ACCEPTING BASIC USER INPUT
/*let username = window.prompt("whats your name");
console.log(username);*/
/*
let username;
document.getElementById("myBtn").onclick = function () {
   // this assigns userinput into var. username onclick event
   username = document.getElementById("yourname").value;
   // this changes the label's texts
   document.getElementById("userNameBody").innerHTML = "Hello " + username
}
*/


// MATH: PLAYING WITH NUMBERS
/*
let pai = 3.14;
pai = Math.round(pai);
pai = Math.floor(pai);
pai = Math.ceil(pai);
pai = Math.pow(pai, 2);
pai = Math.sqrt(pai)
// console.log(x);
*/

// SOLVING SOME CALCLATIONS
// radius of a circle
/*
const pi=3.142
let radius;
let circumference;
// radius=window.prompt("what is the radius of the circle");
radius=Number(radius);
circumference = 2 * pi * radius
// console.log("The circumference of the circle is ",circumference);
*/

// hypotenus of a triangle
/*
let adj;
let opp;
let hyp;
adj = window.prompt("Enter adjacent");
adj = Number(adj);
opp = window.prompt("Enter opposite")
opp = Number(adj);
hyp = Math.sqrt(Math.pow(adj, 2) + Math.pow(opp, 2));
console.log("the hypotenus of the triangle is ",hyp);
*/

// SIMPLE COUNTER
/*
let count = 0;
document.getElementById("decrease").onclick = function () {
   count -= 1;
   document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("reset").onclick = function () {
   count = 0;
   document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increase").onclick = function () {
   count += 1;
   document.getElementById("countLabel").innerHTML = count;
}
*/

// NUMBER GENERATOR
/*
let x = Math.floor(Math.random() * 6) + 1;
console.log(x)
*/

// CHECK BOX PROPERTY
/*
document.getElementById("myBtn").onclick = function () {
   const myCheckBox = document.getElementById("myCheckBox");
   const visaRadBtn = document.getElementById("visaRadBtn");
   const masterRadBtn = document.getElementById("masterRadBtn");
   const paypalRadBtn = document.getElementById("paypalRadBtn");

   if (myCheckBox.checked) {
      document.getElementById("someText").innerHTML = "You have agreed with terms and condition";
   }
   else {
      document.getElementById("someText").innerHTML = "Please, agree with terms and condition to proceed";

   }
   if (myCheckBox.checked && visaRadBtn.checked) {
      alert("Proceed to Payment with the selected payment method");
   }
   else if (myCheckBox.checked && masterRadBtn.checked) {
      alert("Proceed to Payment with the selected payment method")
   }
   else if (myCheckBox.checked && paypalRadBtn.checked) {
      alert("Proceed to Payment with the selected payment method")
   }
   else if (myCheckBox.checked) {
      alert("Select a payment before making payments!")
   }
   else {
   }
}
*/