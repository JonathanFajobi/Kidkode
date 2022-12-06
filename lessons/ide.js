const frontend = `
<main id="ideBody">
    <div class="code-editor">
        <div class="code grd-background">

            <div class="html-code">
                <h6 class="signika" style="color: white">HTML</h6>
                <textarea id="html"></textarea>
            </div>

            <div class="css-code">
                <h6 class="signika" style="color: white">CSS</h6>
                <textarea id="css"></textarea>
            </div>

            <span class="submit-btn signika" style="display: inline;">
              <i class="bi bi-check2-square"></i>
              <input id="submitCode" type="submit" onClick="sub()">Submit Task</input>
            </span>

            <span class="submit-btn signika" style="display: inline;">
              <i class="bi bi-download"></i>
              <input id="submit" type="button">Download code</input>
            </span>
        </div>
        <iframe id="result"></iframe>
    </div>
</main>
`;

checkIDE = () => {
  console.log("Submitted");

  var userAnswer = html_code.value;
  console.log(userAnswer);
  console.log(ideQuestions[0].correctAns);

  if (userAnswer == ideQuestions[0].correctAns) {
    console.log("correct answer");
    alert("correct answer");
    window.location.replace("complete.html");
  } else if (userAnswer == null) {
    alert("You need to select an answer");
  } else {
    console.log("incorrect");
    alert("incorrect");
  }
};

document.getElementById("insert").innerHTML = frontend;

const html_code = document.querySelector(".html-code textarea");
const css_code = document.querySelector(".css-code textarea");
const result = document.querySelector("#result");

//allow user to submit after making changes
html_code.addEventListener("input", () => {
  console.log("Updated");
});

//make sure the submit button can trigger an action to compare the code in both fields to an answer
let html;
let css;
let codeObject = { htmlCode: "", cssCode: "" };

run = () => {
  // Storing data in Local Storage
  localStorage.setItem("html_code", html_code.value);
  localStorage.setItem("css_code", css_code.value);

  // Executing HTML, CSS & JS code
  result.contentDocument.body.innerHTML =
    `<style>${localStorage.css_code}</style>` + localStorage.html_code;

  console.log(html);
  html = html_code.value;
  css = css_code.value;

  codeObject.htmlCode = html;
  codeObject.cssCode = css;

  //user cannot submit if they have not click ono field -- add something to stop user from cliking wihtout typing
  sub = () => {
    console.log("Logged:" + codeObject.htmlCode);
    checkIDE();
  };
};

// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;

//ide questions
const ideTask1 = `
<div>
    <h5>Create a button over here</h5> <i class="bi bi-arrow-right-square-fill"></i>
    <p>When you think you have done it correctly, click the submit code button</p>
</div>
`;



const ideQuestion1 = {
  question: "Adding Element 1",
  correctAns: "<button>Hello World</button>",
};

const ideQuestion2 = {
  question: "Adding Element 2",
  correctAns: "",
};

const ideQuestion3 = {
  question: "Adding Element 3",
  correctAns: "",
};

const ideQuestions = [ideQuestion1, ideQuestion2, ideQuestion3];

// //open popup question
// const popupTask = document.getElementById("question-area");
// popupTask.addEventListener("click", () => {
//   console.log("output");
//   document.getElementById("question-area").insertAdjacentHTML('afterbegin', ideTask);
//   document.getElementById("question-area").style.opacity = '1';
// });
