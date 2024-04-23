"use strict";

// const studentForm = document.querySelector(".login-sub-parent-div");
// const submitBtn = document.getElementById("form-subt-Btn");

// submitBtn.addEventListener("click", function () {
//   const rollNo = document.getElementById("form-roll-no");
//   const name = document.getElementById("form-name");
//   const batch = document.getElementById("form-batch");
//   const section = document.getElementById("form-section");

//   const studentData = {
//     rollNo: rollNo,
//     name: name,
//     batch: batch,
//     section: section,
//   };

//   // Convert studentData to JSON string and store in session storage
//   sessionStorage.setItem("studentData", JSON.stringify(studentData));

//   // Display success message:
// });
// Get references to form elements
const rollNoInput = document.getElementById("form-roll-no");
const nameInput = document.getElementById("form-name");
const batchInput = document.getElementById("form-batch");
const sectionInput = document.getElementById("form-section");
const submitBtn = document.getElementById("form-subt-Btn");
const successMessage = document.querySelector(".message-parent");

// Add event listener to the submit button
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if any input field is empty
  if (
    rollNoInput.value.trim() === "" ||
    nameInput.value.trim() === "" ||
    batchInput.value.trim() === "" ||
    sectionInput.value.trim() === ""
  ) {
    alert("Please fill out all fields!");
    return;
  }

  // Create an object with student data
  const studentData = {
    rollNo: rollNoInput.value,
    name: nameInput.value,
    batch: batchInput.value,
    section: sectionInput.value,
  };

  // Convert studentData to JSON string and store in session storage
  sessionStorage.setItem("studentData", JSON.stringify(studentData));

  // Show success message
  successMessage.style.display = "block";

  // Hide success message after 3 seconds
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 1000);
});
