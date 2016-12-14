// array of options
var weapon = ["rock", "paper", "scissors"];
var choice = "not selected";
// var play;
// store user selection

// erase functions
function clearErrors() {
  document.getElementById('error').innerHTML = "";
}
function clearPick() {
  document.getElementById('user-choice').innerHTML = "";
  choice = "not selected";
  return choice;
}
function clearResults() {
  document.getElementById('computer-choice').innerHTML = "";
  document.getElementById('outcome').innerHTML = "";
}

// pick weapon function // runs the whole game
function pick (c) {
  // clears error message if it is full


  document.getElementById('user-choice').innerHTML = "You chose: " + c;
  choice = c;
  return choice;
}

function play () {
  var computer = computerPick();

  if (choice == "not selected") {
    document.getElementById('error').innerHTML = "<p class='mistake'>Pick a weapon dummy!</p>";
    clearResults();
  } else {
    var randchoice = computerPick();


    // user selects rock
  if (choice == "rock" && randchoice == "scissors") {
    document.getElementById('outcome').innerHTML = "<p class='win'>Rock smashes scissors!<br />You win!</p>";
  } else if (choice == "rock" && randchoice == "paper") {
    document.getElementById('outcome').innerHTML = "<p class='lose'>Paper covers rock!<br />You lose!</p>";
  } else if (choice == "rock" && randchoice == "rock") {
    document.getElementById('outcome').innerHTML = "<p class='tie'>Tie!<br />You both lose!</p>";
    // user selects paper
    debugger
  } else if (choice == "paper" && randchoice == "scissors") {
    document.getElementById('outcome').innerHTML = "<p class='win'>Paper covers rock!<br />You win!</p>";
  } else if (choice == "paper" && randchoice == "paper") {
    document.getElementById('outcome').innerHTML = "<p class='lose'>Scissors cut paper!<br />You lose!</p>";
  } else if (choice == "paper" && randchoice == "rock") {
    document.getElementById('outcome').innerHTML = "<p class='tie'>Tie!<br />You both lose!</p>";
    // user selects scissors
  } else if (choice == "scissors" && randchoice == "scissors") {
    document.getElementById('outcome').innerHTML = "<p class='win'>Scissors cut paper!<br />You win!</p>";
  } else if (choice == "scissors" && randchoice == "paper") {
    document.getElementById('outcome').innerHTML = "<p class='lose'>Rock smashes scissors!<br />You lose!</p>";
  } else if (choice == "scissors" && randchoice == "rock") {
    document.getElementById('outcome').innerHTML = "<p class='tie'>Tie!<br />You both lose!</p>";
  } else {
    document.getElementById('outcome').innerHTML = "<p class='error'>Something went wrong!</p>";
  }
 }
  return computer;
}

// randomize computer selection
function computerPick() {
  var randomize = weapon[Math.floor(Math.random() * 3)];
  document.getElementById('computer-choice').innerHTML = "Computer chose: " + randomize;
  return randomize;
}


// compare computer pick and user pick to get a result


// If they pick the orange button they automatically lose
function orange() {
  document.getElementById('error').innerHTML = "<p class='mistake'>You done messed up A-a-ron! What do you mean shoot? Nobody brought a gun to this fight!!</p>";
  clearResults();
}
