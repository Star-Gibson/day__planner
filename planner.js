var currentDay = $("#currentDay"); //Variable set - Selecting #currentDay
var now = moment(); //Variable set for momentjs function
currentDay.text(now.format("dddd - MMMM Do, YYYY")); //Should Dislay the Date in following format - Tuesday-November 10th, 2020

var grabText = $("textarea").attr("id"); //Defined variable for easier use in Button Click function. 
localStorage.getItem(grabText);

highlight(); 

function highlight() { //Function which uses the css classes to appropriately highlight the textarea based off of time of the day.
    var hour = moment().hours(); //MomentJS Hours function.
    $("textarea").each(function () {
        var currentTime = parseInt($(this).attr("id")); //Grabs the id's associated with textarea.                                           
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



// Button Hover
    var saveBtn = $(".saveBtn")
    saveBtn.on("mouseenter", function () {
        $(this).addClass("hover");
    });

    saveBtn.on("mouseleave", function () {
        $(this).removeClass("hover");
    });


//Button Click
saveBtn.each(function() {    

    saveBtn.on("click", function () {

        var grabber = $("textarea").val();
        localStorage.setItem(grabText, grabber);
    
         }

    )

})













