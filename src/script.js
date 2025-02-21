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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    switch (true) {
      case humanChoice == computerChoice:
        console.log("You drew the same thing! No winners here.");
        break;
      case humanChoice == paper && computerChoice == scissors:
        console.log("Computer wins! Scissors beats paper.");
        computerScore++;
        break;
      case humanChoice == scissors && computerChoice == paper:
        console.log("You win! Scissors beats paper.");
        humanScore++;
        break;
      case humanChoice == rock && computerChoice == paper:
        console.log("Computer wins! Paper beats rock.");
        computerScore++;
        break;
      case humanChoice == paper && computerChoice == rock:
        console.log("You win! Paper beats rock.");
        humanScore++;
        break;
      case humanChoice == scissors && computerChoice == rock:
        console.log("Computer wins! Rock beats scissors.");
        computerScore++;
        break;
      case humanChoice == rock && computerChoice == scissors:
        console.log("You win! Rock beats scissors.");
        humanScore++;
        break;
      default:
        console.log("Not quite sure who wins here...");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(Math.random());

    playRound(humanSelection, computerSelection);

    console.log(
      `You have ${humanScore} point(s) and the computer has ${computerScore} point(s).`
    );
  }

  if (humanScore > computerScore) {
    alert("You won this game!");
  } else if (computerScore > humanScore) {
    alert("Unlucky, the computer wins this game!");
  } else {
    alert("It's a draw!");
  }
}

playGame();
