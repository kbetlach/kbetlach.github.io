# Homework03: Password Generator

##Introduction

For this assignment, we were meant to create a password generator using JavaScript. The generator will ask users how many characters between 8 - 128 they want in their password, and they can further specify what types of characters will be included (special, numeric, upper or lower case letters). 

The purpose of the application is to provide the user with a secure, randomized password.

###Technologies

The portfolio was created in VS Code using html, css, Bootstrap and JavaScript. 

####Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it! The media queries written into the application ensure that it displays properly and functions on varying screen sizes.

It can be found here: (https://kbetlach.github.io/homework03/)

Screenshot of finished application:

![](assets/images/password_generater.png)

#####Status

The program is complete. Extra alerts could be added to spice it up, but as it stands it is a functioning password generator that responds to the specifications input by the user.

######Sources and Inspiration

I found this assignment to be fairly difficult, but shoutouts to the TAs, especially Blake for pushing me through it. I was able to cobble together most of what I needed, and Blake helped push it over the edge into functioning properly.

My favorite bit of code is honestly the whole JavaScript portion. Making this out of nothing felt like quite the achievement for me personally since I had been struggling to wrap my mind around JavaScript for so long. The for loop is probably what I'm most proud of:

 var password = '';
        for(var i = 0; i < userChoice; i++){
           var password1 = characters.charAt(Math.floor(Math.random() * characters.length));
           password = password + password1;
        }
        document.getElementById("field").innerHTML = password;
    }
    var buttonClick = document.getElementById("generate")
    buttonClick.addEventListener("click", generate);

I also watched this video a handful of times of someone creating a password generator using a slidebar, which I found pretty interesting and gave me some ideas.

    (https://www.youtube.com/watch?v=9sT03jEwcaw)


