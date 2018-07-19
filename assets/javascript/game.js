
//zero out the variables

var win = 0;
var loss = 0;
var guessesLeft = 0;
var guessesSoFar = 0;


//List out possible characters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//make computer randomly choose letter
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
var computerChoice = randomLetter;
// log computers letter to console
console.log(computerChoice);

//make user choose letter

document.onkeyup = function (event) {
    var userGuess = event.key;
}




