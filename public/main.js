function main() {
  // Declaring the choices
  const player1Posh = document.querySelector('section.player1 img.posh')
  player1Posh.addEventListener('click', clickPlayer1Posh)
  const player1Baby = document.querySelector('section.player1 img.baby')
  player1Baby.addEventListener('click', clickPlayer1Baby)
  const player1Ginger = document.querySelector('section.player1 img.ginger')
  player1Ginger.addEventListener('click', clickPlayer1Ginger)
  const player1Scary = document.querySelector('section.player1 img.scary')
  player1Scary.addEventListener('click', clickPlayer1Scary)
  const player1Sporty = document.querySelector('section.player1 img.sporty')
  player1Sporty.addEventListener('click', clickPlayer1Sporty)

  const player2Posh = document.querySelector('section.player2 img.posh')
  player2Posh.addEventListener('click', clickPlayer2Posh)
  const player2Baby = document.querySelector('section.player2 img.baby')
  player2Baby.addEventListener('click', clickPlayer2Baby)
  const player2Ginger = document.querySelector('section.player2 img.ginger')
  player2Ginger.addEventListener('click', clickPlayer2Ginger)
  const player2Scary = document.querySelector('section.player2 img.scary')
  player2Scary.addEventListener('click', clickPlayer2Scary)
  const player2Sporty = document.querySelector('section.player2 img.sporty')
  player2Sporty.addEventListener('click', clickPlayer2Sporty)

  // Player 1 Clicks
  function player1Choice(choice) {
    const clickedOn = document.querySelector('section.player1 h3')
    clickedOn.textContent = choice
    const chosen = document.querySelector('section.player1 h4')
    chosen.textContent = 'Has Chosen'
  }

  function clickPlayer1Posh() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('Posh Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Baby() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('Baby Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Ginger() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('Ginger Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Scary() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('Scary Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer1Sporty() {
    const firstPlayer = document.querySelector('section.player1 h3')
    const firstPlayerChoice = firstPlayer.textContent
    if (firstPlayerChoice === '') {
      player1Choice('Sporty Spice')
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

  function clickPlayer2Posh() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('Posh Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Baby() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('Baby Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Ginger() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('Ginger Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Scary() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('Scary Spice')
    } else {
      window.alert('You can not choose again')
    }
  }

  function clickPlayer2Sporty() {
    const secondPlayer = document.querySelector('section.player2 h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (secondPlayerChoice === '') {
      player2Choice('Sporty Spice')
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
      (p1Choice === 'Posh Spice' && p2Choice === 'Ginger Spice') ||
      (p1Choice === 'Posh Spice' && p2Choice === 'Scary Spice') ||
      (p1Choice === 'Ginger Spice' && p2Choice === 'Baby Spice') ||
      (p1Choice === 'Ginger Spice' && p2Choice === 'Scary Spice') ||
      (p1Choice === 'Baby Spice' && p2Choice === 'Sporty Spice') ||
      (p1Choice === 'Baby Spice' && p2Choice === 'Posh Spice') ||
      (p1Choice === 'Sporty Spice' && p2Choice === 'Ginger Spice') ||
      (p1Choice === 'Sporty Spice' && p2Choice === 'Posh Spice') ||
      (p1Choice === 'Scary Spice' && p2Choice === 'Sporty Spice') ||
      (p1Choice === 'Scary Spice' && p2Choice === 'Baby Spice')
    ) {
      player1Wins++
      const player1WonGames = document.querySelector('section.player1 footer')
      player1WonGames.textContent = `Games Won: ${player1Wins}`
      const winnerOfGame = document.querySelector('section.gameWinner p')
      winnerOfGame.textContent = `Player 1 Wins! ${p1Choice} beats ${p2Choice}!`
      return
    } else {
      player2Wins++
      const player2WonGames = document.querySelector('section.player2 footer')
      player2WonGames.textContent = `Games Won: ${player2Wins}`
      const winnerOfGame = document.querySelector('section.gameWinner p')
      winnerOfGame.textContent = `Player 2 Wins! ${p2Choice} beats ${p1Choice}!`
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
