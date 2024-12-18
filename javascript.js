
let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {

    console.log("Your choice: " + humanChoice);
    console.log("Computer's choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("You win! Rock smashes scissors.")
            humanScore++
        } else {
            console.log("You lose! Paper covers rock.")
            computerScore++
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper covers rock.")
            humanScore++
        } else {
            console.log("You lose! Scissors cut paper.")
            computerScore++
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            console.log("You win! Scissors cut paper.")
            humanScore++
        } else {
            console.log("You lose! Rock smashes scissors.")
            computerScore++
        }
    }
}  


const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

function getComputerChoice() {    
    const computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0)
     return "Rock";
    else if (computerChoice == 1)
     return "Paper"
    else if (computerChoice == 2)
     return "Scissors"    
    return computerChoice
 }
 
 function getHumanChoice() {
     const humanChoice = prompt("Will you pick Rock, Paper or Scissors?");
     if (humanChoice.toLowerCase() === "rock")
        return "Rock";
    else if (humanChoice.toLowerCase() === "paper")
        return "Paper";
    else if (humanChoice.toLowerCase() === "scissors")
        return "Scissors"
}
    















