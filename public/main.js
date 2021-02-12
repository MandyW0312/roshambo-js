function main() {
  // Declaring the choices
  const player1Rock = document.querySelector('section.player1 i.rock')
  player1Rock.addEventListener('click', clickPlayer1Rock)
  const player1Paper = document.querySelector('section.player1 i.paper')
  player1Paper.addEventListener('click', clickPlayer1Paper)
  const player1Scissors = document.querySelector('section.player1 i.scissors')
  player1Scissors.addEventListener('click', clickPlayer1Scissors)
  const player1Lizard = document.querySelector('section.player1 i.lizard')
  player1Lizard.addEventListener('click', clickPlayer1Lizard)
  const player1Spock = document.querySelector('section.player1 i.spock')
  player1Spock.addEventListener('click', clickPlayer1Spock)

  const player2Rock = document.querySelector('section.player2 i.rock')
  player2Rock.addEventListener('click', clickPlayer2Rock)
  const player2Paper = document.querySelector('section.player2 i.paper')
  player2Paper.addEventListener('click', clickPlayer2Paper)
  const player2Scissors = document.querySelector('section.player2 i.scissors')
  player2Scissors.addEventListener('click', clickPlayer2Scissors)
  const player2Lizard = document.querySelector('section.player2 i.lizard')
  player2Lizard.addEventListener('click', clickPlayer2Lizard)
  const player2Spock = document.querySelector('section.player2 i.spock')
  player2Spock.addEventListener('click', clickPlayer2Spock)

  // Player 1 Clicks
  function clickPlayer1Rock(event) {
    const player1Choice = document.querySelector('section.player1 h3')
    player1Choice.textContent = 'rock'
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer1Paper(event) {
    const player1Choice = document.querySelector('section.player1 h3')
    player1Choice.textContent = 'paper'
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer1Scissors(event) {
    const player1Choice = document.querySelector('section.player1 h3')
    player1Choice.textContent = 'scissors'
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer1Lizard(event) {
    const player1Choice = document.querySelector('section.player1 h3')
    player1Choice.textContent = 'lizard'
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer1Spock(event) {
    const player1Choice = document.querySelector('section.player1 h3')
    player1Choice.textContent = 'spock'
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  // Player 2 Clicks
  function clickPlayer2Rock(event) {
    const player2Choice = document.querySelector('section.player2 h3')
    player2Choice.textContent = 'rock'
    const chosen = document.querySelector('section.player2 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer2Paper(event) {
    const player2Choice = document.querySelector('section.player2 h3')
    player2Choice.textContent = 'paper'
    const chosen = document.querySelector('section.player2 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer2Scissors(event) {
    const player2Choice = document.querySelector('section.player2 h3')
    player2Choice.textContent = 'scissors'
    const chosen = document.querySelector('section.player2 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer2Lizard(event) {
    const player2Choice = document.querySelector('section.player2 h3')
    player2Choice.textContent = 'lizard'
    const chosen = document.querySelector('section.player2 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer2Spock(event) {
    const player2Choice = document.querySelector('section.player2 h3')
    player2Choice.textContent = 'spock'
    const chosen = document.querySelector('section.player2 h4')
    chosen.textContent = 'Has Chosen'
  }

  // Game Play
  let player1Wins = 0
  let player2Wins = 0
  const winnerButton = document.querySelector('section button.winner')
  function gameRules(event) {
    const player1C = document.querySelector('section.player1 h3')
    const p1Choice = player1C.textContent
    const player2C = document.querySelector('section.player2 h3')
    const p2Choice = player2C.textContent
    if (p1Choice === p2Choice) {
      return window.alert('It was a Draw!')
    }
    if (
      (p1Choice === 'rock' && p2Choice === 'scissors') ||
      (p1Choice === 'rock' && p2Choice === 'lizard') ||
      (p1Choice === 'scissors' && p2Choice === 'paper') ||
      (p1Choice === 'scissors' && p2Choice === 'lizard') ||
      (p1Choice === 'paper' && p2Choice === 'spock') ||
      (p1Choice === 'paper' && p2Choice === 'rock') ||
      (p1Choice === 'spock' && p2Choice === 'scissors') ||
      (p1Choice === 'spock' && p2Choice === 'rock') ||
      (p1Choice === 'lizard' && p2Choice === 'spock') ||
      (p1Choice === 'lizard' && p2Choice === 'paper')
    ) {
      player1Wins++
      const player1WonGames = document.querySelector('section.player1 footer')
      player1WonGames.textContent = `Games Won: ${player1Wins}`
      return window.alert('Player 1 Wins!')
    } else {
      player2Wins++
      const player2WonGames = document.querySelector('section.player2 footer')
      player2WonGames.textContent = `Games Won: ${player2Wins}`
      return window.alert('Player 2 Wins!')
    }
  }
  winnerButton.addEventListener('click', gameRules)

  // Play Again Button
  const playAgainButton = document.querySelector('section button.again')
  function againButtonClick(event) {
    const chosen1Again = document.querySelector('section.player1 h4')
    chosen1Again.textContent = ''
    const chosen2Again = document.querySelector('section.player2 h4')
    chosen2Again.textContent = ''
  }
  playAgainButton.addEventListener('click', againButtonClick)

  // Reset Button
  const resetButton = document.querySelector('section button.reset')
  function resetButtonClick(event) {
    player1Wins = 0
    const player1Score = document.querySelector('section.player1 footer')
    player1Score.textContent = 'Games Won:'
    const chosen1Again = document.querySelector('section.player1 h4')
    chosen1Again.textContent = ''
    player2Wins = 0
    const player2Score = document.querySelector('section.player2 footer')
    player2Score.textContent = 'Games Won:'
    const chosen2Again = document.querySelector('section.player2 h4')
    chosen2Again.textContent = ''
  }
  resetButton.addEventListener('click', resetButtonClick)
}

document.addEventListener('DOMContentLoaded', main)
