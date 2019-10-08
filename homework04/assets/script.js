var timeEl = document.querySelector(".time");
var startEl = document.getElementById("start");
var containerEl = document.querySelector(".container");
var quizQuestionsEl = document.querySelector("questions");

var secondsLeft = 75;

function timer() {
  event.preventDefault;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

    containerEl.style.display = "none";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("BZZZZZZZZT! You're out of time!");
    }

  }, 1000);
}

document.querySelector("questions").addEventListener("click", showQuestions);

function showQuestions() {
  quizQuestionsEl.textContent = quizQuestionsEl;
}

//how to make questions appear?
//wrapper div that switches out content - once start is hit, a quiz template container takes its place
//wrapper that has a container and inside reside all the questions
//show and hide questions that all reside in one container

