var timeEl = document.querySelector(".time");
var startEl = document.getElementById("start");
var containerEl = document.querySelector(".container");
var quizContainer = document.querySelector("#quiz");
var directionsEl = document.querySelector(".directions");
var score = 0;
var secondsLeft = 75;
//global index for questions, increment by 1 to cycle through
var questionNumber = 0;
var questions = [
  {
    question: "What are the three main components that go into web design?",
    answers: {
      a: "JavaScript, JSON, jQuery",
      b: "HTML, CSS, JavaScript",
      c: "HTML, variables, Bootstrap",
      d: "CSS, Terminal, Java"
    },
    correctAnswer: "b"
  },
  {
    question: "What does MERN stand for in MERN full stack?",
    answers: {
      a: "ModularDB, Express, Reach, Node.js",
      b: "MungoDB, Extracurricular, Rear, Null.js",
      c: "MongoDB, Express, React, Node.js",
      d: "MangoDB, Espresso, Reaction, NAN.js"
    },
    correctAnswer: "c"
  },
  {
    question: "What is a true / false statement called in JavaScript?",
    answers: {
      a: "String",
      b: "Function",
      c: "Boolean",
      d: "All of the above"
    },
    correctAnswer: "c"
  },
  {
      question: "What tool can be used to see if a JavaScript function is working or not?",
      answers: {
        a: "console.log",
        b: "council.log",
        c: "VS Code",
        d: "W3 Schools"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of the CSS framework developed by Twitter?",
      answers: {
        a: "Bootheel",
        b: "Boolean",
        c: "Bootlaces",
        d: "Bootstrap"
      },
      correctAnswer: "d"
    }
];

function startQuiz() {
  event.preventDefault();
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!";

  
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("BZZZZZZZZT! You're out of time!");
    }

  }, 1000);
  
  nextQuestion(questionNumber);
}

function nextQuestion(questionIndex) {
  console.log(questions[questionIndex].question)
  quiz.innerText = questions[0];
  
  quizContainer.appendChild(p)
  //feed parameter of current question
}

//next/submit buttons beneath questions
//within next question function, write conditionals for right or wrong, include time penalties.

