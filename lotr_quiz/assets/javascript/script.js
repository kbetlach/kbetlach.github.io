var questionIndex = 0;
var time = document.querySelector(".time");
var start = document.getElementById("start");
var container = document.querySelector(".container");
var directions = document.querySelector(".directions");
var quizQuestions = document.querySelector("#quizQuestions");
var quizChoices = document.querySelector("#quizChoices");
var answer1 = document.querySelector("#1");
var answer2 = document.querySelector("#2");
var answer3 = document.querySelector("#3");
var answer4 = document.querySelector("#4");
var score = 0;
var secondsLeft = 75;
var currentQuestion = 0;

function timer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left!";

    directions.style.display = "none";
  
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("BZZZZZZZZT! You're out of time!");
    }

  }, 1000);
}

function startQuiz() {
    event.preventDefault();
    timer();

    quizQuestion.innerHTML = questions[currentQuestion].title

    for (i = 0; i < 4; i++) {
      var buttons = document.createElement("button");
      buttons.innerHTML = questions[currentQuestion].choices[i];
      quizChoices.children[i].append(buttons);
    }
  }