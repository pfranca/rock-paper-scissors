function computerPlay(){
    //This JavaScript function always returns a random number between min and max (both included). In this case between 0 and 2.
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    switch(randomNum){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return "err";
    }
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection == "err") return "err";
    const playerSelectionLowerCase = playerSelection.toLowerCase();
    if(playerSelectionLowerCase!= "rock" && playerSelectionLowerCase!= "paper" && playerSelectionLowerCase!= "scissors") return err;

    if(playerSelectionLowerCase == "rock"){
        if(computerSelection == "rock") return "Tie!";
        if(computerSelection == "paper") return "You Lose!";
        if(computerSelection == "scissors") return "You Win!";
    }
    if(playerSelectionLowerCase == "paper"){
        if(computerSelection == "rock") return "You Win!";
        if(computerSelection == "paper") return "Tie!";
        if(computerSelection == "scissors") return "You Lose!";
    }
    if(playerSelectionLowerCase == "scissors"){
        if(computerSelection == "rock") return "You Lose!";
        if(computerSelection == "paper") return "You Win!";
        if(computerSelection == "scissors") return "Tie!";
    }

}



function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(var i = 0; i < 5; i++){
        let playerSelection;
        let playerSelectionLowerCase;
        do{
            playerSelection = prompt("Choose your weapon!");
            playerSelectionLowerCase = playerSelection.toLowerCase();
        }while(playerSelectionLowerCase!= "rock" && playerSelectionLowerCase!= "paper" && playerSelectionLowerCase!= "scissors")
        let computerSelection = computerPlay();
        console.log("You used: " + playerSelectionLowerCase);
        console.log("Computer used: " + computerSelection);
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        console.log("-------------------");
        if(round == "You Win!") playerScore++;
        else if(round == "You Lose!") computerScore++;
    }
    console.log("GAME ENDED!");
    console.log("Your Score: "+playerScore);
    console.log("Computer Score: "+computerScore);
    if(playerScore > computerScore) console.log("YOU WIN");
    else if(playerScore < computerScore) console.log("YOU LOSE");
    else if(playerScore == computerScore) console.log("YOU TIED");

}

game();