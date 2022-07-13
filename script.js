const arr = ["Rock", "Paper", "Scissors"];

function computerSelection() {
    return arr[randomIdx()];
}

function randomIdx() {
    return Math.floor(Math.random() * 3);
}

function playerSelection() {
    let playerMove = capitalizeFirstLetter(prompt("What is your move?"));
    // catch invalid inputs
    if (arr.includes(playerMove)) {
        return playerMove;
    }
    else {
        alert("Invalid input. Try again.");
        return null;
    }
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

function playRound(computerSelection, playerSelection) {
    // valid playerSelection 
    if (playerSelection) {
        switch (playerSelection) {
            case computerSelection:
                return [1, "Draw!"];
            case "Rock":
                if (computerSelection == "Paper") {
                    return announceLose(computerSelection, playerSelection);
                }
                else {
                    return announceWin(computerSelection, playerSelection);
                }
            case "Paper":
                if (computerSelection == "Scissors") {
                    return announceLose(computerSelection, playerSelection);
                }
                else {
                    return announceWin(computerSelection, playerSelection);
                }
            case "Scissors":
                if (computerSelection == "Rock") {
                    return announceLose(computerSelection, playerSelection);
                }
                else {
                    return announceWin(computerSelection, playerSelection);
                }
        }
    }
}

function game(rounds) {
    let playerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let result = playRound(computerSelection(), playerSelection());
        playerScore += result[0];
        // display result of each round
        console.log(result[1]);
    }
    // calculating scores
    let percentageWins = playerScore / rounds;
    if (percentageWins >= 0.5) {
        console.log("You Won!");
    }
    else {
        console.log("You Lose!");
    }
    return null;
}

game(5)
