//Establish a player 1 and a player 2
//When player 1 clicks, the button changes to an X
//When player 2 clicks, the button changes to o
//there needs to be a switching mechanism from player1 to player 2
//establish all of the winning combinations
//if the player1 has any of the winning combos, he wins
//if the player2 has any of the winning combos, he wins the game
//math funciton when you click, if naswer right, you receiver the square
//if not other player receives squar
$(document).ready(function() {

  var playerX = "X";
  var playerO = "O";

  var math = {
    one: "8 * 5",
    two: "6 * 7",
    three: "9 * 8",
    four: "5 * 3",
    five: "2 * 37",
    six: "4 * 12",
    seven: "12 * 11",
    eight: "4 * 6",
    nine: "7 * 4",
    ten: "8 * 8"
  };





$('button').click(function(event) {
    var result;
    var count = 0;
    for (var key in math)
      if (math.hasOwnProperty(key)) {
        if (Math.random() < 1/++count) {
          result = math[key];
        }
      }
    var test = eval(result);
    var answer = eval(prompt(result));
    if (test === answer) {
      alert("good");
    }







});






});
