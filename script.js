let humanScore = 0;
let computerScore = 0;

const res = document.querySelector('#res');
const humanScoreEl = document.querySelector('#humanScore');
const computerScoreEl = document.querySelector('#computerScore');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function playRound(human, computer) {
  if (
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock') ||
    (human === 'scissors' && computer === 'paper')
  ) {
    humanScore++;
    res.textContent = `✅ You win! ${human} beats ${computer}`;
  } else if (human === computer) {
    res.textContent = `🤝 It's a tie! You both chose ${human}`;
  } else {
    computerScore++;
    res.textContent = `❌ You lose! ${computer} beats ${human}`;
  }
  updateScoreboard();
  checkWinner();
}

function updateScoreboard() {
  humanScoreEl.textContent = `You: ${humanScore}`;
  computerScoreEl.textContent = `Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      alert(humanScore === 5 ? '🏆 You won the game!' : '💻 Computer won the game!');
      humanScore = 0;
      computerScore = 0;
      updateScoreboard();
      res.textContent = 'New game! Make your move.';
    }, 100);
  }
}

document.querySelector('#wrapper').addEventListener('click', (e) => {
  const target = e.target;
  const validChoices = ['rock', 'paper', 'scissors'];

  if (!validChoices.includes(target.id)) return;

  const humanChoice = target.id;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
