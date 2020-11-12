var currentDay = $("#currentDay"); //Variable set - Selecting #currentDay
var now = moment(); //Variable set for momentjs function
currentDay.text(now.format("dddd - MMMM Do, YYYY")); //Should Dislay the Date in following format - Tuesday-November 10th, 2020

//Defined variable for easier use in Button Click/Hover/Save functions. 
var saveBtn = $(".saveBtn")

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

//Routine Set Function (LocalStorage) - Should keep data from localStorage in textarea fields upon refresh.
$(".time-block").each(function () {
    var id = $(this).attr("id");
    console.log($(this).attr("id")); 
    var routine = localStorage.getItem(id);
    console.log(routine);

    if (routine !== null) {
        $(this).children("routine").val(routine);
    }

});


//Button Save (localStorage) //Saves all data to localStorage in the following format - 9AM | Do homework
saveBtn.on("click", function () {
    var currentTime = $(this).parent().attr("id")
    var routine = $(this).siblings(".routine").val();
    localStorage.setItem(currentTime, routine);

}


)


// Button Hover

saveBtn.on("mouseenter", function () {
    $(this).addClass("hover");
});

saveBtn.on("mouseleave", function () {
    $(this).removeClass("hover");
});





















