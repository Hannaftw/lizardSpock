const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const choiceButtons = document.querySelectorAll(".choice");
const resultDisplay = document.getElementById("result");
// Initialize score variables
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    tieScore++;
    return "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Rock" && computerChoice === "Lizard") ||
    (playerChoice === "Lizard" && computerChoice === "Spock") ||
    (playerChoice === "Spock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Lizard") ||
    (playerChoice === "Lizard" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Spock") ||
    (playerChoice === "Spock" && computerChoice === "Rock")
  ) {
    playerScore++;
    return `Player wins! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${playerChoice}`;
  }
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore} | Ties: ${tieScore}`;
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computer = computerChoice();
    const result = determineWinner(playerChoice, computer);
    resultDisplay.textContent = `Result: ${result}`;
    updateScoreDisplay();
  });
});

// Path: index.html
