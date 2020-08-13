/* 
Game Function 
- Player must guess a number between a min and max
- Player ges a certaub amount of guesses
- Notify players of the number of guess remanining
- Notify player of the correct answer if loose
- Let plater choose to play again
*/

// Game values
let min = 1, 
    max = 10,
    winningNumber = getRandomNum(min,max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Asssign the UI 
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listner 
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click' , function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  }
  // Check if user won
  if(guess === winningNumber){
    //Game over - won
    gameOver(true, `${winningNumber} is correct, YOU WIN!`);

  } else {
    //Wrong Number 
    guessesLeft -= 1;

    if (guessesLeft === 0){
      // Game over - lost
      gameOver(false, `GAME OVER. YOU LOST. The correct number is ${winningNumber}`);
    } else {
      // Game continues - answer wrong

      //Change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Tell user its wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Function for Game Over 
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color 
  message.style.color = color;
  // Set message
  setMessage(msg);
}

// Winnning Number 
function getRandomNum(min, max){
  if(Math.floor(Math.random()*(max-min+1)+min));
}

// Set a message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;

// Play Again 
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}