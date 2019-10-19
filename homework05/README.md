# Homework05: Workday Planner

##Introduction

For homework05, we had to create a simple notetaking workday planner that lays out the timeblocks of a workday, from 9 am - 5 pm, and be able to type notes and click save. Upon hitting save, the text will save into local storage, and still be present in the the time block after reloading the page.

Using moment.js, the day will always be accurate at the top of the page, and the timeblocks are color coded according to the time of day. Past hours are a uniform color, the present hour is its own color, and future hours are a uniform color of their own.

###Technologies

The quiz was created in VS Code using html, css, Bootstrap and JavaScript. 

####Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it! 

It can be found here: (https://kbetlach.github.io/homework05/)

#####Status

The program is mostly complete. I struggled with the local storage portion. I was able to make the 9 am time block work with saving and having the text be there after reloading the page. I tried repeating the code for the other buttons, but it wasn't working. When I repeated the code for the 10 am button, it broke the 9 am button. It seems you need to be able to loop through the buttons but I wasn't able to figure out how to do that.

Everything else was completed as far as layout and using the moment.js features. I plan to revisit this and fix the other buttons and make sure everything is able to save into local storage.

######Sources and Inspiration

This assignment wasn't too bad. I had a good time with it, but got pretty frustrated at the local storage part. I tried so many different things and nothing worked. I worked with TAs on it, took their suggestions, and still wasn't able to get it over the line. That said, all of the moment.js stuff was pretty neat. I liked this bit of code the most:

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

This loops through the timeblocks and assigns them the classes for the hours of the day after being compared to moment.js' universal clock. Pretty cool!

Thanks to all the TAs who helped me out as well!



