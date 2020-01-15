# The Lord of the Rings Quiz

# Introduction

As part of the JavaScript curriculum, we were asked to create a program that provides the user a timed quiz around five questions long. There is to be a timer counting down that ends the quiz if the user isn't finished when it hits 0, and time is deducted for every wrong answer. The user should then be able to save their scores into local storage, and view all scores saved into the client.

For my version, I chose to theme it after Lord of the Rings, something I'm a huge fan of. My quiz is 6 seconds long, with the timer starting at 75 seconds. For every incorrect answer, 10 seconds gets deducted. Final score is remaining time plus one point for every question answered correctly. So the faster you go the higher the score!

<img width="1430" alt="quiz" src="https://user-images.githubusercontent.com/53587397/71748420-18f55900-2e38-11ea-9469-223240952381.png">

# Technologies

The quiz was created in VS Code using html, css, Bootstrap and JavaScript. 

# Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it! 

It can be found here: (https://kbetlach.github.io/lotr_quiz/)

# Status

The program is mostly complete. The quiz is 100% functional, but for now the highscore / local storage feature is not active. I intend to return to this and complete it at a later date.

# Sources and Inspiration

I found this assignment to be difficult when it was first given. Chris and all the TAs helped me at various points by helping me revise code, or at least give me ideas to try on my own. Big thanks to them!

Upon revisiting this a few months later and having a better understanding of JavaScript, I was able to tighten it up and reformat code, leaving it in a much more complete state than the first time around.

It was fun to learn about timers and setting intervals for this assignment. That was probably my favorite part to play around with. This is my timer function:

![timer](https://user-images.githubusercontent.com/53587397/71748430-23175780-2e38-11ea-90c7-fda542b7ba89.png)


The timer is then called within the function that starts the quiz, so every time the quiz starts, the user's score and the countdown is reset. Pretty fun to mess around with!