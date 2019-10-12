var myQuestionsIndex = 0;
var timeEl = document.querySelector(".time");
var startEl = document.getElementById("start");
var containerEl = document.querySelector(".container");
var directionsEl = document.querySelector(".directions");
var score = 0;
var secondsLeft = 75;

var myQuestions = [
  {
    question: "What are the three main components that go into web design?",
    answers: ["JavaScript, JSON, jQuery", "HTML, CSS, JavaScript", "HTML, variables, Bootstrap","CSS, Terminal, Java"],
    correctAnswer: "HTML, CSS, JavaScript"
  },
  {
    question: "What does MERN stand for in MERN full stack?",
    answers: ["ModularDB, Express, Reach, Node.js", "MungoDB, Extracurricular, Rear, Null.js", "MongoDB, Express, React, Node.js", "MangoDB, Espresso, Reaction, NAN.js"],
    correctAnswer: "MongoDB, Express, React, Node.js"
  },
  {
    question: "What is a true / false statement called in JavaScript?",
    answers: ["String", "Function", "Boolean", "All of the above"],
    correctAnswer: "Boolean"
  },
  {
    question: "What tool can be used to see if a JavaScript function is working or not?",
    answers: ["console.log", "council.log", "VS Code", "W3 Schools"],
    correctAnswer: "console.log"
  },
  {
    question: "What is the name of the CSS framework developed by Twitter?",
    answers: ["Bootheel", "Boolean", "Bootlaces", "Bootstrap"],
    correctAnswer: "Bootstrap"
  }
];

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
  //alert($(this).attr("data-answer"));

  if (myQuestionsIndex >= myQuestions.length - 1) {
    console.log("end of quiz");
    return;
  } else if ($(this).attr("data-answer") === myQuestions[myQuestionsIndex].correctAnswer){
    console.log("rightAnswer");
    score++;
    myQuestionsIndex++;
  } else {
    console.log("wrongAnswer");
      secondsLeft-15;
      myQuestionsIndex++;
  }
  
  nextQuestion();

})






//within next question function, write conditionals for right or wrong, include time penalties