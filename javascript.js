let decision;
let computerSelection;
let playerSelection;
let playerPoints = 0;
let comptuerPoints = 0;

// Allows for random selection between rock, paper and scissors for the computer
function computerPlay() {
    let choice;
    let x = Math.floor(Math.random() * 10);
    if (x <= 3) {
        choice = "rock";
    } else if (x <= 6) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice
}

// Player choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'rock') {
            playerSelection = 'rock';
        } else if (button.id == 'paper') {
            playerSelection = 'paper';
        } else if (button.id == 'scissors') {
            playerSelection = 'scissors';
        }

        playGame(playerSelection, computerSelection);

        if (playerPoints === 0 || comptuerPoints === 0) {
            winner.textContent = ""
        }

        if (playerPoints === 5 || comptuerPoints === 5) {
            declareWinner();
        }
    })
});

const results = document.createElement('div');
results.classList.add('results');
document.body.appendChild(results)

const winner = document.createElement('div');
winner.classList.add('winner');
document.body.appendChild(winner);

function playerScore(playerSelection, computerSelection) {
    playerPoints += 1
    decision = (`You Win! you chose ${playerSelection} and comptuer chose ${computerSelection}`);
    results.textContent = `${decision}` + ' ' + `(${playerPoints} to ${comptuerPoints})`;
    return playerPoints
}

function computerScore(playerSelection, computerSelection) {
    comptuerPoints += 1
    decision = (`You lose! you chose ${playerSelection} and computer chose ${computerSelection}`);
    results.textContent = `${decision}` + ' ' + `(${playerPoints} to ${comptuerPoints})`;
    return comptuerPoints
}


// best of 11 game of rock paper scissors
function playGame(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        decision = (`Tie! you chose ${playerSelection} and computer chose ${computerSelection}`);
        results.textContent = `${decision}` + ' ' + `(${playerPoints} to ${comptuerPoints})`;
    } else if
        (playerSelection == "rock" & computerSelection == "paper" ||
        playerSelection == "paper" & computerSelection == "scissors" ||
        playerSelection == "scissors" & computerSelection == "rock") {
        computerScore(playerSelection, computerSelection);
    } else if
        (playerSelection == "rock" & computerSelection == "scissors" ||
        playerSelection == "paper" & computerSelection == "rock" ||
        playerSelection == "scissors" & computerSelection == "paper") {
        playerScore(playerSelection, computerSelection);
    }
}

function declareWinner() {
    resetGame();
    if (playerPoints > comptuerPoints) {
        winner.textContent = 'You are the champion!'
    } else {
        winner.textContent = 'Computer prevails and is the champion!'
    }
}

function resetGame() {
    playerPoints = 0
    comptuerPoints = 0
    results.textContent = ""
}