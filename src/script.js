function getComputerChoice(compChoice) {
  if (compChoice <= 0.3) {
    return "rock";
  } else if (compChoice > 0.3 && compChoice <= 0.6) {
    return "paper";
  } else if (compChoice > 0.6 && compChoice <= 1) {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice;

  const userRockButton = document.querySelector("#user-rock-button");
  const userPaperButton = document.querySelector("#user-paper-button");
  const userScissorsButton = document.querySelector("#user-scissors-button");

  userRockButton.addEventListener("click", () => {
    humanChoice = "rock";
    return humanChoice;
  });

  userPaperButton.addEventListener("click", () => {
    humanChoice = "paper";
    return humanChoice;
  });

  userScissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    return humanChoice;
  });
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    switch (true) {
      case humanChoice === computerChoice:
        console.log("You drew the same thing! No winners here.");
        break;
      case humanChoice === "paper" && computerChoice === "scissors":
        console.log("Computer wins! Scissors beats paper.");
        // computerScore++;
        break;
      case humanChoice === "scissors" && computerChoice === "paper":
        console.log("You win! Scissors beats paper.");
        // humanScore++;
        break;
      case humanChoice === "rock" && computerChoice === "paper":
        console.log("Computer wins! Paper beats rock.");
        // computerScore++;
        break;
      case humanChoice === "paper" && computerChoice === "rock":
        console.log("You win! Paper beats rock.");
        // humanScore++;
        break;
      case humanChoice === "scissors" && computerChoice === "rock":
        console.log("Computer wins! Rock beats scissors.");
        // computerScore++;
        break;
      case humanChoice === "rock" && computerChoice === "scissors":
        console.log("You win! Rock beats scissors.");
        // humanScore++;
        break;
      default:
        console.log("Not quite sure who wins here...");
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice(Math.random());

  console.log(
    "this is what the user selection and computer selection are coming out as when the playRound function is called",
    playRound(humanSelection, computerSelection)
  );
}

const userRpsButtons = document.querySelectorAll(".user-rps-buttons");

userRpsButtons.forEach((button) => {
  button.addEventListener("click", playGame);
});
