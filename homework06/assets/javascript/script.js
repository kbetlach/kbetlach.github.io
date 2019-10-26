var apiKey = "b090192947ebb72ee8d89e585110389e"
var savedCities = [];
var citySelection = $("#city-search").val().trim();

$("#select-city").click(function (searchCityWeather) {
    searchCityWeather.preventDefault();
    var citySelection = $("#city-search").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySelection + "&apikey=" + apiKey;

    //Creates and appends buttons for cities that the user has searched, and puts them in local storage.
    var list = $("<button>");
    list.addClass("btn btn-secondary p-1 m-1");
    list.html(citySelection);
    $("#city-buttons").append(list);
    savedCities.push(citySelection);
    localStorage.setItem('searchedCities', JSON.stringify(savedCities));

    console.log(queryURL);

    $.ajax({        //AJAX call for current weather information
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        console.log(queryURL);

        var iconCode = response.weather[0].icon;
        var weatherIconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

        $(".city").html("<h3>" + response.name + "<br/>" + moment().format('L' + "</h3>"));
        $(".temperature").html("Temperature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + " degrees Fahrenheit");
        $(".humidity").html("Humidity: " + response.main.humidity + "%");
        $(".wind").html("Wind Speed: " + response.wind.speed + " mph");
        $(".icon").attr('src', weatherIconURL).attr('alt', 'weather icon');

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

                $(".forecast").empty();

                for (var i = 0; i < 5; i++) {
                    var newDiv = $("<div>").attr('id', i).addClass("bg-secondary p-1 m-1");
                    var newRow = $("<div>").addClass("next-line" + [i]);
                    var forecastTemp = $("<div>").addClass("text-white");
                    var forecastHumidity = $("<div>").addClass("text-white");
                    iconCode = response.list[i].weather[0].icon;
                    iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
                    iconDiv = $("<img>").attr('src', iconURL).attr('alt', "forecast weather symbol");
                    newDiv.html(moment().add((i + 1), 'days').format('L')).addClass("text-white");
                    $(".forecast").append(newDiv);
                    $(newDiv).append(newRow);
                    $(forecastTemp).html("Temp: " + ((response.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(1) + " deg F");
                    $(forecastHumidity).html("Humidity: " + response.list[i].main.humidity + "%");
                    $(".next-line" + i).append(iconDiv);
                    $("#" + i).append(forecastTemp);
                    $("#" + i).append(forecastHumidity);

                }
            })
        })
    })
});

//Generating weather data for previously generated cities. Currently does not work!
$("city-buttons").click(function (previouslySearchedCity) {
    previouslySearchedCity.preventDefault();
    var btnText = $(this).text();
    var searchedCity = $(btnText);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&apikey=" + apiKey;

    $.ajax({        //AJAX call for current weather information
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        console.log(queryURL);

        var iconCode = response.weather[0].icon;
        var weatherIconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

        $(".city").html("<h3>" + response.name + "<br/>" + moment().format('L' + "</h3>"));
        $(".temperature").html("Temperature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + " degrees Fahrenheit");
        $(".humidity").html("Humidity: " + response.main.humidity + "%");
        $(".wind").html("Wind Speed: " + response.wind.speed + " mph");
        $(".icon").attr('src', weatherIconURL).attr('alt', 'weather icon');

        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;

        $.ajax({        //AJAX call for UV index.
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv").html("UV Index: " + response.value);

            var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&apikey=" + apiKey;

            $.ajax({       //AJAX call for 5-day forecast.
                url: forecastURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                $(".forecast").empty();

                for (var i = 0; i < 5; i++) {
                    var newDiv = $("<div>").attr('id', i).addClass("bg-secondary p-1 m-1");
                    var newRow = $("<div>").addClass("next-line" + [i]);
                    var forecastTemp = $("<div>").addClass("text-white");
                    var forecastHumidity = $("<div>").addClass("text-white");
                    iconCode = response.list[i].weather[0].icon;
                    iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
                    iconDiv = $("<img>").attr('src', iconURL).attr('alt', "forecast weather symbol");
                    newDiv.html(moment().add((i + 1), 'days').format('L')).addClass("text-white");
                    $(".forecast").append(newDiv);
                    $(newDiv).append(newRow);
                    $(forecastTemp).html("Temp: " + ((response.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(1) + " deg F");
                    $(forecastHumidity).html("Humidity: " + response.list[i].main.humidity + "%");
                    $(".next-line" + i).append(iconDiv);
                    $("#" + i).append(forecastTemp);
                    $("#" + i).append(forecastHumidity);

                }
            })
        })
    })
});

    //On document ready, retrieve cities in local storage, loop through them, and create buttons.
    $(document).ready(function () {
        savedCities = JSON.parse(localStorage.getItem('searchedCities')) || [];

        for (i = 0; i < savedCities.length; i++) {
            var savedButton = $("<button>");
            savedButton.addClass("btn btn-secondary p-1 m-1").html(savedCities[i]);
            $("#city-buttons").append(savedButton);
        }
    })