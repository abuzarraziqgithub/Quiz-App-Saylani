"use strict";
function submitForm(event) {
  event.preventDefault();

  // validate inputs
  var rollNo = document.getElementById("form-roll-no").value;
  var name = document.getElementById("form-name").value;
  var batch = document.getElementById("form-batch").value;
  var section = document.getElementById("form-section").value;

  if (!rollNo || !name || !batch || !section) {
    alert("Please fill all fields");
    return;
  }

  // show success message
  var messageBox = document.querySelector(".message-box");
  messageBox.style.display = "block";

  // store data in Session Storage
  sessionStorage.setItem(
    "studentData",
    JSON.stringify({ rollNo, name, batch, section })
  );

  // delay redirection to quiz page
  setTimeout(function () {
    // hide success message
    messageBox.style.display = "none";

    // redirect to quiz page
    window.location.href = "../Quiz-Page/index.html";
  }, 1000);
}
