const arr = ["Rock", "Paper", "Scissors"];
let myTimeout;

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
window.addEventListener('click', run);

// function to read what player has clicked
function playerSelection(e) {
    return capitalizeFirstLetter(e.target.id); // return String
}

function playRound(e) {
    let playerMove = playerSelection(e);
    let computerMove = computerSelection();
    switch (playerMove) {
        case computerMove:
            return [2, "Draw!"];
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
    const playerScorediv = document.querySelector('#player');
    const computerScorediv = document.querySelector('#computer');
    const announcementdiv = document.querySelector('.announce');
    // HTML injection for announcing result of each round
    window.clearTimeout(myTimeout)
    announceResult(announcementdiv, result);
    let playerScore = Number(playerScorediv.textContent);
    let computerScore = Number(computerScorediv.textContent);
    if (result[0] == 0) { // Player lose
        computerScore++;
        // Update score
        computerScorediv.textContent = `${computerScore}`;
    }
    if (result[0] == 1) { // Player win
        playerScore++;
        // Update score
        playerScorediv.textContent = `${playerScore}`;
    }
    // Draw, nothing happens
    if (playerScore == 5) {
        restartGame("player");
    }
    if (computerScore == 5) {
        restartGame("computer");
    }
}

function announceResult(div, result) {
    div.textContent = result[1];
    return;
}

// removing annoucement after 3 seconds
function removeAnnouncement() {
    const announcementdiv = document.querySelector('.announce');
    announcementdiv.textContent = "";
}

function run(e) {
    printResult(e);
    myTimeout = setTimeout(removeAnnouncement, 3000);;
}

// Restart game when hit score of 5
function restartGame(winner) {
    const playerScorediv = document.querySelector('#player');
    const computerScorediv = document.querySelector('#computer');
    const announcementdiv = document.querySelector('.announce');
    computerScorediv.textContent = 0;
    playerScorediv.textContent = 0;
    if (winner == "player") {
        announcementdiv.textContent = "You are the WINNER!"
        myTimeout = setTimeout(removeAnnouncement, 3000);;
    }
    if (winner == "computer") {
        announcementdiv.textContent = "You lost to the computer"
        myTimeout = setTimeout(removeAnnouncement, 3000);;
    }
    return null;
}