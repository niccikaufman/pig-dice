// back end logic
let rollResult;

function winCondition() {
  console.log("Winner!");
}

let player1 = {
  turnScore: 0,
  gameScore: 0,
  rollResult: 0,
  rollDice() {
    rollResult = Math.floor(Math.random() * 6) + 1;
    console.log(`Player 1 rolled a ${rollResult}`);
    this.checkNumber(rollResult);
  },
  checkNumber() {
    if (rollResult === 1) {
      this.turnScore = 0;
      console.log(`Sorry, Player 1! You rolled a 1 so your turn score is ${this.turnScore}.`);
    } else if (rollResult !== 1) {
      this.turnScore += rollResult;
    }
  },
  endTurn() {
    this.gameScore += this.turnScore;
    console.log(`Current game score = ${this.gameScore}`);
    this.turnScore = 0;
    if (this.gameScore >= 100) {
      winCondition();
    }
  },
}

let player2 = {
  turnScore: 0,
  gameScore: 0,
  rollResult: 0,
  rollDice() {
    rollResult = Math.floor(Math.random() * 6) + 1;
    console.log(`Player 2 rolled a ${rollResult}`);
    this.checkNumber(rollResult);
  },
  checkNumber() {
    if (rollResult === 1) {
      this.turnScore = 0;
      console.log(`Sorry, Player 2! You rolled a 1 so your turn score is ${this.turnScore}.`);
    } else if (rollResult !== 1) {
      this.turnScore += rollResult;
    }
  },
  endTurn() {
    this.gameScore += this.turnScore;
    console.log(`Current game score = ${this.gameScore}`);
    this.turnScore = 0;
    if (this.gameScore >= 100) {
      winCondition();
    }
  },
}

//front end logic

//start button event listener
$("button#game-start").click(function(event) {
  event.preventDefault();
  $("#player1-name-display").append($("#player1-name").val());
  $("#player2-name-display").append($("#player2-name").val());
  $("#player1-area").show();
  $("#player2-area").show();
})

//player roll event listener
$("button#player1-roll").click(function(event) {
  event.preventDefault();
  player1.rollDice();
  $("#player1-turnscore").text(player1.turnScore);
})

$("button#player2-roll").click(function(event) {
  event.preventDefault();
  player2.rollDice();
  $("#player2-turnscore").text(player2.turnScore);
})

//player end turn event listener
$("button#player1-hold").click(function(event) {
  event.preventDefault();
  player1.endTurn();
  $("#player1-gamescore").text(player1.gameScore);
  $("#player1-turnscore").text("");

})

$("button#player2-hold").click(function(event) {
  event.preventDefault();
  player2.endTurn();
  $("#player2-gamescore").text(player2.gameScore);
  $("#player2-turnscore").text("");
})
