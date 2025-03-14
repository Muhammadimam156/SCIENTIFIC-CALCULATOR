let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return;
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (operator === null || currentInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '^':
      result = Math.pow(prev, current);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function calculateSquareRoot() {
  if (currentInput === '') return;
  const num = parseFloat(currentInput);
  if (num < 0) {
    currentInput = 'Error';
  } else {
    currentInput = Math.sqrt(num).toString();
  }
  updateDisplay();
}

function calculatePower() {
  if (currentInput === '') return;
  previousInput = currentInput;
  currentInput = '';
  operator = '^';
  updateDisplay();
}

function calculateFactorial() {
  if (currentInput === '') return;
  const num = parseInt(currentInput);
  if (num < 0) {
    currentInput = 'Error';
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    currentInput = result.toString();
  }
  updateDisplay();
}

function calculatePercentage() {
  if (currentInput === '') return;
  const num = parseFloat(currentInput);
  currentInput = (num / 100).toString();
  updateDisplay();
}

function calculateExponential() {
  if (currentInput === '') return;
  const num = parseFloat(currentInput);
  currentInput = Math.exp(num).toString();
  updateDisplay();
}

function calculateLog() {
  if (currentInput === '') return;
  const num = parseFloat(currentInput);
  if (num <= 0) {
    currentInput = 'Error';
  } else {
    currentInput = Math.log10(num).toString();
  }
  updateDisplay();
}

function calculateLn() {
  if (currentInput === '') return;
  const num = parseFloat(currentInput);
  if (num <= 0) {
    currentInput = 'Error';
  } else {
    currentInput = Math.log(num).toString();
  }
  updateDisplay();
}

function insertPi() {
  currentInput = Math.PI.toString();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}