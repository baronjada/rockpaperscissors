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

let userScore = 0;
let computerScore = 0;
let roundCount = 0;

let results = document.querySelector(".results");
let playerSelections = document.createElement("p");
let scoreboardHeading = document.createElement("h3");
let roundResult = document.createElement("p");
let finalScore = document.createElement("p");

scoreboardHeading.innerText = "Scoreboard";

results.append(playerSelections);
results.append(scoreboardHeading);
results.append(roundResult);
results.append(finalScore);

function playRound(humanChoice, computerChoice) {
  if (roundCount < 5) {
    playerSelections.textContent = `You chose ${humanChoice} and Computer chose ${computerChoice}...`;

    switch (true) {
      case humanChoice === computerChoice:
        roundResult.textContent = "Draw!";
        break;
      case humanChoice === "paper" && computerChoice === "scissors":
      case humanChoice === "rock" && computerChoice === "paper":
      case humanChoice === "scissors" && computerChoice === "rock":
        roundResult.textContent = "Computer wins this round!";
        computerScore++;
        break;
      default:
        roundResult.textContent = "You win this round!";
        userScore++;
    }

    let userScoreHeading = document.querySelector(".user-score-heading");
    let computerScoreHeading = document.querySelector(
      ".computer-score-heading"
    );

    userScoreHeading.textContent = `You: ${userScore}`;
    computerScoreHeading.textContent = `Computer: ${computerScore}`;

    roundCount++;

    if (roundCount === 5) {
      finalScore.innerText =
        userScore > computerScore
          ? "You win the game! 🎉"
          : userScore < computerScore
          ? "Computer wins the game! 💻"
          : "It's a tie! 🤝";
      results.append(finalScore);
    }
  }
}
