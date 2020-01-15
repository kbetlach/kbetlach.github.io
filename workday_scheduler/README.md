# Workday Planner

# Introduction

For homework05, we had to create a simple notetaking workday planner that lays out the timeblocks of a workday, from 9 am - 5 pm, and be able to type notes and click save. Upon hitting save, the text will save into local storage, and still be present in the the time block after reloading the page.

Using moment.js, the day will always be accurate at the top of the page, and the timeblocks are color coded according to the time of day. Past hours are a uniform color, the present hour is its own color, and future hours are a uniform color of their own.

<img width="1247" alt="scheduler" src="https://user-images.githubusercontent.com/53587397/72471291-ff450180-37a7-11ea-9888-f5b77fd8ed2c.png">

# Technologies

The planner was created in VS Code using html, css, Bootstrap and JavaScript. 

# Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it! 

It can be found here: (https://kbetlach.github.io/workday_scheduler/)

# Sources and Inspiration

This assignment wasn't too bad. I had a good time with it, but got pretty frustrated at the local storage part. I tried so many different things and nothing worked. I worked with TAs on it, took their suggestions, and still wasn't able to get it over the line. That said, all of the moment.js stuff was pretty neat. I liked this bit of code the most:

![code](https://user-images.githubusercontent.com/53587397/72471300-04a24c00-37a8-11ea-95b8-a95a769eda81.png)

This loops through the timeblocks and assigns them the classes for the hours of the day after being compared to moment.js' universal clock. Pretty cool!

Thanks to all the TAs who helped me out as well!