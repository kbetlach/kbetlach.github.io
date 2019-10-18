var today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(today);
console.log(today);

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

$("button").on("click", function(event) {
    event.preventDefault();
    var btnValue = (this.id);
    $("#textarea" + btnValue)
    localStorage.setItem("plannerEvent", JSON.stringify(btnValue));
    
})

$(document).ready(function(){
    var savedText = JSON.parse(localStorage.getItem("plannerEvent"));
    $("textarea").text = savedText;
})