let plyrScore = 0;
let compScore = 0;
const plyrScoreMsg = document.getElementById("user-num");
const compScoreMsg = document.getElementById("comp-num");
const gameMsg = document.querySelector(".msg");
const btnBox = document.querySelector(".btn");

const choices = ["Rock", "Paper", "Scissor"];

// Win rules: what beats what
const winRules = {
    "Rock": "Scissor",
    "Paper": "Rock",
    "Scissor": "Paper"
};

function compChoice() {
    const compIndx = Math.floor(Math.random() * 3);
    return choices[compIndx];
}

function play(v_plyrChoice) {
    if (plyrScore >= 5 || compScore >= 5) return; // Prevent playing after game ends

    const v_compChoice = compChoice();

    if (v_plyrChoice === v_compChoice) {
        gameMsg.innerText = `Tie! Both chose ${v_compChoice}`;
    } else if (winRules[v_plyrChoice] === v_compChoice) {
        gameMsg.innerText = `You Win! ${v_plyrChoice} beats ${v_compChoice}`;
        plyrScore++;
        plyrScoreMsg.innerText = plyrScore;
    } else {
        gameMsg.innerText = `Computer Wins! ${v_compChoice} beats ${v_plyrChoice}`;
        compScore++;
        compScoreMsg.innerText = compScore;
    }

    checkWinner();
}

function rock() { play("Rock"); }
function paper() { play("Paper"); }
function scissor() { play("Scissor"); }

function checkWinner() {
    if (plyrScore === 5) {
        gameMsg.innerText = "Hurrah! You are the winner!";
        showRestart();
    } else if (compScore === 5) {
        gameMsg.innerText = "Computer is the winner!";
        showRestart();
    }
}

function showRestart() {
    // Check if restart button already exists
    if (document.getElementById("btnRt")) return;

    const btn = document.createElement("button");
    btn.innerText = "Restart Game";
    btn.id = "btnRt";
    btn.onclick = function () {
        plyrScore = 0;
        compScore = 0;
        plyrScoreMsg.innerText = 0;
        compScoreMsg.innerText = 0;
        gameMsg.innerText = "Choose your move!";
        btn.remove();
    };
    btnBox.appendChild(btn);
}