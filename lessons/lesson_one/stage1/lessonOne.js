//introduction video 
const next = `
<a id="toExcercise" href="/lessons/lesson_one/stage1/problem.html">To exercise</a>
`;

const redirect = () => {
console.log("times up mate");
}

setTimeout(redirect, 20000);

//give hint onclick
// const hint = document.getElementById("hint");
// hint.addEventListener('click', () => {
//     console.log("running");
//     document.getElementById("hintarea").insertAdjacentHTML('afterbegin', hint);
//     document.getElementById("answer2").innerHTML = hint;

//     var value = option.value
//     console.log(value);
//     const hint = `
//      <audio></audio>
//      `

//     if (option.value == "option1"){
//         console.log("correct");
//     }
// })

//multiple choice questions 
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkCorrect();
})

//questions and correct answers for each exercise
const question1 = { 
    "question": "Adding Element 1", 
    "correctAns": "<h1>This is a heading</h1>" 
}
const question2 = {
    "question": "Adding Element 2",
    "correctAns": ""
}

const question3 = {
    "question": "Adding Element 3",
    "correctAns": ""
}


const questions = [
    question1,
    question2,
    question3
]



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

    if (userAnswer == questions[0].correctAns){
        console.log("correct answer");
        alert("correct answer");
        document.getElementById("buttonContainer").innerHTML = buttonGroup;
    } else if (userAnswer == null) {
        alert("You need to select an answer");
    }else {
        console.log("incorrect");
        alert("incorrect");
    }
}



//respond when video ends
// let video = document.getElementById("introToHTML").addEventListener('ended', onChange, false);

// let iframe = document.querySelector("iframe");
// iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args"}', '*');





