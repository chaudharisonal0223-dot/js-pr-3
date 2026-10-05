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
// Q.3 Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)//
function maxmin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.getElementById("q3").innerHTML =
        "Array = " + arr +
            "<br>Maximum Value = " + max +
            "<br>Minimum Value = " + min;
}
let a = [12, 45, 7, 89, 23, 5, 67];
maxmin(a);
//q4. Write a JavaScript program for convert all array element in ASCII value.//
function showAscii(letters) {
    let text = "";
    for (let i = 0; i < letters.length; i++) {
        text += letters[i] + " = " + letters[i].charCodeAt(0) + "<br>";
    }
    document.getElementById("q4").innerHTML = text;
}
let myArray = ["A", "B", "C", "D", "E"];
showAscii(myArray);
//Q.5 Write a JavaScript program for remove negative values using the filter array function.
let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
let positiveNumbers = numbers.filter(function (num) {
    return num >= 0;
});
document.getElementById("q5").innerHTML =
    "Original Array = " + numbers +
        "<br>After Removing Negative Values = " + positiveNumbers;
//q.6 Write a JavaScript program using array map() method and return the square of array element.//
let number = [2, 5, 6, 3, 8, 9];
let squareArr = arr.map(function (num) {
    return num * num;
});
document.getElementById("q6").innerHTML =
    "Original Array = " + arr +
        "<br>Square Array = " + squareArr;
// q.7 Write a JavaScript program for sort array in ascending descending.//
let link = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
let asc = [...link].sort(function (a, b) {
    return a - b;
});
let desc = [...link].sort(function (a, b) {
    return b - a;
});
document.getElementById("q7").innerHTML =
    "Original Array = " + numbers +
        "<br>Ascending Order = " + asc +
        "<br>Descending Order = " + desc;
//q8 . Write a JavaScript program which filters out any string which is less than 8 characters. //
let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
let longWords = words.filter(function (word) {
    return word.length >= 8;
});
document.getElementById("q8").innerHTML =
    "Original Array = " + words +
        "<br>Words with 8 or more characters = " + longWords;
//write a JavaScript program to  to print expected output for following string.//
// 1. airplane -> r
let str1 = "airplane";
let output1 = str1.charAt(2);
// 2. oxoxoxox -> oXoXoXoX
let str2 = "oxoxoxox";
let output2 = "";
for (let i = 0; i < str2.length; i++) {
    if (str2[i] == "x") {
        output2 += "X";
    }
    else {
        output2 += str2[i];
    }
}
// 3. A New Java Book
let str3 = "A New Java Book";
let lowerCase = str3.toLowerCase();
let upperCase = str3.toUpperCase();
document.getElementById("q9").innerHTML =
    "airplane = " + output1 +
        "<br>oxoxoxox = " + output2 +
        "<br>Lower Case = " + lowerCase +
        "<br>Upper Case = " + upperCase;
// Q.10  write a JavaScript program for array reverse.
let likley = [10, 20, 30, 40, 50];
let reverseArray = likley.reverse();
document.getElementById("q10").innerHTML = "Original Array = 10,20,30,40,50" + "<br>Reversed Array = " + reverseArray;
// Q.11 write a JavaScript program for check value is found or not? //
let numberss = [10, 20, 30, 40, 50];
let searchValue = 60;
if (numberss.includes(searchValue)) {
    document.getElementById("q11").innerHTML = searchValue + " is Found";
}
else {
    document.getElementById("q11").innerHTML = searchValue + " is Not Found";
}
// Q.12 . write a JavaScript program for print your name and write the no of total character.
let myName = "Sonal";
let totalCharacters = myName.length;
document.getElementById("q12").innerHTML = "Name = " + myName + "<br>Total Characters = " + totalCharacters;
// Q.13 write a JavaScript program given this output using replace concept.
let text = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let newText = text.replaceAll("dog", "cat");
document.getElementById("q13").innerHTML = "Original String = " + text + "<br><br>Updated String = " + newText;
// Q.14 write a JavaScript program convert string to array.
let texts = "Hire the top 1% freelance developers";
let wordsArray = texts.split(" ");
let resulta = wordsArray.slice(0, 4);
document.getElementById("q14").innerHTML =
    "Output = [" + resulta.map(word => '"' + word + '"').join(", ") + "]";
//Q.15  write a JavaScript program convert for array to string.
let data = ['5', 32, 'Daniel'];
let str = data.toString();
document.getElementById("q15").innerHTML = "Array = " + data + "<br>String = " + str;
