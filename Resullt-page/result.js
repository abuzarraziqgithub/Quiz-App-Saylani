// "use strict";

// // Retrieve data from Session Storage
// var studentData = JSON.parse(sessionStorage.getItem("studentData"));
// var quizData = JSON.parse(sessionStorage.getItem("quizData"));

// // Display the details
// document.getElementById("student-details").textContent =
//   "Student Details: " + JSON.parse(studentData);
// document.getElementById("quiz-topic").textContent =
//   "Quiz Topic:  WEB AND MOBILE APPLICATION DEVELOPMENT";
// document.getElementById("selected-answers").textContent =
//   "Selected Answers: " + JSON.parse(quizData.answers);
// // You'll need to replace this with the actual correct answers
// document.getElementById("correct-answers").textContent =
//   "Correct Answers: " + JSON.parse(correctAnswers);

// Retrieve data from Session Storage
var studentData = JSON.parse(sessionStorage.getItem("studentData"));
var quizData = JSON.parse(sessionStorage.getItem("quizData"));

// Assuming correctAnswers is an array containing the correct answers
var correctAnswers = JSON.parse(sessionStorage.getItem("correctAnswers"));

// Count the number of selected answers
var numSelectedAnswers = Object.keys(quizData.answers).length;

// Display the details
document.getElementById("student-details").textContent =
  "Student Details: " + studentData;
document.getElementById("quiz-topic").textContent =
  "Quiz Topic:  WEB AND MOBILE APPLICATION DEVELOPMENT";
// Display the number of selected answers
document.getElementById("selected-answers").textContent =
  "Selected Answers: " + numSelectedAnswers;
// Display the length of correct answers instead of the answers themselves
document.getElementById("correct-answers").textContent =
  "Correct Answers: " + correctAnswers.length;
