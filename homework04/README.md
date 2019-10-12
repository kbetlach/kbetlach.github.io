# Homework04: Code Quiz

##Introduction

Homework04 asked us to create a code quiz that provided the user a timed quiz around five questions long. The timer is set to 75 seconds, and if the user answers a question incorrectly, 15 seconds gets deducted from their remaining time. Their final score at the end of the five questions is the amount of questions they answered correctly multiplied by their remaining time. So the quicker they answer correctly, the more points they get at the end.

We were then tasked with saving user scores in local storage, and being able to display high scores after clicking a button named the same thing.

###Technologies

The quiz was created in VS Code using html, css, Bootstrap and JavaScript. 

####Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it! 

It can be found here: (https://kbetlach.github.io/homework04/)

#####Status

The program is incomplete. The user will be able to start the quiz, and cycle through the questions, and the program knows when a question was answered correctly or incorrectly. Unfortunately, I didn't have the time to style it as nicely as I wanted, and play with the media queries for smaller screens.

I didn't have time to code in saving scores to local storage or making the view highscores button functional. I simply ran out of time before it was due. I plan to revisit this and complete it in a way that I am happy with.

######Sources and Inspiration

I found this assignment to be difficult. Chris and all the TAs helped me at various points by helping me revise code, or at least give me ideas to try on my own. Big thanks to them!

I'm pretty satisfied with what I was able to get through, but wish I could have completed it in full. I am most proud of the timer I was able to create.

function startQuiz() {
  event.preventDefault();
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

    directionsEl.style.display = "none";
  
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("BZZZZZZZZT! You're out of time!");
    }

  }, 1000);
  
  console.log(myQuestions[myQuestionsIndex])
  nextQuestion();
}

All in this one function, the quiz starts, the timer begins counting down, the first question appears, and the directions on the home screen disappears, and alerts the user when time has run out. Not too bad for one function!



