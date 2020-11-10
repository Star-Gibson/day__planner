var currentDay = $("#currentDay"); //Variable set - Selecting #currentDay
var now = moment(); //Variable set for momentjs function
currentDay.text(now.format("dddd - MMMM Do, YYYY")); //Should Dislay the Date in following format - Tuesday-November 10th, 2020



function highlight() { //Uses the css classes to appropriately highlight the textarea based off of time of the day.
    var hour = moment().hours();
    $("textarea").each(function () {
        var currentTime = parseInt($(this).attr("id"));
        if (currentTime < hour) {
            $(this).addClass("past") //Should highlight grey
        }
        else if (currentTime === hour) {
            $(this).addClass("present") //Should highlight red
        }
        else {
            $(this).addClass("future") //Should highlight green
        }

    })


}

highlight(); 

//Last Objective:
//WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

