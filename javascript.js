function computerPlay() {
    let choice = ""
    let x = Math.floor(Math.random() * 10);
    if (x <= 3) {
        choice = "rock"
    } else if (x <= 6) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    // console.log(choice)
    return choice
}

function playRound(playerSelection, computerSelection) {
    let decision = ""
    if (playerSelection == computerSelection) {
        decision = "Tie"
        console.log(`Tie! you chose ${playerSelection} and computer chose ${computerSelection}`)
    } else if (playerSelection == "rock" & computerSelection == "paper" || playerSelection == "paper" & computerSelection == "scissors" || playerSelection == "scissors" & computerSelection == "rock") {
        decision = "Loss"
        console.log(`You lose! you chose ${playerSelection} and computer chose ${computerSelection}`)
    } else if (playerSelection == "rock" & computerSelection == "scissors" || playerSelection == "paper" & computerSelection == "rock" || playerSelection == "scissors" & computerSelection == "paper") {
        decision = "Win"
        console.log(`You Win! you chose ${playerSelection} and comptuer chose ${computerSelection}`)
    }
    return decision
}

function game() {
    let playerPoints = 0
    let comptuerPoints = 0
    for (let i = 1; i < 6; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, Scissors best of 5").toLowerCase()
        playRound(playerSelection, computerSelection); {
            if (playerSelection == computerSelection) {
                i--
                console.log(playerPoints, "to", comptuerPoints)
            } else if (playerSelection == "rock" & computerSelection == "paper" || playerSelection == "paper" & computerSelection == "scissors" || playerSelection == "scissors" & computerSelection == "rock") {
                comptuerPoints++
                console.log(playerPoints, "to", comptuerPoints)
                if (comptuerPoints == 3) {
                    break
                }
            } else if (playerSelection == "rock" & computerSelection == "scissors" || playerSelection == "paper" & computerSelection == "rock" || playerSelection == "scissors" & computerSelection == "paper") {
                playerPoints++
                console.log(playerPoints, "to", comptuerPoints)
                if (playerPoints == 3) {
                    break
                }
            }
        }
        // console.log(i)
    }
} 

// let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase()
// const playerSelection = "Rock".toLowerCase();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection))
console.log(game())