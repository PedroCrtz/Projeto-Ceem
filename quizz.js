const question = document.querySelector(".queston");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textfinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import question from "./question.js";

let currrentIndex = 0;
let questionCorrect = 0;

function loadquestion(){
    spnQtd.innerHTML = "${currentIndex + 1}/${question.length}";
    const item = question[currrentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;
}

loadquestion();