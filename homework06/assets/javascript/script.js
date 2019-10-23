var citySelection = $("#city-search").val().trim();

$("#select-city").on("click", function (event) {
    event.preventDefault();
    var citySelection = $("#city-search").val().trim();
    var apiKey = "b090192947ebb72ee8d89e585110389e"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySelection + "&apikey=" + apiKey;

    console.log(queryURL);

    $.ajax({        //AJAX call for current weather information
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        console.log(queryURL);

        var iconCode = response.weather[0].icon;
        var weatherIconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

        $(".city").html("<h3>" + response.name + "<br/>" + moment().format('MMMM do YYYY' + "</h3>"));
        $(".temperature").html("Temperature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + " degrees Fahrenheit");
        $(".humidity").html("Humidity: " + response.main.humidity + "%");
        $(".wind").html("Wind Speed: " + response.wind.speed + " mph");
        $(".icon").attr('src', weatherIconURL).attr('alt, weather icon');

        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;

        $.ajax({        //AJAX call for UV index.
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv").html("UV Index: " + response.value);

            var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySelection + "&apikey=" + apiKey;

            $.ajax({       //AJAX call for 5-day forecast.
                url: forecastURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);



            })
        })
    })
});