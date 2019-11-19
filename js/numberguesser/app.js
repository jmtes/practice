/*
GAME FUNCTION:
- Player must guess a number between a min and a max.
- Player gets a certain amount of guesses.
- Notify player of guesses remaining.
- Notify player of correct answer if they lose.
- Let player choose to play again.
*/

// Game values
let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessesLeft = 3;
// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (event) => {
  // Listening for the click event wouldn't work here because it would pretty much click the button automatically and not allow the player a chance to read the message.
  if (event.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - win

    gameOver(true, `${winningNum} is correct, you win!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lose
      
      gameOver(false, `Game over, you lost! The correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Tell user their guess was wrong
      setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, 'red');
    }
  }
});

// Set message
function setMessage (msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Game over
function gameOver (won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum (min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}
