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
    winningNumber = 2,
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

// Listen for guess

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`);
  }

  // Check if user won
  if(guess === winningNumber){
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNumber} is correct, YOU WIN!`, 'green');
  } else {
    // Change border color
    guessInput.style.borderColor = 'red';
    // Set message
    setMessage(`${guess} is wrong. TRY AGAIN`, 'red');
  }


});

// Set a message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

// Correct number 

// winningNumber.textContent = Math.random