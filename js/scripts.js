// back end logic
let rollResult, player1, player2;

class Player {
  constructor(name) {
    this.name = name;
    this.turnScore = 0;
    this.gameScore = 0;
    this.rollResult = 0;
  }
  rollDice() {
    this.rollResult = Math.floor(Math.random() * 6) + 1;
    this.checkNumber(this.rollResult);
    console.log(this.rollResult);
  }
  checkNumber() {
    if (this.rollResult === 1) {
      this.turnScore = 0;
      this.endTurn();
    } else if (this.rollResult !== 1) {
      this.turnScore += this.rollResult;
    }
  }
  endTurn() {
    this.gameScore += this.turnScore;
    this.turnScore = 0;
    this.checkForWin();
    if(this.name === player1.name) {
      player1Switch();
    } else {
      player2Switch();
    }
  }
  checkForWin() {
    if (this.gameScore >= 100) {
      this.endGame();
    } 
  }
}

//front end logic

function player1Switch() {
  $('#player2-area').removeClass('disableGamingArea');
  $('#player1-area').addClass('disableGamingArea');
  $('button#player1-roll').prop('disabled', true);
  $('button#player1-hold').prop('disabled', true);
  $('button#player2-roll').prop('disabled', false);
  $('button#player2-hold').prop('disabled', false);
}

function player2Switch() {
  $('#player1-area').removeClass('disableGamingArea');
  $('#player2-area').addClass('disableGamingArea');
  $('button#player1-roll').prop('disabled', false);
  $('button#player1-hold').prop('disabled', false);
  $('button#player2-roll').prop('disabled', true);
  $('button#player2-hold').prop('disabled', true);
}

function clearScores(){
  player1.turnScore = 0;
  player2.turnScore = 0;
  player1.gameScore = 0;
  player2.gameScore = 0;
  $("#player1-area").hide();
  $("#player2-area").hide();
}

//end game
function endGame() {
  clearScores();
  alert("Winner!");
  $("#new-game").show();
  $("#dice-display").hide();
}

//start button event listener
$("button#game-start").click(function(event) {
  event.preventDefault();
  player1 = new Player($("#player1-name").val());
  player2 = new Player($("#player2-name").val());
  $("#player-names").hide();
  $("#player1-name-display").append($("#player1-name").val());
  $("#player2-name-display").append($("#player2-name").val());
  $("#player1-area").show();
  $("#player2-area").show();
  $("#dice-display").show();
  $("#new-game").hide();
  $('#player2-area').addClass('disableGamingArea');
  $('button#player2-roll').prop('disabled', true);
  $('button#player2-hold').prop('disabled', true);
})

//player roll event listener
$("button#player1-roll").click(function(event) {
  event.preventDefault();
  player1.rollDice();
  $("#player1-turnscore").text(player1.turnScore);
  $("#player1-rollscore").text(rollResult);
  $("#dice-display").html("<img src='images/" + rollResult + ".jpg' class='img-responsive'>");
})

$("button#player2-roll").click(function(event) {
  event.preventDefault();
  player2.rollDice();
  $("#player2-turnscore").text(player2.turnScore);
  $("#player2-rollscore").text(rollResult);
  $("#dice-display").html("<img src='images/" + rollResult + ".jpg' class='img-responsive'>");
})

//player end turn event listener
$("button#player1-hold").click(function(event) {
  event.preventDefault();
  player1.endTurn();
  player1Switch();
  $("#player1-gamescore").text(player1.gameScore);
  $("#player1-turnscore").text("");
  $("#player1-rollscore").text("");

})

$("button#player2-hold").click(function(event) {
  event.preventDefault();
  player2.endTurn();
  player2Switch();
  $("#player2-gamescore").text(player2.gameScore);
  $("#player2-turnscore").text("");
  $("#player2-rollscore").text("");
})

//new game button event listener
$("button#new-game").click(function() {
  $("#player-names").show();
  $("input#player1-name").val("");
  $("input#player2-name").val("");
  $("#new-game").hide();
})
