let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// TASK 1 

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

// Task 2
function compareGuesses (humanGuess, computerGuess, secretGuess) {
  if (Math.abs(humanGuess - secretGuess) <= Math.abs(computerGuess - secretGuess)) {
    return true;
  } else {
    return false;
  }
}
