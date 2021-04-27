# pig-dice

#### _Pig Dice_

#### By _**Nicci Kaufman**_

## Technologies Used

* _HTML/CSS_
* _Javascript/JQuery_

## Description

_Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._


## Known Bugs

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

## Contact Information

_niccikaufman@gmail.com_

## TDD
- _Description:_ It can display the inputted names of each player when "Start Game" is clicked.
- _Input:_ Player1: Nicci, Player2: Kira
- _Expected Output:_ Players: Nicci, Kira

#### rollDice()
- _Description:_ It can display a random number between 1 and 6 when the roll button is clicked
- _Input:_ randomNumber();
- _Expected Output:_ rollResult = 5;

#### checkNumber()
- _Description:_ Will check if the roll result equals 1 and determine turn score
- _Input:_ rollDice(); rollResult = 1; 
- _Expected Output:_ "Sorry! Your turn has ended."

#### endTurn()
- _Description:_ Will add player's turn score to game score and clear turn score
- _Input:_ turnScore = 15; gameScore = 0;
- _Expected Output:_ turnScore = 0; gameScore = 15;

#### checkForWin()
- _Description:_ Will check player's current game score and display a message if it is greater than or equal to 100
- _Input:_ gameScore = 103
- _Expected Output:_ "Winner!"
