let humanScore = 0;
let computerScore = 0;
let roundNum = 0;

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
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

function playRound(humanChoice,computerChoice) {
    const div = document.createElement('div');
    result.appendChild(div)
    if (humanChoice === computerChoice) {
        div.textContent="Draw! human: "+ humanChoice +", computer: "+ computerChoice;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        div.textContent="You win! human: "+ humanChoice +", computer: "+ computerChoice;
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        div.textContent="You lose! human: "+ humanChoice +", computer: "+ computerChoice;
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        div.textContent="You lose! human: "+ humanChoice +", computer: "+ computerChoice;
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        div.textContent="You win! human: "+ humanChoice +", computer: "+ computerChoice;
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        div.textContent="You win! human: "+ humanChoice +", computer: "+ computerChoice;
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        div.textContent="You lose! human: "+ humanChoice +", computer: "+ computerChoice;
        computerScore++;
    }
    roundNum++;
}

buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        if (checkRound() === true) {} else {
            playRound(button.className,computerSelection);
        }
    })
})

const newGameBtn = document.createElement('button')
newGameBtn.textContent = "NewGame" ;
container.appendChild(newGameBtn);

newGameBtn.addEventListener('click', () => {
    result.textContent= '';
    roundNum = 0;
    humanScore = 0;
    computerScore = 0;
})

function checkRound () {
    if (roundNum === 5){
        const div = document.createElement('div');
        result.appendChild(div)
        if (humanScore > computerScore){
            div.textContent="Winner is: human, Score: human("+humanScore+"), computer("+computerScore+")"
            return true;
        } else if (humanScore < computerScore) {
            div.textContent="Winner is: computer, Score: human("+humanScore+"), computer("+computerScore+")"
            return true;
        } else {
            div.textContent="Draw!. Score: human("+humanScore+"), computer("+computerScore+")"
            return true;
        }
    }
}
    



