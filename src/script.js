const buttons = document.querySelectorAll(".user-rps-buttons");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice(Math.random());
    playRound(humanChoice, computerChoice);
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

function playRound(humanChoice, computerChoice) {
  // select results div using query selector and store inside results variable
  // add innerText property to results variable and create child p element to display user choice - add class of user choice
  // repeat above for computer choice

  let results = document.querySelector(".results");
  let userSelection = document.createElement("p");
  userSelection.innerText = `You chose ${humanChoice}`;

  let computerSelection = document.createElement("p");
  computerSelection.innerText = `Computer chose ${computerChoice}`;

  let roundResult = document.createElement("p");

  results.appendChild(userSelection);
  results.appendChild(computerSelection);
  results.appendChild(roundResult);

  switch (true) {
    case humanChoice === computerChoice:
      roundResult.innerText = "You drew the same thing! No winners here.";
      break;
    case humanChoice === "paper" && computerChoice === "scissors":
      roundResult.innerText = "Computer wins! Scissors beats paper.";
      break;
    case humanChoice === "scissors" && computerChoice === "paper":
      roundResult.innerText = "You win! Scissors beats paper.";
      break;
    case humanChoice === "rock" && computerChoice === "paper":
      roundResult.innerText = "Computer wins! Paper beats rock.";
      break;
    case humanChoice === "paper" && computerChoice === "rock":
      roundResult.innerText = "You win! Paper beats rock.";
      break;
    case humanChoice === "scissors" && computerChoice === "rock":
      roundResult.innerText = "Computer wins! Rock beats scissors.";
      break;
    case humanChoice === "rock" && computerChoice === "scissors":
      roundResult.innerText = "You win! Rock beats scissors.";
      break;
    default:
      roundResult.innerText = "Not quite sure who wins here...";
  }
}
