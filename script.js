// one round game function
// Game played from the console against a CPU
// It asks the user to type their selection, rock, paper or scissors (case insensitive)

let playerSelection = prompt("What are you choosing? Rock, paper or scissors?").toLowerCase();
let randomNumber = getRandomNumber(1,3);
let computerSelection = translateNumberToChoice();
let playerScore = 0;
let computerScore = 0;

function translateNumberToChoice(){
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
        computerScore = computerScore++;
        return "You lost! Rock loses to paper.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore = playerScore++;
        return "You won! Rock beats scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore = playerScore++;
        return "You won! Paper beats rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore = computerScore++;
        return "You lost! Paper loses to scissors.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore = playerScore++;
        return "You won! Scissors beats paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore = computerScore++;
        return "You lost! Scissors loses to rock.";
    }
    else {return "Type a valid choice!"};
};

Results = `Player: ${playerScore} | Computer: ${computerScore}`

alert(oneRound(playerSelection,computerSelection));
alert(Results);



// randomNumber = getRandomNumber(1,3);
// computerSelection = translateNumberToChoice()
// console.log(computerSelection);



