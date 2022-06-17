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

computerPlay()