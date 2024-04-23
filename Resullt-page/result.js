"use strict";

// Retrieve data from Session Storage
var studentData = JSON.parse(sessionStorage.getItem("studentData"));
var quizData = JSON.parse(sessionStorage.getItem("quizData"));

// Display the details
document.getElementById("student-details").textContent =
  "Student Details: " + JSON.stringify(studentData);
document.getElementById("quiz-topic").textContent =
  "Quiz Topic:  WEB AND MOBILE APPLICATION DEVELOPMENT";
document.getElementById("selected-answers").textContent =
  "Selected Answers: " + JSON.stringify(quizData.answers);
// You'll need to replace this with the actual correct answers
document.getElementById("correct-answers").textContent =
  "Correct Answers: " + JSON.stringify(correctAnswers);
// You'll need to calculate the total marks based on the selected answers and correct answers
document.getElementById("total-marks").textContent =
  "Total Marks: " + totalMarks;
