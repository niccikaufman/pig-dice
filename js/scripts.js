// back end
let player1, player2, rollResult;
let btnRoll = $('button.btn-roll');
let btnHold = $('button.btn-hold');

function Player(name, roundScore, gameScore) {
  this.name = name;
  this.turnScore = 0;
  this.gameScore = gameScore;
  this.active = true;
}
//start game button event listener
$("#game-start").click(function(event) {
  event.preventDefault();
  player1 = new Player($("#player1-name").val());
  player2 = new Player($("#player2-name").val());
  console.log(player1.name + ", " + player2.name);
});

function randomNumber() {
  rollResult = Math.floor(Math.random() *  6 ) + 1;
  return rollResult;
}

function numberEqualsOne() {
  gameScore = 0;
  console.log(`Sorry, ${this.name}! You rolled a 1 so your turn has ended and your current score is ${this.gameScore}.`)
}

//roll button event listener
$("button.btn-roll").click(function(event) {
  event.preventDefault();
  randomNumber();
  //checks if number equals 1
  if (rollResult === 1) {
    this.turnScore = 0;
    numberEqualsOne();
  } else {
    console.log(`${this.name}, you rolled a ${rollResult}`);
  }
});

//hold button event listener
$("button.btn-hold").click(function(event) {
  event.preventDefault();
})

// function player1Enable() {
//   $("#player1-area").toggle();
//   $("#player2-area").hide();
// }

// function player2Enable() {
//   $("#player2-area").toggle();
//   $("#player1-area").hide();
// }