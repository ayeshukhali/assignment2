"use strict";
// write a program to convert to temperture from celcius to fahenhiet from vice versa
var fahenhiet = 200;
var celcius = 100;
var celsius = (fahenhiet - 32) * 5 / 9;
console.log(fahenhiet);
var f = (celcius * (9 / 5)) + 32;
console.log(celcius);
// write a program that calculate the percentage
var totalmarks = 1100;
var otainedmarks = 750;
var percentage = 100 * otainedmarks / totalmarks;
console.log(percentage);
// write a program to convert a given number of day into weeks and days such as 17 days and 2 weeks and 3 days
var days = 17;
var weeks = Math.floor(days / 7);
console.log(weeks);
var remainingdays = days % 7;
console.log(remainingdays);
//
var productprice = 200;
if (productprice > 100) {
    console.log("10%discount");
}
else {
    console.log("5%");
}
// 
var age_ayesha = 22;
if (age_ayesha > 0 && age_ayesha <= 12) {
    console.log("child");
}
else if (age_ayesha >= 13 && age_ayesha <= 19) {
    console.log("teenage");
}
else {
    console.log("adult");
}
// 
var temperture = "hot weather";
if (temperture == "hot weather") {
    console.log("temperture");
}
else {
    console.log("warm clothes");
}
//
var num = 11;
if (num % 3 == 0 || num % 5 == 0) {
    console.log("number is divisble");
}
else {
    console.log("number is not divisble");
}
// write a program that check if the given year is leap year or not
var year = 2023;
if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
    console.log("year is leap");
}
else {
    console.log("year is not leap");
}
var day = 2;
if (day == 1) {
    console.log("monday");
}
else if (day == 2) {
    console.log("tuesday");
}
else if (day == 3) {
    console.log("wednesday");
}
else if (day == 4) {
    console.log("thursday");
}
else if (day == 5) {
    console.log("friday");
}
else if (day == 6) {
    console.log("saturday");
}
else {
    console.log("sunday");
}
var unit = 100;
var price = 20;
if (unit >= 100) {
    var calculate = unit * price + (10 / 100);
    console.log("calculate value,", calculate);
}
else if (unit >= 200) {
    var calculate = unit * price + (15 / 100);
    console.log("calculate value,", calculate);
}
else if (unit >= 500) {
    var calculate = unit * price + (25 / 100);
    console.log("calculate value,", calculate);
}
