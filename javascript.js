const btnContainer = document.querySelector("#btn-container");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

btnContainer.appendChild(rockBtn);
btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorsBtn);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent;
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        //console.log(button.textContent)
    });
});


let round = 1;
    console.log("Round: " +round);
let humanScore = 0;
    console.log(humanScore);
let computerScore = 0;
    console.log(computerScore);

/*playGame ();

function playGame () {

    while (round <= 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round: " + round + "\nHuman Score: " + humanScore + "\nComputer Score : " + computerScore);
        round++        
    }
    if (humanScore === computerScore) {
        console.log("It's a tie! \nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
    } else if (humanScore > computerScore) {
            console.log("You win! \nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
        } else {
            console.log("You lose! \nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
    }
} */


    
function playRound (humanChoice, computerChoice) {

    console.log("Your choice: " + humanChoice);
    console.log("Computer's choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("You win! Rock smashes scissors.");
            humanScore++;
        } else {
            console.log("You lose! Paper covers rock.");
            computerScore++;
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper covers rock.");
            humanScore++;
        } else {
            console.log("You lose! Scissors cut paper.");
            computerScore++;
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            console.log("You win! Scissors cut paper.");
            humanScore++;
        } else {
            console.log("You lose! Rock smashes scissors.");
            computerScore++;
        }
    }
}  

function getComputerChoice() {    
    const computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
     return "Rock"
    } else if (computerChoice == 1) {
     return "Paper"
    } else if (computerChoice == 2) {
     return "Scissors" 
    }   
    return computerChoice
 }
 
 function getHumanChoice() {
     const humanChoice = prompt("Will you pick Rock, Paper or Scissors?");
     if (humanChoice.toLowerCase() === "rock") {
        return "Rock"; 
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (humanChoice.toLowerCase() === "scissors")
        return "Scissors"
}
    















