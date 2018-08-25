//--------------GAME LOGIC----------------------------
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
    
    yourWeapon.innerHTML = playerSelectionLowerCase;
    computerWeapon.innerHTML = computerSelection;

    
    if(playerSelectionLowerCase == "rock"){
        if(computerSelection == "rock") {result.innerHTML = "You Tied!";}
        if(computerSelection == "paper"){
            result.innerHTML = "You Lose!";
            let score = parseInt(computerScore.innerHTML);
            score++;
            computerScore.innerHTML = score; 
        }
        if(computerSelection == "scissors") {
            result.innerHTML = "You Win!";
            let score = parseInt(yourScore.innerHTML);
            score++;
            yourScore.innerHTML = score; 
        }
    }
    if(playerSelectionLowerCase == "paper"){
        if(computerSelection == "rock") {
            result.innerHTML = "You Win!";
            let score = parseInt(yourScore.innerHTML);
            score++;
            yourScore.innerHTML = score; 
        }
        if(computerSelection == "paper") {result.innerHTML = "You Tied!";}
        if(computerSelection == "scissors"){
            result.innerHTML = "You Lose!";
            let score = parseInt(computerScore.innerHTML);
            score++;
            computerScore.innerHTML = score; 
        }
    }
    if(playerSelectionLowerCase == "scissors"){
        if(computerSelection == "rock"){
            result.innerHTML = "You Lose!";
            let score = parseInt(computerScore.innerHTML);
            score++;
            computerScore.innerHTML = score; 
        }
        if(computerSelection == "paper") {
            result.innerHTML = "You Win!";
            let score = parseInt(yourScore.innerHTML);
            score++;
            yourScore.innerHTML = score; 
        }
        if(computerSelection == "scissors") {result.innerHTML = "You Tied!";}
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



//-------------------------BUTTONS AND EVENT LISTENERS-------------------------
const yourWeapon = document.getElementById("yourWeapon");
const computerWeapon = document.getElementById("computerWeapon");

const yourScore = document.getElementById("yourPoints");
const computerScore = document.getElementById("computerPoints") ;

const result = document.getElementById("result");


const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener('click', () => {
    playRound("rock", computerPlay());
    checkWin();
});
btnPaper.addEventListener('click', () => {
    playRound("paper", computerPlay());
    checkWin();
});
btnScissors.addEventListener('click', () => {
    playRound("scissors", computerPlay());
    checkWin();
});

const winnerDiv = document.querySelector('#winner');
const winnerH1 = document.createElement('h1');
const playAgain = document.createElement('button');
playAgain.innerHTML = "Play Again!"

playAgain.addEventListener('click', () => {
    yourScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    yourWeapon.innerHTML = "";
    computerWeapon.innerHTML = "";
    result.innerHTML = "";
    winnerH1.innerHTML = "";
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    
});

function checkWin(){
    if (yourScore.innerHTML == 5){
        winnerH1.textContent = 'You win!';
        winner.appendChild(winnerH1);
        winner.appendChild(playAgain);
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        return 0;
    }
    if(computerScore.innerHTML == "5"){
        winnerH1.textContent = 'Computer wins!';
        winner.appendChild(winnerH1);
        winner.appendChild(playAgain);
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        return 0;
    }
    return 1;

}