// back end logic
let player1, player2, rollResult;
let turnScore = 0;
let gameScore = 0;

function Player(name, turnScore, gameScore, active) {
  this.name = name;
  this.turnScore = turnScore;
  this.gameScore = gameScore;
  this.active = active;
}

//rolls dice
function rollDice() {
  rollResult = Math.floor(Math.random() *  6 ) + 1;
  return rollResult;
}

//checks number and calculates turn/game score
function checkNumber(rollResult) {
  if (rollResult === 1) {
    turnScore = 0;
    console.log(`Sorry, ${this.name}! You rolled a 1 so your turn score is ${turnScore}.`)
  } else {
    turnScore += rollResult;
    console.log(`${this.name}, you rolled a ${rollResult}. Total score is currently ${turnScore}`);
  }
}

//calculates current player game score
function holdTurn() {
}

//switches to the other player
function switchActivePlayer() {
}

//checks if player game score is 100 and displays winner
function winCondition(){
}

//front end logic

//start button event listener
$("button#game-start").click(function(event) {
  event.preventDefault();
  player1 = new Player($("#player1-name").val());
  player2 = new Player($("#player2-name").val());
  $("#player1-area").show();
  $("#player2-area").show();
})

//roll button event listener
$("button.btn-roll").click(function(event) {
  event.preventDefault();
  rollDice();
  checkNumber(rollResult);
})

//hold button event listener
$("button.btn-hold").click(function(event) {
  event.preventDefault();
  holdTurn();
  switchActivePlayer();
})

