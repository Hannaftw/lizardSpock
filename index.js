const choices = ["rock", "paper", "scissors", "lizard", "spock"];
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
    if (playerChoice === computerChoice) {
        tieScore++;
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "lizard") ||
        (playerChoice === "lizard" && computerChoice === "spock") ||
        (playerChoice === "spock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "lizard") ||
        (playerChoice === "lizard" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "spock") ||
        (playerChoice === "spock" && computerChoice === "rock")
    ) {
        playerScore++;
        return `Player wins! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
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
