const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  
  play: function () {
    do{
     this.smallestNum = parseInt(prompt('Enter the smallest number in the range:'));
    } while (isNaN(this.smallestNum));
    do {  
      this.biggestNum = parseInt(prompt('Enter the biggest number in the range:'));
    } while (isNaN(this.biggestNum) || this.biggestNum <= this.smallestNum);
     this.enableGuessing();
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;
  },

  guessHandler: function () {
    const guess = this.getGuess();
    this.prevGuesses.push(guess);
    this.renderMessage(guess);
    if (guess === this.secretNum) {
      alert(`Congrats! You've guessed the number in ${this.prevGuesses.length} attempts!`);
      document.getElementById('guessAgain').style.display = 'none'; // Hide "Guess Again" button
    } else {
      this.enableGuessing(); // Re-enable guessing
    }
  },

enableGuessing: function () {
    document.getElementById('guessAgain').style.display = 'inline'; // Show "Guess Again" button
  },

getGuess: function () {
  let guess;
  while (true) {
    guess = parseInt(prompt(`Please enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
      if (!isNaN(guess) && guess >= this.smallestNum && guess <= this.biggestNum) {
        return guess;
      }
    alert(`Invalid input, please enter a number between ${this.smallestNum} and ${this.biggestNum}.`);
    }
     // Return the valid guess
  },


renderMessage: function(guess) {
  const messageE1 = document.getElementById('messages');
  let message = `Your guess: ${guess} `;
  if (guess < this.secretNum) {
    message += `is too low!`;
  } else if (guess > this.secretNum) {
    message += `is too high!`;
  } else {
    message += `is correct!`;
  }
  messageE1.innerHTML = message;
}
};

document.getElementById('startGame').addEventListener('click',() => { game.play();
                                                    });

document.getElementById('guessAgain').addEventListener('click', () => {
  game.guessHandler(); // Handle the guess when "Guess Again" is clicked
});

  

