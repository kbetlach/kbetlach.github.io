//Displays current day.

var today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(today);
console.log(today);

//Assigns each time block a color in relation to the current time of day.

for (var i = 9; i < 18; i++) {
    if (i < moment().hour()) {
        $("#" + i).addClass("past")
    }
    else if (i === moment().hour()){
        $("#" + i).addClass("present")
    }
    else {
        $("#" + i).addClass("future")
    }
}

//Saving timeblock inputs into local storage, and reloading them on refresh.

$("button").on("click", function(event) {
    event.preventDefault();
    var textInput = $("#text").val();
    localStorage.setItem("plannerEvent", JSON.stringify(textInput));
    console.log(textInput);
})

$(document).ready(function(){
    var savedText = JSON.parse(localStorage.getItem("plannerEvent"));
    $("textarea").text = savedText;
})