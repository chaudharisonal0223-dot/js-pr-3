"use strict";
//   Q.1  Write a simple JavaScript program to print expected Output using following array.
let myColor = ["Red", "Green", "White", "Black"];
let result = "";
result += myColor.join(",") + "<br>";
result += myColor.join("+") + "<br>";
result += myColor.slice(0, 3).join(",") + "<br>";
result += myColor[0] + "<br>";
result += myColor.slice(1, 3).join(",") + "<br>";
myColor.push("orange");
result += myColor.join(",");
document.getElementById("output").innerHTML = result;
//Q.2 Write a JavaScript program to get sum of all array element using for loop and foreach loop.//
let arr = [10, 20, 30, 40, 50];
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i];
}
let sum2 = 0;
arr.forEach(function (num) {
    sum2 = sum2 + num;
});
document.getElementById("q2").innerHTML =
    "Sum using for loop = " + sum1 + "<br>" +
        "Sum using foreach loop = " + sum2;
