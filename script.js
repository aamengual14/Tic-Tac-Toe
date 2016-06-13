 $(document).ready(function() {


 var state = false;
 var currentPlayer = 1;

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


 var askRandomEquation = function() {
   var result;
   var count = 0;
   for (var key in math) {
     if (math.hasOwnProperty(key)) {
       if (Math.random() < 1/++count) {
         result = math[key];
       }
     }
  }
  return result;
}



function switchPlayer() {
    if (currentPlayer === 1){
        currentPlayer = 2;
    } else {
      currentPlayer = 1
    };
};


function getSquare(number) {
  return $("s" + number).text;
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getSquare(a) === move && getSquare(b) === move && getSquare(c) === move) {
    result = true;
  }
  return result;
}

function checkWinner(move) {
  var result = false;
  if (move.text != " ") {
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
      result = true;
    }
  }
  return alert('winner');
}









   $('button').one('click', function(event) {

  //var equation = askRandomEquation();
   state = !state;
   if (state) {
     //equation;
     //var test = eval(equation);
     //var answer = eval(prompt(equation));
     //if (answer === test) {
      $(this).html('X');
      checkWinner('X');
      switchPlayer();
     } else {
      //alert('wrong, opponent steals square.');
      $(this).html('O');
      checkWinner('0');
      //switchPlayer();
      }


});
});






/*
    $('button').one('click', function(event) {

       var equation = askRandomEquation();
   state = !state;
   if (state) {
     equation;
     var test = eval(equation);
     var answer = eval(prompt(equation));
     if (answer === test) {
      $(this).html('X');
      switchPlayer();
     } else {
      alert('wrong');
      equation;
        var test = eval(equation);
        var answer = eval(prompt(equation));
         if (answer === test) {
           $(this).html('O');
         } else {
          alert('wrong');
          switchPlayer();
         }
     }
   }
  });

  */

  /*$('button').one('click', function(event) {

  //var equation = askRandomEquation();
   state = !state;
   if (state) {
     //equation;
     //var test = eval(equation);
     //var answer = eval(prompt(equation));
     //if (answer === test) {
      $(this).html('X');
      switchPlayer();
     } else {
      //alert('wrong, opponent steals square.');
      $(this).html('O');
      //switchPlayer();
      }


});

*/




