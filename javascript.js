function getComputerChoice(){
    let ranChoice = Math.random()
    if (ranChoice < 0.33) {
        return "rock"
    } else if (ranChoice < 0.66 ) {
        return "scissors"
    } else {
        return "paper"
    }
}

console.log(getComputerChoice())