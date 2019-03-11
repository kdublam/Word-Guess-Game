// Sets the number of stars we wish to display
const numStars = 100;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}

// Array of words that are included in game
var words = ["stormtrooper", "chewbecca", "lightsaber", "tatooine", "skywalker", "force", "yoda"]
//Chooses random word from the array
// var randomWord = words[Math.floor(Math.random() * words.length)];
//variables to write text to html
var numWin = document.getElementById("wins_text");
var currentWord = document.getElementById("current_word");
var guessLeft = document.getElementById("guess_text");
var wrongGuess = document.getElementById("letters_guessed");

// guessLeft.textContent = 12;

var numGuess = 12;
var wins = 0;

var lettersGuessed = [];

//Print the number of Wins//
function printWins() {
    numWin.textContent = wins;
}
printWins();

//Start Game//

var randomWord;
function start() {
    randomWord = words[Math.floor(Math.random() * words.length)];
}

start();


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

console.log(blankSpace());
printSpace();

///////////////////////////////////////////////


guessLeft.textContent = numGuess;
var userGuess;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    userGuess = event.key.toLowerCase();


    if ((event.which <= 90 && event.which >= 65) && lettersGuessed.indexOf(userGuess) === -1) {
        lettersGuessed.push(userGuess);
        console.log(lettersGuessed);

        if (randomArr.indexOf(userGuess) > -1) {
            for (y = 0; y < randomArr.length; y++) {
                if (randomArr[y] == userGuess) {
                    blankWord[y] = userGuess;
                    console.log(blankWord);
                    // if (numGuess > 0 && randomArr === blankWord.join('')) {
                    //     alert("You Win!");
                    // }
                    printSpace();
                }
            }
            if (randomArr.toString() === blankWord.toString()) {
                wins++;
                console.log(wins);
                alert("You Win!");
                printWins();
                // randomArr = [];
                // blankWord = [];
                // start();
            }
        }
        else {
            wrongGuess.textContent += userGuess + " ";
            numGuess--;
            guessLeft.textContent = numGuess;
            if (numGuess === 0) {
                alert("You Lose!");
            }
        }
        // guessLeft.textContent = numGuess;

        // printSpace();
        // return blankSpace;
    }
    else if(event.which <= 90 && event.which >= 65) {
        alert("You've tried this letter already");
    }
    else if(event.which >= 48 && event.which <= 57){
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

