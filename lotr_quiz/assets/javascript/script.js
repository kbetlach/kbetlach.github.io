var questionIndex = 0;
var time = document.querySelector(".time");
var start = document.getElementById("start");
var container = document.querySelector(".container");
var directions = document.querySelector(".directions");
var currentQuestion = document.querySelector("question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var score = 0;
var secondsLeft = 75;

function startQuiz() {
  event.preventDefault();
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left!";

    directions.style.display = "none";
  
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("BZZZZZZZZT! You're out of time!");
    }

  }, 1000);
  
  console.log(myQuestions[myQuestionsIndex])
  nextQuestion();
}

function nextQuestion() {
  console.log(myQuestions[myQuestionsIndex].question)

  var currentQuestion = questions[questionNumber].title;
  var item1 = questions[questionNumber].choices[0];
  var item2 = questions[questionNumber].choices[1];
  var item3 = questions[questionNumber].choices[2];
  var item4 = questions[questionNumber].choices[3];

  question.innerHTML = currentQuestion;
  option1.innerHTML = item1;
  option2.innerHTML = item2;
  option3.innerHTML = item3;
  option4.innerHTML = item4;

}