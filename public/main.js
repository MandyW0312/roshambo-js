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
  function player1Choice(choice) {
    const clickedOn = document.querySelector('section.player1 h3')
    clickedOn.textContent = choice
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer1Rock() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('rock')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Paper() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('paper')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Scissors() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('scissors')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Lizard() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('lizard')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Spock() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('spock')
    } else {
      window.alert('You can not choose again')
    }
  }

  // Player 2 Clicks
  function player2Choice(choice) {
    const clickedOn = document.querySelector('section.player2 h3')
    clickedOn.textContent = choice
    const chosen = document.querySelector('section.player2 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer2Rock() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('rock')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Paper() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('paper')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Scissors() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('scissors')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Lizard() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('lizard')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Spock() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('spock')
    } else {
      window.alert('You can not choose again')
    }
  }

  // Game Play
  let player1Wins = 0
  let player2Wins = 0
  const winnerButton = document.querySelector('section button.winner')
  function gameRules() {
    const player1C = document.querySelector('section.player1 h3')
    const p1Choice = player1C.textContent
    const player2C = document.querySelector('section.player2 h3')
    const p2Choice = player2C.textContent
    if (p1Choice === p2Choice) {
      const winnerOfGame = document.querySelector('section.gameWinner p')
      winnerOfGame.textContent = 'It was a Draw!'
      return
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
      const winnerOfGame = document.querySelector('section.gameWinner p')
      winnerOfGame.textContent = 'Player 1 Wins!'
      return
    } else {
      player2Wins++
      const player2WonGames = document.querySelector('section.player2 footer')
      player2WonGames.textContent = `Games Won: ${player2Wins}`
      const winnerOfGame = document.querySelector('section.gameWinner p')
      winnerOfGame.textContent = 'Player 2 Wins!'
      return
    }
  }
  winnerButton.addEventListener('click', gameRules)

  // Play Again Button
  const playAgainButton = document.querySelector('section button.again')
  function againButtonClick() {
    const chosen1Again = document.querySelector('section.player1 h4')
    chosen1Again.textContent = ''
    const userChoice1 = document.querySelector('section.player1 h3')
    userChoice1.textContent = ''

    const chosen2Again = document.querySelector('section.player2 h4')
    chosen2Again.textContent = ''
    const userChoice2 = document.querySelector('section.player2 h3')
    userChoice2.textContent = ''

    const clearWinner = document.querySelector('section.gameWinner p')
    clearWinner.textContent = ''
  }
  playAgainButton.addEventListener('click', againButtonClick)

  // Reset Button
  const resetButton = document.querySelector('section button.reset')
  function resetButtonClick() {
    player1Wins = 0
    const player1Score = document.querySelector('section.player1 footer')
    player1Score.textContent = 'Games Won:'
    const chosen1Again = document.querySelector('section.player1 h4')
    chosen1Again.textContent = ''
    const userChoice1 = document.querySelector('section.player1 h3')
    userChoice1.textContent = ''

    player2Wins = 0
    const player2Score = document.querySelector('section.player2 footer')
    player2Score.textContent = 'Games Won:'
    const chosen2Again = document.querySelector('section.player2 h4')
    chosen2Again.textContent = ''
    const userChoice2 = document.querySelector('section.player2 h3')
    userChoice2.textContent = ''

    const clearWinner = document.querySelector('section.gameWinner p')
    clearWinner.textContent = ''
  }
  resetButton.addEventListener('click', resetButtonClick)
}

document.addEventListener('DOMContentLoaded', main)
