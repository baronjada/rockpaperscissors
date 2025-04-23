const buttons = document.querySelectorAll(".user-rps-buttons");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice(Math.random());
    playGame(humanChoice, computerChoice);
  });
});

function getComputerChoice(num) {
  if (num <= 0.3) {
    return "rock";
  } else if (num <= 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice}`);
  console.log(`Computer chose ${computerChoice}`);

  switch (true) {
    case humanChoice === computerChoice:
      console.log("You drew the same thing! No winners here.");
      break;
    case humanChoice === "paper" && computerChoice === "scissors":
      console.log("Computer wins! Scissors beats paper.");
      break;
    case humanChoice === "scissors" && computerChoice === "paper":
      console.log("You win! Scissors beats paper.");
      break;
    case humanChoice === "rock" && computerChoice === "paper":
      console.log("Computer wins! Paper beats rock.");
      break;
    case humanChoice === "paper" && computerChoice === "rock":
      console.log("You win! Paper beats rock.");
      break;
    case humanChoice === "scissors" && computerChoice === "rock":
      console.log("Computer wins! Rock beats scissors.");
      break;
    case humanChoice === "rock" && computerChoice === "scissors":
      console.log("You win! Rock beats scissors.");
      break;
    default:
      console.log("Not quite sure who wins here...");
  }
}
