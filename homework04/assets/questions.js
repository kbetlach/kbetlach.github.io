var timeEl = document.querySelector(".time");
var startEl = document.getElementById("start");
var containerEl = document.querySelector(".container");
var directionsEl = document.querySelector(".directions");
var score = 0;
var secondsLeft = 75;
//global index for questions, increment by 1 to cycle through
var questionNumber = 0;

var myQuestions = [
  {
    question: "What are the three main components that go into web design?",
    answers: ["JavaScript, JSON, jQuery", "HTML, CSS, JavaScript", "HTML, variables, Bootstrap","CSS, Terminal, Java"],
    correctAnswer: "b"
  },
  {
    question: "What does MERN stand for in MERN full stack?",
    answers: ["ModularDB, Express, Reach, Node.js", "MungoDB, Extracurricular, Rear, Null.js", "MongoDB, Express, React, Node.js", "MangoDB, Espresso, Reaction, NAN.js"],
    correctAnswer: "c"
  },
  {
    question: "What is a true / false statement called in JavaScript?",
    answers: ["String", "Function", "Boolean", "All of the above"],
    correctAnswer: "c"
  },
  {
      question: "What tool can be used to see if a JavaScript function is working or not?",
      answers: ["console.log", "council.log", "VS Code", "W3 Schools"],
      correctAnswer: "a"
    },
    {
      question: "What is the name of the CSS framework developed by Twitter?",
      answers: ["Bootheel", "Boolean", "Bootlaces", "Bootstrap"],
      correctAnswer: "d"
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
  
  nextQuestion(questionNumber);
}

function nextQuestion(questionIndex) {
  console.log(myQuestions[questionIndex].myQuestion)

  quiz.innerHTML = myQuestions[0].question;
  for (var i = 0; i < 4; i++){
  var button = $("<button>");
  button.addClass("answers");
  button.attr("data-answer",myQuestions[0].answers[i]);
  button.text(myQuestions[0].answers[i]);
  button.css("background-color", "slategrey");
  button.appendTo(quiz);
}

var userChoice = userChoice;

if (onclick(answer == myQuestions.correctAnswer)){
  myQuestions[i++];
}
else {
    myQuestions[i++];
    secondsLeft - 15;
}
  
nextQuestion(questionNumber);
}

//within next question function, write conditionals for right or wrong, include time penalties