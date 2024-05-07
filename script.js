//////////////////////////////////  Q1  ///////////////////////////////

// var number = prompt("Enter number please : ");
// for (var i = 0; i <= number; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// // OR
// for (var i = 0; i <= number; i += 2) {
//   console.log(i);
// }

//////////////////////////////////  Q2  ///////////////////////////////

// var salary = prompt("Enter your salary please : ");
// if(salary >= 10000){
//     console.log("wealthy")
// }else if(salary >= 5000 && salary <= 10000){
//     console.log("rich")
// }else {
//     console.log("mashia be elsatr")
// }

//////////////////////////////////  Q2  ///////////////////////////////



var allProducts = document.querySelectorAll(".products .product");
var content = document.querySelector("#content");
var btnadd = document.querySelector("#addToCart");
// var display = document.querySelectorAll(".display");
var display = document.getElementById("displayy");

var totalPrice = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    totalPrice += parseInt(item.getAttribute("price"));
    content.innerHTML += item.textContent + " - ";

    if (content.innerHTML != "   ") {
        btnadd.style.display = "flex";
    }
  };
});
btnadd.onclick = function () {
//   console.log(totalPrice);
display.innerHTML = " Total price is : " + totalPrice
};


//////////////////////////////////  Q4  ///////////////////////////////

// var TotalNumber = prompt("Tell me how many students you have .!");
// var student = [];
// for (i = 1; i <= TotalNumber; i++) {
//   var stdName = prompt("Enter the student's name No. " + i + " :");
//   var stdDeg = prompt("Enter the student's degree :");
//   student = ["The name of student "+i+" : " + stdName, "degree is: " + stdDeg];
//   console.log(student);
// }

//////////////////////////////////  Q5  ///////////////////////////////

// var num1 = parseInt(prompt("Enter the First number please : "));
// var num2 = parseInt(prompt("Enter the Second number please : "));
// var sum = num1 + num2;
// var Subtraction = num1 - num2;
// var Division = num1 / num2;
// var Multiplication = num1 * num2;

// console.log(
//   "The sum of two numbers = " +
//     sum +
//     " \n The result of subtracting two numbers = " +
//     Subtraction +
//     " \n The result of the division of two numbers = " +
//     Division +
//     " \n The Multiplication of the two numbers = " +
//     Multiplication
// );
