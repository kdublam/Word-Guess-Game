// Array of words that are included in game
var words = ["stormtrooper", "chewbecca", "lightsaber", "tatooine", "skywalker", "force", "yoda"]
//Chooses random word from the array
var randomWord = words[Math.floor(Math.random() * words.length)];
//variables to write text to html
var numWin = document.getElementById("wins_text");
var currentWord = document.getElementById("current_word");
var guessLeft = document.getElementById("guess_text");
var wrongGuess = document.getElementById("letters_guessed");

// guessLeft.textContent = 12;

var numGuess = 12




//Display the word in play with blank spaces
// var blankSpace = randomWord.replace(/./g, "_ ");
// currentWord.textContent = blankSpace;

console.log(randomWord)

///////////Array of the Random Word///////////
var randomArr = [];

function ranArray() {
    for (var x = 0; x < randomWord.length; x++) {
        randomArr.push(randomWord[x]);
    }
    return randomArr;
}
ranArray();

console.log(randomArr);

///////////Array for Blank Space////////////////
var blankWord = [];

function blankSpace() {
    for (var i = 0; i < randomWord.length; i++) {
        blankWord.push("_");
    }
    return blankWord;
}

function printSpace() {
    currentWord.textContent = blankWord.join(" ");
}

console.log(blankSpace());
printSpace();

///////////////////////////////////////////////


guessLeft.textContent = numGuess;
var userGuess;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    userGuess = event.key;


    // 
    if (randomArr.indexOf(userGuess) > -1) {
        for (y = 0; y < randomArr.length; y++) {
            if (randomArr[y] == userGuess) {
                blankWord[y] = userGuess;
                console.log(blankWord);
            }
        }
    }
    else {
        wrongGuess.innerHTML += userGuess + " ";
        numGuess--;
        guessLeft.textContent = numGuess;

    }
    // guessLeft.textContent = numGuess;

    printSpace();
    return blankSpace;

}









// console.log(blankSpace);

// for (i = 0; i < randomWord.length; i++) {

//     }

// document.onkeyup = function (event) {
//   var userinput = event.key
//   if (userinput === "h") {
//     car.honk();
//   }
//   else if (userinput === "d") {
//     car.driveToWork();
//     info();
//   }
//   else if (userinput === "w") {
//     car.driveAroundWorld();
//     info();
//   }
//   else if (userinput === "t") {
//     car.getTuneUp();
//     info();
//   }

// }

