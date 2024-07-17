console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let randomNum =Math.floor(Math.random()*3)+1;
    if (randomNum === 1) {
        return rock;
    } else if (randomNum === 2) {
        return paper;
    } else {
        return scissors;
    }
}

function getHumanChoice() {
    let input = prompt("Write down : 'rock', 'paper' or 'scissors' ",0);
    if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") {
    return input.toLowerCase();
    } else {
        alert("invalid input, try again.")
        getHumanChoice();
    }
}




