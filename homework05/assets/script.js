var today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(today);
console.log(today);

var saveBtn = $(".saveBtn");

$("save").on("click", function(store){
    store.preventDefault;
    //localStorage.setItem(//value and key?);
});