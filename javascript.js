const scoreContainer = document.querySelector("#score-container")
const btnContainer = document.querySelector("#btn-container");
const results = document.querySelector("#results");

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

//use new #results div to display results
//change console.logs to DOM methods
//create <p> in #results to display round result

const resultDraw = document.createElement("p");
resultDraw.textContent = "It's a tie!";
const resultWin = document.createElement("p");
resultWin.textContent = "You win!";
const resultLose = document.createElement("p");
resultLose.textContent= "You lose!";
    
function playRound (humanChoice, computerChoice) {

    console.log("Your choice: " + humanChoice);
    console.log("Computer's choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        results.appendChild(resultDraw.cloneNode(true));
        //console.log("It's a tie!");
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            results.appendChild(resultWin.cloneNode(true));
            //console.log("You win! Rock smashes scissors.");
            humanScore++;
        } else {
            results.appendChild(resultLose.cloneNode(true));
            //console.log("You lose! Paper covers rock.");
            computerScore++;
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            results.appendChild(resultWin.cloneNode(true));
            //console.log("You win! Paper covers rock.");
            humanScore++;
        } else {
            results.appendChild(resultLose.cloneNode(true));
            //console.log("You lose! Scissors cut paper.");
            computerScore++;
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            results.appendChild(resultWin.cloneNode(true));
            //console.log("You win! Scissors cut paper.");
            humanScore++;
        } else {
            results.appendChild(resultLose.cloneNode(true));
            //console.log("You lose! Rock smashes scissors.");
            computerScore++;
        }
    }
    round++;
    updateDisplays();
}  

function updateDisplays () {
    roundDisplay.textContent = "Round: " + round;
    humanScoreDisplay.textContent = "Players Score: " + humanScore;
    computerScoreDisplay.textContent = "Computer's Score: " + computerScore;
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

const roundDisplay = document.createElement("p");
roundDisplay.textContent = "Round: " + round;
scoreContainer.appendChild(roundDisplay);

const humanScoreDisplay = document.createElement("p");
humanScoreDisplay.textContent = "Players Score: " + humanScore;
scoreContainer.appendChild(humanScoreDisplay);

const computerScoreDisplay = document.createElement("p");
computerScoreDisplay.textContent = "Computer Score: " + computerScore;
scoreContainer.appendChild(computerScoreDisplay);
    















