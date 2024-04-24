"use strict";
const correctAnswers = {
  question1: "Hyper Text Markup Language",
  question2: "Python Script",
  question3: "Cascading Style Sheet",
  question4: "CSS",
  question5: "JAVASCRIPT",
  question6: "BACK-END DEVELOPMENT",
  question7: "HTML",
  question8: "{a}",
};

function submitQuiz(event) {
  event.preventDefault();

  // validate answers
  let answers = {};
  for (let question in correctAnswers) {
    let radios = document.getElementsByName(question);
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        answers[question] = radios[i].value;
        break;
      }
    }
    if (!answers[question]) {
      alert("Please complete all questions");
      return;
    }
  }

  // store data in Session Storage
  sessionStorage.setItem("quizData", JSON.stringify({ answers }));

  // redirect to results page
  window.location.href = "../Resullt-page/index.html";
}
