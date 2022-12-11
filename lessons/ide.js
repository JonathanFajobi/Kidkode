const html_code = document.querySelector(".html-code textarea");
const css_code = document.querySelector(".css-code textarea");
const result = document.querySelector("#result");

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
              <input id="submitCode" type="submit" onClick="sub()"></input>
            </span>

            <span class="submit-btn signika disabled" style="display: inline;">
              <i class="bi bi-download"></i>
              <input id="submit" type="button" onClick="downloadFile()">Download code</input>
            </span>
        </div>

        <iframe id="result"></iframe>
    </div>
</main>
`;

checkIDE = () => {
  console.log("Submitted");

  var userAnswer = html_code.value;
  var compare = userAnswer.toLowerCase();
  console.log(userAnswer);
  console.log(ideQuestions[0].correctAns);

  if (userAnswer == ideQuestions[0].correctAns) {
    alert("Correct answer");
    window.location.replace("complete.html");
  } else if (userAnswer == null) {
    alert("You need to select an answer");
  } else {
    alert("Incorrect");
  }
};

document.getElementById("insert").innerHTML = frontend;

//allow user to submit after making changes
html_code.addEventListener("input", () => {
  console.log("Updated");
});

//make sure the submit button can trigger an action to compare the code in both fields to an answer
let html;
let css;
let codeObject = { htmlCode: "", cssCode: "" };

run = () => {
  localStorage.setItem("html_code", html_code.value);
  localStorage.setItem("css_code", css_code.value);

  // execute html + css
  result.contentDocument.body.innerHTML =
    `<style>${localStorage.css_code}</style>` + localStorage.html_code;

  html = html_code.value;
  css = css_code.value;

  codeObject.htmlCode = html;
  codeObject.cssCode = css;

  //user cannot submit if they have not clickedon field -- add something to stop user from cliking wihtout typing
  sub = () => {
    console.log("Logged:" + codeObject.htmlCode);
    checkIDE();
  };
};

// log every letter after user types in textarea
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;

const ideQuestion1 = {
  question: "Adding Element 1",
  correctAns: "<button>hello world</button>",
};

let link = "https://www.google.com";
const ideQuestion2 = {
  question: "Adding Element 2",
  correctAns: "<a href={link}>google</button>",
};

const ideQuestion3 = {
  question: "Styling Element 1",
  correctAns: "<button style='/background-color:yellow/'>hello world</button>",
};

const ideQuestions = [ideQuestion1, ideQuestion2, ideQuestion3];

