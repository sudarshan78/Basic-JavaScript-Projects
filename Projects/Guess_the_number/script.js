// var randomNumber = Math.floor(Math.random() * 100) + 1;



// const submit = document.querySelector("#submitBtn");
// const userInput = document.querySelector("#guessField");
// const guessSlot = document.querySelector(".previousGuesses");
// const remaining = document.querySelector(".remaining");
// const information = document.querySelector(".info");
// const startOver = document.querySelector("#result");

// const para = document.createElement("p");

// let previousGuesses = [];
// let numOfGuesses = 0;
// let playGame = true;

// if (playGame) {
//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert("Please enter a valid number.");
//   } else if (guess < 1 || guess > 100) {
//     alert("Please enter a number between 1 and 100.");
//   } else {
//     previousGuesses.push(guess);
//     numOfGuesses++;

//     if (numOfGuesses >= 10) {
//       cleanGuesses(guess);
//       displayMessage(`Game Over. The random number was ${randomNumber}`);
//       endGame();
//     } else {
//       console.log("Before cleaning:", guessSlot.innerHTML, remaining.innerHTML);
// cleanGuesses(guess);
// console.log("After cleaning:", guessSlot.innerHTML, remaining.innerHTML);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it Right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is Too Small`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is Too High`);
//   }
// }

// function cleanGuesses(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   remaining.innerHTML = 10 - numOfGuesses;
// }

// function displayMessage(message) {
//   information.innerHTML = message;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute("disabled", "");
//   para.classList.add("button");
//   para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(para);
//   playGame = false;
//   newGame();
// }

// function newGame () {
//   const newGameBtn = document.querySelector("#newGame");
//   newGameBtn.addEventListener("click", (e) => {
//    randomNumber = Math.floor(Math.random() * 100) + 1;
//     previousGuesses = [];
//     numOfGuesses = 0;
//     guessSlot.innerHTML = "";
//     remaining.innerHTML = 10;
//     userInput.removeAttribute("disabled");
//     startOver.removeChild(para);
//     playGame = true;
//   });
// }

let randomNumber = Math.floor(Math.random() * 100 + 1); 

const submit = document.querySelector("#submitBtn");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".previousGuesses");
const remaining = document.querySelector(".remainingGuesses");
const information = document.querySelector(".info");
const startOver = document.querySelector("#result");

const para = document.createElement("p");

let previousGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        previousGuesses.push(guess);
        numOfGuesses++; 

        if (numOfGuesses >= 10) {
            cleanGuesses(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endGame();
        } else {
            cleanGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is too small.");
    } else {
        displayMessage("Number is too high.");
    }
}

function cleanGuesses(guess) {
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess},`;
    remaining.innerHTML = 10 - numOfGuesses; 
}

function displayMessage(message) {
    information.innerHTML = message;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    para.classList.add("button");
    para.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * 100 + 1); 
        numOfGuesses = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = 10;
        userInput.removeAttribute("disabled");
        startOver.removeChild(para);
        playGame = true;
    });
}