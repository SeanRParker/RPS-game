// array of options
var weapon = ["rock", "paper", "scissors"];
var pick;
// var play;

// store user selection
function userPick(choice) {
  pick = choice;
  // clears error message if it is full
  document.getElementById('error').innerHTML = "";
  document.getElementById('user-choice').innerHTML = "You chose: " + choice;

  switch (pick) {
    case 'rock':
    userPick(choice);
    var choice = weapon[0];
    break;
    case 'paper':
    userPick(choice);
    var choice = weapon[1];
    break;
    case 'scissors':
    userPick(choice);
    var choice = weapon[2];
    break;
  }


}
// randomize computer selection
function computerPick() {
  Math.random(Math.floor() * 3);
}


// compare computer pick and user pick to get a result
// function play{
//
// }

// If they pick the orange button they automatically lose
function orange() {
  document.getElementById('error').innerHTML = "You done messed up A-a-ron! What do you mean shoot? Nobody brought a gun to this fight.";
}
