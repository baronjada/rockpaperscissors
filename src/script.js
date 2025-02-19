/*
Computer logic:
1. Create new function named getComputerChoice
2. getComputerChoice to randomly return one of following string values = "rock", "paper", "scissors"
3. Use Math.random method to return random number
4. Use conditions to return one of the multiple string values
5. Use console.log to test function
*/
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice(choice) {
  if (choice <= 0.3) {
    return rock;
  } else if (choice > 0.3 && choice <= 0.6) {
    return paper;
  } else if (choice > 0.6 && choice <= 1) {
    return scissors;
  }
}

/*
Human logic:
1. Create new function named getHumanChoice
2. Create prompt to get user imput
3. Console.log user input
*/

function getHumanChoice() {
  let humanChoiceInput = prompt(
    `Your turn! Enter "rock", "paper" or "scissors" below:`
  );

  if (
    humanChoiceInput !== rock &&
    humanChoiceInput !== paper &&
    humanChoiceInput !== scissors
  ) {
    alert(`You must choose either "rock", "paper" or "scissors".`);
  } else {
    alert("Thanks for picking an option!");
  }

  return humanChoiceInput;
}

/*Declare the players score variables:
1. Create a variable named humanScore
2. Create a variable named computerScore
3. Initialise those two variables with a 0
*/

let humanScore = 0;
let computerScore = 0;

/*Write the logic to play a single round
1. Create a new function named playRound
2. Define two parameters for playRound:
humanChoice and computerChoice
3. Make your function's humanChoice parameter case insensitive
 so that players can input "rock", "ROCK", "RocK",
  or other variations.
  - manipulate below code previously used to get this to work:
// function capitaliseFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

  4. Write the code for your playRound function to console.log
  a string value representing the round winner, such as
  "You lose! Paper beats rock".
  5. Increment the humanScore or computerScore variable
   based on the round winner.
*/

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
}

playRound(getHumanChoice(), getComputerChoice(Math.random()));
