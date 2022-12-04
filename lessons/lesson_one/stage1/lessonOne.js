//introduction video
const next = `
<a id="toExcercise" href="/lessons/lesson_one/stage1/problem.html">To exercise</a>
`;

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
  correctAns: "",
};

const question3 = {
  question: "Adding Element 3",
  correctAns: "",
};

const questions = [question1, question2, question3];

const buttonGroup = `
<a href="../stages.html">
    <button>Pick a stage!</button>
</a>

<a href="complete.html">
    <button type="button">Next</button>
</a>
`;

checkCorrect = () => {
  console.log("submitted");

  var userAnswer = document.querySelector("input[name=answers]:checked").value;
  console.log(userAnswer);
  console.log(questions[0].correctAns);

  if (userAnswer == questions[0].correctAns) {
    console.log("correct answer");
    alert("correct answer");
    document.getElementById("buttonContainer").innerHTML = buttonGroup;
    document.getElementById("ideQContainer").innerHTML = idetask1;
  } else if (userAnswer == null) {
    alert("You need to select an answer");
  } else {
    console.log("incorrect");
    alert("incorrect");
  }
};

//respond when video ends
// let video = document.getElementById("introToHTML").addEventListener('ended', onChange, false);

let iframe = document.querySelector("#testvideo iframe");
iframe.contentWindow.postMessage(
  '{"event":"command","func":"pauseVideo","args"}',
  "*"
);

//if the user has spent a long time on the exercise, output a help popup
const helpText = () => {
  console.log("times up mate");
};

setTimeout(helpText, 20000);

setTimeout(() => {}, 20000);

//give hint onclick
const hint = document.getElementById("hint");
hint.addEventListener("click", () => {
  document.getElementById("popup-area").insertAdjacentHTML('afterbegin', popup);
  document.getElementById("popup-area").style.opacity = '1';
});

//may not be needed as if we can alert method 
const popup = `
<div class="pop-up-box" id="help">
  <button id="cross" onclick="toggle()">
      <i class="bi bi-x-square-fill"></i>
  </button>
    <p>Think about the difference between semantics and actual styling tags</p>
    <p>Try typing in the HTML box on the right hand side to find the answer</p>
</div>
`;

const toggle = () => {
  const popuparea = document.getElementsByClassName("pop-up-box");
  document.getElementById("popup-area").style.opacity = '0';
  // cross.remove();
}



// const popuparea = document.getElementById("popup-area");
// const cross = document.getElementById("cross");
// const popupbox = document.getElementById("help");

// cross.addEventListener("click", () => {
//   console.log("cross");
//   popupbox.remove();
//   cross.remove()
// });


// const cross = document.getElementById("cross");
// cross.addEventListener("click", () => {
//   console.log("cross");
//   popupbox.remove();
//   cross.remove()
// });

// const target = document.getElementById("target");

// target.addEventListener('click', () => target.style.opacity = '0');
// // If you want to remove it from the page after the fadeout
// target.addEventListener('transitionend', () => target.remove());