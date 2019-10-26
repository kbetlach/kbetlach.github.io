# Homework06: Weather Dashboard

##Introduction

Homework06 asked us to create a weather dashboard. Users should be able to enter a city and then have the current weather conditions of that city displayed. Additionally, a five day forecast for that city will also display. All weather data is meant to be generated from successfully tapping into the Open Weather API. 

After a city is searched, the city is then stored in local storage and a button is created to show what the user has previously searched. Upon refresh, those buttons should be visible, and once clicked, the weather data re-generated.

###Technologies

The dashboard was created in VS Code using html, css, Bootstrap, jQuery, and the Open Weather API. 

####Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it! 

It can be found here: (https://kbetlach.github.io/homework06/)

#####Status

The program is 95% complete. Everything is functional except being able to click the generated buttons and see the weather data pop up again. The searched city buttons will successfully generate and store themselves in local storage, but they are currently not clickable.

I fully intend to fix this minor issue and make the program completely functional as intended by the homework instructions.

######Sources and Inspiration

Fun assignment! Had a good time exploring an API and using its data. I think my favorite part is I finally got some local storage stuff to work! For some reason this has been eluding me over the past couple assignments, but I got it working this time. Here's the code that has the buttons generate themselves to the page on refresh: 

   $(document).ready(function () {
       savedCities = JSON.parse(localStorage.getItem('searchedCities')) || [];

       for (i = 0; i < savedCities.length; i++) {
           var savedButton = $("<button>");
           savedButton.addClass("btn btn-secondary p-1 m-1").html(savedCities[i]);
           $("#city-buttons").append(savedButton);
       }
   })
   
It has definitely made me more comfortable in knowing when and how to use for loops as well.

As always, a big thanks to all the TAs who helped me out!
