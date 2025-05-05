let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerMove) {
  const moves = ['Rock', 'Paper', 'Scissors'];
  const computerMove = moves[Math.floor(Math.random() * 3)];

  let resultMessage = '';
  let emoji = '';

  if (playerMove === computerMove) {
    resultMessage = "It's a Tie!";
    emoji = '😐🫤🤝';
    ties++;
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    resultMessage = 'You Win!';
    emoji = '🥳🎉🕺💃💪';
    wins++;
  } else {
    resultMessage = 'You Lose!';
    emoji = '😭💔👎😤🫠';
    losses++;
  }

  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('ties').textContent = ties;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <div class="fade-in">
      <p>You picked <strong>${playerMove}</strong>, computer picked <strong>${computerMove}</strong>.</p>
      <p>${resultMessage} ${emoji}</p>
    </div>
  `;
}
function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;

  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('ties').textContent = ties;

  document.getElementById('result').innerHTML = `
    <div class="fade-in">
      <p>Scores have been reset. Let's play again!</p>
    </div>
  `;
}

