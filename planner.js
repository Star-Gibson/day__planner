var currentDay = $("#currentDay"); //Variable set - Selecting #currentDay
var now = moment(); //Variable set for momentjs function
currentDay.text(now.format("dddd - MMMM Do, YYYY")); //Should Dislay the Date in following format - Tuesday-November 10th, 2020
