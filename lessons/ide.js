const frontend = `
<main id="ideBody">
    <div class="code-editor">
        <div class="code">
            <div class="html-code">
                <h6>HTML</h6>
                <textarea id="html"></textarea>
            </div>
            <div class="css-code">
                <h6>CSS</h6>
                <textarea id="css"></textarea>
            </div>
            <div>
                <button id="submitCode">Submit Task</button>
            </div>
        </div>
        <iframe id="result"></iframe>
    </div>
</main>
`;
{/* <input type="submit" id="submitCode" style="float:right"></input> */}
const ideQuestion1 = `
<div>
    <h5>Create a button</h5>
    <p>When you think you have done it correctly, click the submit code button</p>
</div>
`;

document.getElementById("insert").innerHTML = frontend;

const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const result = document.querySelector('#result');

// var tracker = document.getElementsByClassName(".html-code");
html_code.addEventListener("input", () => {
console.log("helloworld");
})
//make sure the submit button can trigger an action to compare the code in both fields to an answer
// const submitCode = document.querySelector('#submitCode button');
// submitCode.addEventlistener("click", () => {console.log("code has been submitted:");})


let html;
let css;


run = () => {
    // Storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    
    console.log(html);
    html = html_code.value;
    css = css_code.value;

    const codeObject = { "htmlCode": "", "cssCode":"" };
    codeObject.htmlCode = html;
    codeObject.cssCode = css;
    
    console.log(codeObject);
    // return codeObject;
}

//check user answers
window.addEventListener("load", () => {
    console.log("page loaded");

    const button = document.createElement("Button");
    button.innerText = "Submit Task"
    document.getElementById("submitCode").appendChild(button);
    document.getElementById("markup").innerText = button.outerHTML;

    // const buttonArea = document.getElementById("submitCode");
    // document.body.insertAdjacentHTML("afterbegin", buttonArea);
    
})

// setTimeout(() => {
//     var submitCode = document.getElementById("submitCode");

//     submitCode.addEventlistener("submit", () => {
//     console.log("code has been submitted:");
//     console.log(html);
//     })
// , 1000})




// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;

//ide questions
var hintButton = document.getElementById("hint");

hintButton.addEventListener("click",  () => {
    console.log("You are requesting a hint");
 })


