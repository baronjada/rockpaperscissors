/*
Computer logic:
1. Create new function named getComputerChoice - done
2. getComputerChoice to randomly return one of following string values = "rock", "paper", "scissors" - done
3. Use Math.random method to return random number - done
4. Use conditions to return one of the multiple string values - done
5. Use console.log to test function - done
*/
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice(compChoice) {
  if (compChoice <= 0.3) {
    return rock;
  } else if (compChoice > 0.3 && compChoice <= 0.6) {
    return paper;
  } else if (compChoice > 0.6 && compChoice <= 1) {
    return scissors;
  }
}

/*
Human logic:
1. Create new function named getHumanChoice - done
2. Create prompt to get user imput - done
3. Console.log user input - done
*/

function getHumanChoice() {
  let humanChoiceInput = prompt(
    `Your turn! Enter "rock", "paper" or "scissors" below:`
  );

  humanChoiceInput = humanChoiceInput.toLowerCase();

  if (
    humanChoiceInput !== rock &&
    humanChoiceInput !== paper &&
    humanChoiceInput !== scissors
  ) {
    alert(`You must choose either "rock", "paper" or "scissors".`);
  } else {
    alert("Good luck!");
  }

  return humanChoiceInput;
}

/*Declare the players score variables:
1. Create a variable named humanScore - done
2. Create a variable named computerScore - done
3. Initialise those two variables with a 0 - done
*/

let humanScore = 0;
let computerScore = 0;

/*Write the logic to play a single round
1. Create a new function named playRound - done
2. Define two parameters for playRound: 
humanChoice and computerChoice - done
3. Make your function's humanChoice parameter case insensitive
    so that players can input "rock", "ROCK", "RocK",
    or other variations. - done
  4. Write the code for your playRound function to console.log
  a string value representing the round winner, such as
  "You lose! Paper beats rock". - done
  5. Increment the humanScore or computerScore variable
   based on the round winner. - done
*/

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("You drew the same thing! No winners here.");
  } else if (humanChoice == paper && computerChoice == scissors) {
    console.log("Computer wins! Scissors beats paper.");
    computerScore++;
  } else if (humanChoice == scissors && computerChoice == paper) {
    console.log("You win! Scissors beats paper.");
    humanScore++;
  } else if (humanChoice == rock && computerChoice == paper) {
    console.log("Computer wins! Paper beats rock.");
    computerScore++;
  } else if (humanChoice == paper && computerChoice == rock) {
    console.log("You win! Paper beats rock.");
    humanScore++;
  } else if (humanChoice == scissors && computerChoice == rock) {
    console.log("Computer wins! Rock beats scissors.");
    computerScore++;
  } else if (humanChoice == rock && computerChoice == scissors) {
    console.log("You win! Rock beats scissors.");
    humanScore++;
  } else {
    console.log("Let me decide who wins here... I'll be back!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(Math.random());

playRound(humanSelection, computerSelection);

console.log(
  `In case you were curious... you picked ${humanSelection} and the computer picked ${computerSelection}. You have ${humanScore} points and the computer has ${computerScore} points.`
);
