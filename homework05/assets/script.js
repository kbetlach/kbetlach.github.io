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

$("#button9").on("click", function(event) {
  event.preventDefault();
  var textInput9 = $("#textarea9").val();
    localStorage.getItem("plannedEvent");
   localStorage.setItem("plannedEvent", JSON.stringify(textInput9));
   console.log('clicked',textInput9);
})

$("#button10").on("click", function(event) {
    event.preventDefault();
    var textInput9 = $("#textarea10").val();
     localStorage.setItem("plannedEvent", JSON.stringify(textInput9));
     console.log('clicked',textInput9);
  })


 $(document).ready(function(){
    var savedText = JSON.parse(localStorage.getItem("plannedEvent"));
     $("#textarea9").val(savedText);
     console.log(savedText);
 })
