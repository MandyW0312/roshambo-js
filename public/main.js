function main() {
  const player1Rock = document.querySelector('section.player1 button.rock')
  const player1Paper = document.querySelector('section.player1 button.paper')
  const player1Scissors = document.querySelector(
    'section.player1 button.scissors'
  )
  const player2Rock = document.querySelector('section.player2 button.rock')
  const player2Paper = document.querySelector('section.player2 button.paper')
  const player2Scissors = document.querySelector(
    'section.player2 button.scissors'
  )

  function clickPlayer1(event) {
    const player1Choice = event.target.value
    // If you hit rock, update empty html element to rock but don't print it out
    // Want to Hide all of the buttons or make it to where Player 2 doesn't see Player 1's choice
    // Switch to Player 2
  }

  function clickPlayer2(event) {
    const player1Choice = event.target.value
  }

  function gameRules() {
    if (player1Choice === player2Choice) {
      window.alert('It was a Draw!')
    }
    if (
      (player1Choice === 'rock' && player2Choice === 'scissors') ||
      (player1Choice === 'scissors' && player2Choice === 'paper') ||
      (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
      window.alert('Player 1 Wins!')
    }
    if (
      (player2Choice === 'rock' && player1Choice === 'scissors') ||
      (player2Choice === 'scissors' && player1Choice === 'paper') ||
      (player2Choice === 'paper' && player1Choice === 'rock')
    ) {
      window.alert('Player 2 Wins!')
    }
  }

  player1Rock.addEventListener('click', clickPlayer1)
  player1Paper.addEventListener('click', clickPlayer1)
  player1Scissors.addEventListener('click', clickPlayer1)

  player2Rock.addEventListener('click', clickPlayer2)
  player2Paper.addEventListener('click', clickPlayer2)
  player2Scissors.addEventListener('click', clickPlayer2)
}

document.addEventListener('DOMContentLoaded', main)
