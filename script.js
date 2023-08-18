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

// function game(){
//     if (playerScore < 3 && computerScore <3){
//         let playerSelection = prompt("What are you choosing? Rock, paper or scissors?").toLowerCase();
//         let randomNumber = getRandomNumber(1,3);
//         let computerSelection = translateNumberToChoice(randomNumber);
//         alert(oneRound(playerSelection,computerSelection));
//         alert(`Player: ${playerScore} | Computer: ${computerScore}`);
//     }
//     else if (playerScore === 3){
//         alert(`Player: ${playerScore} | Computer: ${computerScore}`);
//         alert("You won!");
//     } 
//     else if (computerScore === 3){
//         alert(`Player: ${playerScore} | Computer: ${computerScore}`);
//         alert("You lost!");
//     }
// }