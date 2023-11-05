// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
// After the user enters a valid operation, ask the user, "Please enter the first number"
// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result


const rs = require('readline-sync');

let result = 0;
let numbers = [];
let operation = 0;
let firstNumber = 0;
let secondNumber = 0;


function calculate(firstNumber, secondNumber) {
  if (operation === '+') {
    return sum = firstNumber + secondNumber;
  } else if (operation === '-') {
    return difference = firstNumber - secondNumber;
  } else if (operation === '*') {
    return product = firstNumber * secondNumber;
  } else if (operation === '/') {
    let quotient = firstNumber / secondNumber;
    return quotient.toFixed(2);
  };
}
operation = rs.question('What operation would you like to perform? ', {
  limit: [ '*', '/', '+', '-'],
  limitMessage: "That is not a valid operation"
});

firstNumber = rs.questionInt("Please enter the first number ", {
  limit: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  limitMessage: 'This is not a number'
});

secondNumber = rs.questionInt("Please enter the second number ", {
  limit: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  limitMessage: 'This is not a number'
});

result = calculate(firstNumber, secondNumber);

console.log('The result is ' + result);
