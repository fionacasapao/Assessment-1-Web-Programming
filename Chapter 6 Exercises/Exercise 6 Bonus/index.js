
var score = 0; /*creates a variable 'score'*/
var lives = 3; /*player has 3 chances*/
var answerColour; /*store the correct colour*/


var rgbText = document.getElementById("rgbValue"); /*'RGB' will be display*/
var message = document.getElementById("message"); /* either right or wrong will be display*/
var scoreText = document.getElementById("score"); /*shows the current score of the user*/
var livesText = document.getElementById("lives"); /*shows the remaining lives or chances*/
var boxes = document.querySelectorAll(".colour-box"); /*gets all colour boxes*/
var restart = document.getElementById("restartBtn"); /*displays a restart button*/


function getRandomColour() { /*function to create a random colour*/
    var r = Math.floor(Math.random() * 256); /*red (0-255)*/
    var g = Math.floor(Math.random() * 256); /*green (0-255)*/
    var b = Math.floor(Math.random() * 256); /*blue (0-255)*/

    return "rgb(" + r + ", " + g + ", " + b + ")"; /*combines the RGB into a string*/
}


function startRound() { /*function to start a new round*/

    var list = []; /*store colours*/

    for (var i = 0; i < boxes.length; i++) { /*loop through each box*/
        list[i] = getRandomColour(); /*fill the array with any random colour*/
    }

    answerColour = list[Math.floor(Math.random() * list.length)]; /*it picks any random color from the list*/

    rgbText.innerHTML = answerColour; /*show the RGB value on the website*/

    for (var i = 0; i < boxes.length; i++) { /*loop through again every box*/
        boxes[i].style.backgroundColor = list[i]; /*set boxes to a colour*/
    }

    message.innerHTML = "Pick the correct colour!"; /*instruction message*/
}


for (var i = 0; i < boxes.length; i++) { /*loops through each box*/

    boxes[i].addEventListener("click", function () { /*adds click event to each box*/
        if (lives <= 0) { /*if the lives became 0 it means stop the game*/
            return;
        }

        if (this.style.backgroundColor == answerColour) { /*it checks if the color that is clicked is correct*/

            message.innerHTML = "Correct!"; /*displays 'correct' message*/
            score++; /*the score will add 1 if it's correct*/
            scoreText.innerHTML = score; /*it updates the current score on the screen*/

            startRound(); /*start a new round*/

        } else { /*if the answer is wrongt*/

            message.innerHTML = "Wrong!"; /*displays 'wrong' message*/
            lives--; /*the score will reduce 1 if it's wrong*/
            livesText.innerHTML = lives; /*it updates the remaining lives on the screen*/

            if (lives == 0) { /*check if there's still lives left*/
                message.innerHTML = "Game Over! Score: " + score; /*when there's no any lives left 'Game Over! Score:' will be displayed on the screen*/
            }
        }
    });
}

restart.addEventListener("click", function () { /*when the restart button is clicked*/

    score = 0; /*score will go back to 0*/
    lives = 3; /*lives will go back to 3*/

    scoreText.innerHTML = score; /*update the score on the screen*/
    livesText.innerHTML = lives; /*update the remaining lives on the screen*/

    message.innerHTML = "Restarted!"; /*displays 'Restarted' message on the screen*/

    startRound(); /*start a new round*/
});


startRound(); /*runs the game when the page loads*/