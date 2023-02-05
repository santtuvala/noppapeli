let player1Name, player2Name, pointsToWin;
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let roundScore = 0;

function startGame() {
player1Name = document.getElementById("player1Name").value;
player2Name = document.getElementById("player2Name").value;
pointsToWin = document.getElementById("pointsToWin").value;
document.getElementById("currentPlayer").innerHTML = "Current Player: " + player1Name;
}

let doublesRolled = 0;

function rollDice() {
let diceRoll1 = Math.floor(Math.random() * 6) + 1;
let diceRoll2 = Math.floor(Math.random() * 6) + 1;
document.getElementById("diceRoll1").innerHTML = "Dice Roll 1: " + diceRoll1;
document.getElementById("diceRoll2").innerHTML = "Dice Roll 2: " + diceRoll2;

if (diceRoll1 == 1 && diceRoll2 == 1) {
roundScore += 25;
alert("Double 1s! 25 points added to round score");
} else if (diceRoll1 == 1 || diceRoll2 == 1) {
roundScore = 0;
doublesRolled = 0;
endTurn();
} else if (diceRoll1 == diceRoll2) {
roundScore += (diceRoll1 + diceRoll2) * 2;
doublesRolled++;
if (doublesRolled == 3) {
alert("3 doubles in a row! Turn goes to the other player.");
endTurn();
}
} else {
roundScore += diceRoll1 + diceRoll2;
doublesRolled = 0;
}
document.getElementById("roundScore").innerHTML = "Round Score: " + roundScore;
}

function endTurn() {
if (currentPlayer == 1) {
player1Score += roundScore;
document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
currentPlayer = 2;
document.getElementById("currentPlayer").innerHTML = "Current Player: " + player2Name;
} else {
player2Score += roundScore;
document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
currentPlayer = 1;
document.getElementById("currentPlayer").innerHTML = "Current Player: " + player1Name;
}
roundScore = 0;
document.getElementById("roundScore").innerHTML = "Round Score: " + roundScore;

if (player1Score >= pointsToWin) {
alert(player1Name + " wins! Resetting the game...");
resetGame();
} else if (player2Score >= pointsToWin) {
alert(player2Name + " wins! Resetting the game...");
resetGame();
}
}
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    roundScore = 0;
    doublesRolled = 0;
    currentPlayer = 1;
  
    document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
    document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
    document.getElementById("roundScore").innerHTML = "Round Score: " + roundScore;
    document.getElementById("currentPlayer").innerHTML = "Current Player: " + player1Name;
  }