function getComputerChoice() {    

   choice = Math.floor(Math.random() * 3)

   if (choice == 0)
    choice = "Rock";
   else if (choice == 1)
    choice = "Paper"
   else if (choice == 2)
    choice = "Scissors"
    
   return choice
}

function getHumanChoice () {

    choice = prompt("Will you pick Rock, Paper or Scissors?")
        return choice;
}


console.log(getComputerChoice())
console.log(getHumanChoice())
