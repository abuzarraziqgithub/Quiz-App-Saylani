"use strict";
/*
-> THIS FILE EXPLAINED THE IMPORATNT POINTS  OF HOW THE QUIZ APP WORKS BEHIND THE SCENES.
-> ALL JS FILE CODE IS DEFINED HERE:

*/

// THE FORM FILE:
// THE DATA IS STORED IN THE SESSION STORAGE:
// SESSION STORAGE IS THE DATA IS STORED UNTIL THE BROWSER OR TAB CLOSED.
// WE SET ITEMS , PASSING THE NAME OF THE OBJECT , AND THEN VALUES OF THE DATA.
// THE JSON.STRINGFY , IS USED TO CONVERT THE DATA INTO STRING.
sessionStorage.setItem(
  "studentData",
  JSON.stringify(
    `Roll No : ${rollNo}  ,  Name : ${name} ,  Batch : ${batch} ,  Section : ${section}`
  )
);
// IT WILL GO TO THE GIVEN FILE PATH.
window.location.href = "../Quiz-Page/index.html";
