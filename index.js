// Ask the user, "What operation would you like to perform?"
// Then the user enters one of these options: "/" "*" "-" "+"
// If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
const rs = require('readline-sync');

const opObj = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => (a / b).toFixed(2),
};

function calculate(operationList, operation, firstNumber, secondNumber) {
  return operationList[operation](firstNumber, secondNumber);
}

const getOperation = (limit) => {
  return rs.question('What operation would you like to perform? ', {
    limit,
    limitMessage: "That is not a valid operation"
  });
};

const getNumber = (str) => {
  rs.questionInt(`Please enter the ${str} number `, {
  limitMessage: 'This is not a number'
});
};

const calculator = (opObj) => {
  const opArr = Object.keys(opObj);
  const operation = getOperation(opArr);
  const [firstNumber, secondNumber] = ['first', 'second'].map((item) => 
    getNumber(item)
  );
  const result = calculate(opObj, operation, firstNumber, secondNumber);
  console.log(firstNumber);
  console.log(`The result is ${result}`);
};

calculator(opObj);




// The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
// After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
// Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result