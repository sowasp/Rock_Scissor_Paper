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

function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper or Scissors")
    return choice.toLowerCase()
}


let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++
        return "computer won"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return "computer won"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return "computer won"
    } else if (computerChoice === "rock" && humanChoice === "paper"){
        humanScore++
        return "human won"
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++
        return "human won"
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++
        return "human won"
    } else {
        return "Tie"
    }
}

function playGame(){
    let result = playRound(getHumanChoice(), getComputerChoice())
    console.log(result)
}

for(let i = 0; i < 5; i++) {
    playGame()
}

console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`)