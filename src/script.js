/*
1. Create new function named getComputerChoice
2. getComputerChoice to randomly return one of following string values = "rock", "paper", "scissors"
3. Use Math.random method to return random number
4. Use conditions to return one of the multiple string values
5. Use console.log to test function
*/

function getComputerChoice() {
  const rock = "Rock";
  const paper = "Paper";
  const scissors = "Scissors";
  let selectedOption = Math.random();
  if (selectedOption <= 0.3) {
    return rock;
  } else if (selectedOption > 0.3 && selectedOption <= 0.6) {
    return paper;
  } else if (selectedOption > 0.6 && selectedOption <= 1) {
    return scissors;
  }
}

console.log(getComputerChoice());
