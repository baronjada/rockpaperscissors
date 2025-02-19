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

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice <= 0.3) {
    return rock;
  } else if (computerChoice > 0.3 && computerChoice <= 0.6) {
    return paper;
  } else if (computerChoice > 0.6 && computerChoice <= 1) {
    return scissors;
  }
}

console.log(getComputerChoice());

/*
Human logic:
1. Create new function named getHumanChoice
2. Create prompt to get user imput
3. Console.log user input
*/

function getHumanChoice() {
  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let humanChoice = capitaliseFirstLetter(
    prompt(`Your turn! Enter "rock", "paper" or scissors" below:`)
  );

  if (
    humanChoice !== rock &&
    humanChoice !== paper &&
    humanChoice !== scissors
  ) {
    alert(`You must choose either "rock", "paper" or scissors".`);
  } else {
    alert("Thanks for picking an option!");
  }

  console.log(humanChoice);
}

getHumanChoice();
