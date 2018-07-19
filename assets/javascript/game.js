
//zero out the variables

var win = 0;
var loss = 0;
var guessesLeft = 9;
var guessesSoFar = [];


//List out possible characters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//make computer randomly choose letter
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
// log computers letter to console
console.log(computerChoice);

//reset game to start new one
function reset() {
    guessesLeft = 9;
    guessesSoFar = [];
}


//make user choose letter

document.onkeyup = function (event) {
    var userGuess = event.key;
    
    console.log(userGuess);

    if (userGuess === computerChoice){
        win++;
        alert("You win! You read my mind!");
        document.querySelector("#win").innerHTML = "Wins: " + win;
        reset();
    }
    
    if (userGuess !== computerChoice) {
        guessesLeft = (guessesLeft - 1);
        guessesSoFar.push(userGuess);
        document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
        document.querySelector("#guessesSoFar").innerHTML = "Your guesses so far: " + guessesSoFar;
    }

    if (guessesLeft === 0) {
        loss++;
        alert("Sorry, you lose...");
        document.querySelector("#loss").innerHTML = "Losses: " + loss;
        reset();
    }
}


