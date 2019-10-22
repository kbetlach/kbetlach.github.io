var citySelection = $("#city-search").val().trim();
var apiKey = "b090192947ebb72ee8d89e585110389e"
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + citySelection +"&apikey=" + apiKey;

function searchCity(cityName) {
    
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  console.log(queryURL);
  console.log(response);

    $(".city").html(response.name);
    $(".temperature").html("Temperature: " + response.main.temp);
    $(".humidity").html("Humidity: " + response.main.humidity);
    $(".wind").html("Wind Speed: " + response.wind.speed);
    $("uv").html("UV Index:" + response);
  }
)}

$("#select-city").on("click", function(event) {
    event.preventDefault();
    var citySelection = $("#city-search").val().trim();

    searchCity(citySelection);
});