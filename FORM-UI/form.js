"use strict";
function submitForm(event) {
  event.preventDefault();

  // validate inputs
  const rollNo = document.getElementById("form-roll-no").value;
  const name = document.getElementById("form-name").value;
  const batch = document.getElementById("form-batch").value;
  const section = document.getElementById("form-section").value;

  if (!rollNo || !name || !batch || !section) {
    // const alertMessage = document.querySelector(".alert-box");
    // alertMessage.style.display = "block";
    alert("Please Fill the Form Completely");
    return;
  }
  // show success message
  const messageBox = document.querySelector(".message-box");
  messageBox.style.display = "block";

  // store data in Session Storage
  sessionStorage.setItem(
    "studentData",
    JSON.stringify(
      `Roll No : ${rollNo}  ,  Name : ${name} ,  Batch : ${batch} ,  Section : ${section}`
    )
  );

  // delay redirection to quiz page
  setTimeout(function () {
    // hide success message
    messageBox.style.display = "none";

    // redirect to quiz page
    window.location.href = "../Quiz-Page/index.html";
  }, 1500);
}

// const exitMessageBtn = document.getElementById("alert-ext-btn");
// exitMessageBtn.addEventListener("click", function () {
//   const exitBtn = document.querySelector(".alert-box");
//   exitBtn.style.display = "none";
// });
