// Sets the number of stars we wish to display
const numStars = 250;

// For every star we want to display
for (var i = 0; i < numStars; i++) {
    var star = document.createElement("div");
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.appendChild(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}

// Array of words that are included in game
var words = ["stormtrooper", "chewbecca", "lightsaber", "tatooine", "skywalker", "force", "yoda", "tauntaun", "padme", "princessleia", "droid", "sandpeople", "palpatine", "wookiee", "endor", "ewoks", "jawas", "rebels", "imperial", "alderaan", "jedi", "sith", "darthvader", "lando", "ackbar", "carbonite", "galaxy", "padawan", "queenamidala", "jabbathehutt", "hoth", "naboo", "bespin", "coruscant", "yavin", "anakin", "hansolo", "bobafett", "obiwankenobi", "cantina", "blaster", "artoo", "father", "darkside", "republic", "thermaldetonator" ]
//Chooses random word from the array
// var randomWord = words[Math.floor(Math.random() * words.length)];
//variables to write text to html
var startText = document.getElementById("start_text");
var numWin = document.getElementById("wins_text");
var numLost = document.getElementById("lost_text")
var currentWord = document.getElementById("current_word");
var guessLeft = document.getElementById("guess_text");
var wrongGuess = document.getElementById("letters_guessed");

startText.textContent = "Choose a letter from A-Z to begin your mission";

// guessLeft.textContent = 12;

var numGuess;
var wins = 0;
var losses = 0;

var lettersGuessed;

//Print the number of Wins//
function printWins() {
    numWin.textContent = "Wins: " + wins;
}
printWins();

//Print the number of Losses//

function printLosses() {
    numLost.textContent = "Losses: " + losses;
}
printLosses();

//Start Game//

var randomWord;
var randomArr;
var blankWord;
function start() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersGuessed = [];
    numGuess = 12;
    guessLeft.textContent = numGuess;
    randomArr = [];
    for (var x = 0; x < randomWord.length; x++) {
        randomArr.push(randomWord[x]);
    }
    return randomArr;


}

start();


//Display the word in play with blank spaces
// var blankSpace = randomWord.replace(/./g, "_ ");
// currentWord.textContent = blankSpace;

console.log(randomWord)

///////////Array of the Random Word///////////
// var randomArr = [];

// function ranArray() {
//     // for (var x = 0; x < randomWord.length; x++) {
//     //     randomArr.push(randomWord[x]);
//     // }
//     // return randomArr;
// }
// ranArray();

console.log(randomArr);

///////////Array for Blank Space////////////////
var blankWord = [];

//////////Print the blank Spaces///////////////
function blankSpace() {
    for (var i = 0; i < randomWord.length; i++) {
        blankWord.push("_");
    }
    return blankWord;
}

function printSpace() {
    currentWord.textContent = blankWord.join(" ");
}

// console.log(blankSpace());

// Call the functions to print spaces on screen//
blankSpace();
printSpace();

///////////////////////////////////////////////

var winMusic = document.getElementById("winmusic");
var loseMusic = document.getElementById("losemusic");

var introMusic = document.getElementById("intro");
var correctMusic = document.getElementById("correct");
var wrongMusic = document.getElementById("wrong");
var luke = document.getElementById("luke");
var chewy = document.getElementById("chewy");
var jarjar = document.getElementById("jarjar");
var force = document.getElementById("force");

function introAud() {
    introMusic.play();
}
function introPause() {
    introMusic.pause();
}

function winAud() {
    winMusic.play();
}
function loseAud() {
    loseMusic.play();
}

function correctAud() {
    correctMusic.play();
}
function wrongAud() {
    wrongMusic.play();
}
function lukeVoice() {
    luke.play();
}
function chewyVoice() {
    chewy.play();
}
function jarjarVoice() {
    jarjar.play();
}
function hanVoice() {
    force.play();
}



// guessLeft.textContent = numGuess;
var userGuess;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    userGuess = event.key.toLowerCase();


    if ((event.which <= 90 && event.which >= 65) && lettersGuessed.indexOf(userGuess) === -1) {
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);
        startText.textContent = "";

        if (randomArr.indexOf(userGuess) > -1) {
            for (y = 0; y < randomArr.length; y++) {
                if (randomArr[y] == userGuess) {
                    blankWord[y] = userGuess;
                    console.log(blankWord);
                    // if (numGuess > 0 && randomArr === blankWord.join('')) {
                    //     alert("You Win!");
                    // }
                    correctAud()
                    printSpace();
                }
            }
            if (randomArr.toString() === blankWord.toString()) {
                wins++;
                // alert("You Win!");
                hanVoice();
                printWins();
                // randomArr = [];
                // blankWord = [];
                start();
                lettersGuess = [];
                blankWord = [];
                blankSpace();
                printSpace();
                wrongGuess.textContent = "";
                if (wins === 6) {
                    winAud();
                    alert("You Win! You have freed the rebels!");
                    wins = 0;
                    losses = 0;
                    printWins();
                    printLosses();
                }

            }
        }
        else {
            wrongGuess.textContent += userGuess + " ";
            wrongAud();
            numGuess--;
            guessLeft.textContent = numGuess;
            if (numGuess === 0) {
                // alert("You Lose!");
                jarjarVoice();
                losses++;
                printLosses();
                start();
                lettersGuess = [];
                blankWord = [];
                blankSpace();
                printSpace();
                wrongGuess.textContent = "";
                if (losses === 3) {
                    loseAud();
                    alert("You Lose! The rebels will not be forgetten...");
                    losses = 0;
                    wins = 0;
                    printWins();
                    printLosses();
                }
            }
        }
        // guessLeft.textContent = numGuess;

        // printSpace();
        // return blankSpace;
    }
    else if (event.which <= 90 && event.which >= 65) {
        chewyVoice();
        alert("You've tried this letter already");
    }
    else if (event.which >= 48 && event.which <= 57) {
        lukeVoice();
        alert("Please only chooes from A-Z");
    }

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

