var num1
var num2
var operator
var display = document.getElementById('display');


function getNum(n){
  if (num1 == null) {
    num1 = n;
  } else {
    num2 = n;
  }
  display.value = n;
}

// Do maths
function add(){
  display.value = num1 + num2;
}
function subtract(){
  display.value = num1 - num2;
}
function multiply(){
  display.value = num1 * num2;
}
function divide(){
  display.value = num1 / num2;
}

// Set an if statement that concatenate digits into num1 or num2 if an operator hasn't been picked yet.

function getOperator(o) {
  operator = o;
  display.value = o;
}

function calculate() {
  if (!num1 || !num2) {
    alert("You must pick a number!")
  } else{
    switch(operator) {
      case '+':
        add();
        break;
      case '-':
        subtract();
        break;
      case '*':
        multiply();
        break;
      case '/':
        divide();
        break;
    }

    //TODO erase();
    // create a Clear button
    // Replace num1 with the result of the current equation
    // Set num2 and operator to null

  }
}

function erase() {
  num1 = null;
  num2 = null;
  operator = null;
}

//

// Let it get as many digits as the user hits until an operator is pressed.
// Show the user input on the 'screen'

// Get the operator
// Show the user input and operator on the 'screen' ()

// Get second user input
// Let it get as many digits as the user hits until an operator is pressed.
// Show user input on screen along with the operator.

// Getting user inputs should be a function with a loop that only stops when the equals sign is pressed.
