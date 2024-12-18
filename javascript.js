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

function getHumanChoice () {

    let humanChoice = prompt("Will you pick Rock, Paper or Scissors?")
    
    return humanChoice;
}

getHumanChoice ()

console.log("You chose: " + getHumanChoice() + "\nComputer Chose : " + computerChoice)

/*
let humanScore = 0
let computerScore = 0

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()


function playRound (humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice + "\nComputer Chose " + computerChoice);

}


playRound() */






