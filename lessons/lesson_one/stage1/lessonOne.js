//multiple choice questions
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkCorrect();
});

//questions and correct answers for each exercise
const question1 = {
  question: "Adding Element 1",
  correctAns: "<h1>This is a heading</h1>",
};

const question2 = {
  question: "Adding Element 2",
  correctAns: "<aside>This is an aside</aside>",
};

const question3 = {
  question: "Adding Element 3",
  correctAns: "<main>This is a main</main>",
};

const questions = [question1, question2, question3];

//lesson one instructions
const instruction = `
<div class="pop-up-box-2" id="help">
  <span>
    <button id="cross" onclick="toggleIns()">
        <i class="bi bi-x-square-fill"></i>
    </button>
    <h5 class="signika">Instructions</h5>
  </span>

  <ul id="help-list" style="font-size: 20px">
    <li>Play the video, there will be a walkthrough of each question</li>
    <li>Atfer watching the video, answer the multiple choice question</li>
    <li>If you are struggling, write in the box labelled html to test each option!</li>
    <li>After getting one question correct, another question will popup</li>
    <li>If you are really struggling, press the need help button for a hint!</li>
    <li><b>
      Dont try and cheat either!
      You have to type in the box yourself before answering a question - otherwise it wont work
     </b></li>
  </ul>
  
</div>
`;

//ide questions
const ideTask = `
  <div class="pop-up-box" id="question">
    <button id="cross" onclick="toggleQuestion()">
        <i class="bi bi-x-square-fill"></i>
    </button>
    <h5>Create a button over here</h5> <i class="bi bi-arrow-right-square-fill"></i>
    <h6>Use the text "Hello World"</h6>
    <p>When you think you have done it correctly, click the submit code button</p>
  </div>
`;

const buttonGroup = `
<a href="../stages.html" style="text-decoration : none;">
  <button class="submit-btn" type="button" style="margin: 10px 10px" >
  Pick a stage
  </button>
</a>

<a href="complete.html" style="text-decoration : none;">
  <button class="submit-btn" type="button" style="margin: 10px 10px">
    <i class="bi bi-lightbulb"></i>
    Next
  </button>
</a>   
`;

const popup = `
  <div class="pop-up-box" id="help">
    <button id="cross" onclick="toggle()" style="padding-bottom: 1rem; border: none; background-color:transparent">
        <i class="bi bi-x-square-fill"></i>
    </button>

    <button onclick="playAudio('/assets/sound/HintSound.m4a')" style="padding-bottom: 1rem; border: none; background-color:transparent">
    <i class="bi bi-volume-up-fill"></i>
    </button>

    <p>Think about the difference between semantics and actual styling tags</p>
    <p>Try typing in the HTML box on the right hand side to find the answer</p>
  </div>
`;

checkCorrect = () => {
  console.log("submitted");

  var userAnswer = document.querySelector("input[name=answers]:checked").value;
  console.log(userAnswer);
  console.log(questions[0].correctAns);

  if (userAnswer == questions[0].correctAns) {
    console.log("correct answer");
    alert("Correct answer");
    document.getElementById("buttonContainer").innerHTML = buttonGroup;
    document.getElementById("question-area").innerHTML = ideTask;
  } else if (userAnswer == null) {
    alert("You need to select an answer");
  } else {
    console.log("incorrect");
    document.getElementById("hint").disabled = false;
    alert("Incorrect");
  }
};

//inform user on what not to do, and why they wont get feedback if they do that
window.addEventListener("load", () => {
  document.getElementById("hint").disabled = true;
  document
    .getElementById("instruction-area")
    .insertAdjacentHTML("afterbegin", instruction);
  document.getElementById("instruction-area").style.opacity = "1";
});

//if the user has spent a long time on the exercise, output a help popup
const helpText = () => {
  console.log("Try typing in the code editor to find out the solution!");
};

setTimeout(helpText, 20000);

setTimeout(() => {}, 20000);

//open popup
const hint = document.getElementById("hint");
hint.addEventListener("click", () => {
  document.getElementById("popup-area").innerHTML = popup;
  document.getElementById("popup-area").style.opacity = "1";
});

//hide popup
const toggle = () => {
  const popuparea = document.getElementsByClassName("pop-up-box");
  document.getElementById("popup-area").style.opacity = "0";
};

//hide question pop up
const toggleQuestion = () => {
  console.log("button has been clicked");
  const popuparea = document.getElementsByClassName("pop-up-box");
  document.getElementById("question-area").style.opacity = "0";
  document.getElementById("question").remove();
};

const questionButton = document.getElementById("showQ");
questionButton.addEventListener("click", () => {
  document.getElementById("question-area").innerHTML = ideTask;
  document.getElementById("question-area").style.opacity = "1";
});

//hide instructions
const toggleIns = () => {
  const instructionArea = document.getElementsByClassName("pop-up-box-2");
  const area = document.getElementById("instruction-area");
  area.style.opacity = "0";

  //remove the element after it has been faded out
  area.addEventListener("transitionend", () => area.remove());
};

//play hint sound
function playAudio(url) {
  new Audio(url).play();
}
