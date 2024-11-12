/*-------------------------------- Constants --------------------------------*/
const DISPLAY = document.querySelector('.display');
const BUTTONS = document.querySelectorAll('.button');

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
// (Already cached in the Constants section)

/*----------------------------- Event Listeners -----------------------------*/
BUTTONS.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      clearDisplay();
    } else if (value === '=') {
      calculateResult();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      handleOperator(value);
    } else {
      handleNumber(value);
    }
  });
});

/*-------------------------------- Functions --------------------------------*/
function clearDisplay() {
  currentInput = '';
  operator = '';
  DISPLAY.textContent = '0';
}

function calculateResult() {
  if (operator) {
    const result = eval(currentInput);
    currentInput = result;
    operator = '';
    DISPLAY.textContent = result;
  }
}

function handleOperator(op) {
  operator = op;
  currentInput += op;
  DISPLAY.textContent = currentInput;
}

function handleNumber(num) {
  currentInput += num;
  DISPLAY.textContent = currentInput;
}