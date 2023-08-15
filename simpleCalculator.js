var readlineSync = require('readline-sync');
 
let firstNumber, secondNumber;

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case 'addition':
      return num1 + num2;
    case 'subtraction':
      return num1 - num2;
    case 'multiplication':
      return num1 * num2;
    case 'division':
      return num1 / num2;
    default:
      return "No operation selected";
  }
}

const  arithmeticOperations = [{name: 'Addition', symbol: '+'}, {name: 'Subtraction', symbol: '-'}, {name: 'Multiplication', symbol: '*'}, {name: 'Division', symbol: '/'}];

let operationNames = arithmeticOperations.map(operation => operation.name);

const startCalculation = () => {
  for(let i = 0; i < 5; i++){
  inputValue = readlineSync.question('Enter the first number: ');
  if(!isNaN(inputValue)) {
    firstNumber = Number(inputValue);
    break;
  }else{
    console.log('Invalid Input. Kindly enter a number.');
  }
}

if(isNaN(firstNumber)) {
  console.log('Exiting... This program only accepts numbers.');
  return;
}

for(let i = 0; i < 5; i++){
  inputValue = readlineSync.question('Enter the second number: ');
  if(!isNaN(inputValue)) {
    secondNumber = Number(inputValue);
    break;
  }else{
    console.log('Invalid Input. Kindly enter a number.');
  }
}

if(isNaN(secondNumber)) {
  console.log('Exiting... This program only accepts numbers.');
  return;
}

console.log("\n\nChoose an operation: ");
const arithmeticIndex = readlineSync.keyInSelect(operationNames, 'Enter the number corresponding to the operation: ');

let result = calculate(firstNumber, secondNumber, arithmeticOperations[arithmeticIndex]?.name.toLowerCase());

if(result !== 'No operation selected') {
  console.log(`\nResult: ${firstNumber} ${arithmeticOperations[arithmeticIndex]?.symbol ?? '' } ${secondNumber} = ${result} \n`);
}else{
  console.log('\nNo operation selected\n');
}

 const restartCalculation = readlineSync.keyInYNStrict('Do you want to perform another calculation? Press Y for Yes and N for No: ');
 restartCalculation ? startCalculation() : console.log('\nThank you for using this app. Goodbye!...');
};

startCalculation();




