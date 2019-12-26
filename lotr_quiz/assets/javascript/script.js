var questionIndex = 0;
var time = document.querySelector(".time");
var start = document.getElementById("start");
var container = document.querySelector(".container");
var directions = document.querySelector(".directions");
var answerButton = document.querySelectorAll(".btn");
var answer1 = document.querySelector("#ques1");
var answer2 = document.querySelector("#ques2");
var answer3 = document.querySelector("#ques3");
var answer4 = document.querySelector("#ques4");
var score = 0;
var secondsLeft = 75;
var questionNumber = 0;

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

    var quizQuestion = questions[questionNumber].title;
    var listItem1 = questions[questionNumber].choices[0];
    var listItem2 = questions[questionNumber].choices[1];
    var listItem3 = questions[questionNumber].choices[2];
    var listItem4 = questions[questionNumber].choices[3];

    question.innerHTML = quizQuestion;
    answer1.innerHTML = listItem1;
    answer2.innerHTML = listItem2;
    answer3.innerHTML = listItem3;
    answer4.innerHTML = listItem4;

}