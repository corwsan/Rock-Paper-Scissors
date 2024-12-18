
let humanScore = 0
let computerScore = 0

function getComputerChoice() {    
   let computerChoice = Math.floor(Math.random() * 3)
   if (computerChoice == 0)
    return "Rock";
   else if (computerChoice == 1)
    return "Paper"
   else if (computerChoice == 2)
    return "Scissors"    
   return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Will you pick Rock, Paper or Scissors?")
    
    return humanChoice;
}
//console.log("Computer chose: " + getComputerChoice() + "\nYou chose: " + getHumanChoice())
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

function playRound (getHumanChoice, getComputerChoice) {
    

    console.log("You chose: " + humanChoice + "\nComputer Chose " + computerChoice);

}


playRound() 






