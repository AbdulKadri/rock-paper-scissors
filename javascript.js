function computerPlay() {
    let choice = undefined
    let x = Math.floor(Math.random() * 10);
    if (x <= 3) {
        choice = "rock"
    } else if (x <= 6) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    console.log(choice)
    return choice
}

function playRound(playerSelection, computerSelection) {
    let decision = undefined
    if (playerSelection == computerSelection) {
        decision = "Tie! you chose the same things"
    } else if (playerSelection == "rock" & computerSelection == "paper" || playerSelection == "paper" & computerSelection == "scissors" || playerSelection == "scissors" & computerSelection == "rock") {
        decision = "You lose!"
    } else if (playerSelection == "rock" & computerSelection == "scissors" || playerSelection == "paper" & computerSelection == "rock" || playerSelection == "scissors" & computerSelection == "paper") {
        decision = "You Win!"
    }
    return (decision)
}

const playerSelection = "Rock".toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))