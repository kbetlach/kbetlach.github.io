var myQuestionsIndex = 0;
var time = document.querySelector(".time");
var start = document.getElementById("start");
var container = document.querySelector(".container");
var directions = document.querySelector(".directions");
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

  quiz.innerHTML = myQuestions[myQuestionsIndex].question;

  for (var i = 0; i < 4; i++){
    var questionButton = $("<button>");
    questionButton.addClass("answers");
    questionButton.attr("data-answer",myQuestions[myQuestionsIndex].answers[i]);
    questionButton.text(myQuestions[myQuestionsIndex].answers[i]);
    questionButton.attr("value", myQuestions[myQuestionsIndex].correctAnswer)
    questionButton.css("background-color", "slategrey");
    questionButton.css("color", "white");
    questionButton.appendTo(quiz);
  }
  console.log(myQuestions[myQuestionsIndex].correctAnswer)
}

$(document).on("click", ".answers",  function(){

  if (myQuestionsIndex >= myQuestions.length - 1) {
    score++;
    alert("End of quiz! Your final score is: " + (score + secondsLeft));
    console.log("end of quiz");
    console.log(score);
    return;
  } else if ($(this).attr("data-answer") === myQuestions[myQuestionsIndex].correctAnswer){
    console.log("rightAnswer");
    score++;
    myQuestionsIndex++;
    alert("Correct!");
  } else {
    console.log("wrongAnswer");
      secondsLeft-=15;
      myQuestionsIndex++;
      alert("Wrong!");
  }
  
  nextQuestion();

})