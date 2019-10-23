var citySelection = $("#city-search").val().trim();

$("#select-city").on("click", function (event) {
    event.preventDefault();
    var citySelection = $("#city-search").val().trim();
    var apiKey = "b090192947ebb72ee8d89e585110389e"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySelection + "&apikey=" + apiKey;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        console.log(queryURL);

        $(".city").html(<h1>response.name + moment().format('MMMM do YYYY'))</h1>);
        $(".temperature").html("Temperature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + " degrees Fahrenheit");
        $(".humidity").html("Humidity: " + response.main.humidity + "%");
        $(".wind").html("Wind Speed: " + response.wind.speed + "mph");

        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;

        $.ajax({
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv").html("UV Index: " + response.value);
        })
    })
});

// Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
