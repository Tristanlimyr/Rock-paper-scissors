const arr = ["Rock", "Paper", "Scissors"];

function computerSelection() {
    return arr[randomIdx()];
}

function randomIdx() {
    return Math.floor(Math.random() * 3);
}

function capitalizeFirstLetter(word) {
    word = word.toLowerCase();
    return word.charAt(0).toUpperCase().concat(word.slice(1));
}

// from player perspective
function announceLose(computerSelection, playerSelection) {
    return [0, `You Lose! ${computerSelection} beats ${playerSelection}!`];
}

// from player perspective
function announceWin(computerSelection, playerSelection) {
    return [1, `You Win! ${playerSelection} beats ${computerSelection}!`];
}

// event selection
window.addEventListener('click', printResult)

// function to read what player has clicked
function playerSelection(e) {
    return capitalizeFirstLetter(e.target.id); // return String
}

function playRound(e) {
    let playerMove = playerSelection(e);
    let computerMove = computerSelection();
    switch (playerMove) {
        case computerMove:
            return [1, "Draw!"];
        case "Rock":
            if (computerMove == "Paper") {
                return announceLose(computerMove, playerMove);
            }
            else {
                return announceWin(computerMove, playerMove);
            }
        case "Paper":
            if (computerMove == "Scissors") {
                return announceLose(computerMove, playerMove);
            }
            else {
                return announceWin(computerMove, playerMove);
            }
        case "Scissors":
            if (computerMove == "Rock") {
                return announceLose(computerMove, playerMove);
            }
            else {
                return announceWin(computerMove, playerMove);
            }
    }
}

function printResult(e) {
    let result = playRound(e);
    console.log(result[1]);
}