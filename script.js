let playerSelection;
let randomNumber;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function translateNumberToChoice(randomNumber){
    if (randomNumber === 1){
        return "rock";
    }
    else if (randomNumber === 2){
        return "paper";
    }
    else {return "scissors";}
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return `It's a tie! You both chose ${playerSelection}.`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You lost! Rock loses to paper.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "You won! Rock beats scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "You won! Paper beats rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "You lost! Paper loses to scissors.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "You won! Scissors beats paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "You lost! Scissors loses to rock.";
    }
    else {return "Type a valid choice!"};
};

function game(){
    let playerSelections = document.querySelectorAll("button");
    const scoreboard = document.querySelector("div.scoreboard");
    const temp = document.querySelector("div.temp");
    const result = document.querySelector("div.result");
    const body = document.querySelector("body");
    const reset = document.createElement("p");
    reset.textContent = "Refresh to reset";
    playerSelections.forEach(selection => 
        selection.addEventListener("click", function(e){
            if (playerScore < 5 && computerScore < 5){
                let playerSelection = e.target.innerText.toLowerCase();
                let randomNumber = getRandomNumber(1,3);
                let computerSelection = translateNumberToChoice(randomNumber);
                temp.textContent = oneRound(playerSelection,computerSelection);
                let totalScore = `Player: ${playerScore} | CPU: ${computerScore}`;
                scoreboard.textContent = totalScore;
                if (playerScore === 5){
                    result.textContent = "You won the game, congrats!";
                    body.appendChild(reset);
                    return;
                }
                else if (computerScore === 5){
                    result.textContent = "The computer won. Try again.";
                    body.appendChild(reset);
                    return;
                }
            }
            else return;
    }))
    ;
};

game();