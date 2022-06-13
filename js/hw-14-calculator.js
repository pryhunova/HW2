const refs = {
  numberButtons: document.querySelectorAll('[data-number]'),
  operationButtons: document.querySelectorAll('[data-operation]'),
  equalsButton: document.querySelector('[data-equals]'),
  allClearButton: document.querySelector('[data-all-clear]'),
  // previousOperandTextElement: document.querySelector('[data-previous-operand]'),
  currentValue: document.querySelector('[data-current-operand]'),
};

let a = '';
let b = '';
let calculationSign = '';
let result = false;

const clearAll = () => {
  a = '';
  b = '';
  calculationSign = '';
  result = false;
  refs.currentValue.textContent = '0';
};

refs.allClearButton.addEventListener('click', () => {
  clearAll();
});

refs.numberButtons.forEach(button => {
  button.addEventListener('click', event => {
    refs.currentValue.textContent = '';

    if (b === '' && calculationSign === '') {
      a += event.target.textContent;
      refs.currentValue.textContent = a;
    } else if (a !== '' && b !== '' && result) {
    } else {
      b += event.target.textContent;
      refs.currentValue.textContent = b;
    }
  });
});

refs.operationButtons.forEach(operator => {
  operator.addEventListener('click', event => {
    calculationSign += event.target.textContent;
    refs.currentValue.textContent = calculationSign;
    console.log(a, b, calculationSign);
  });
});

refs.equalsButton.addEventListener('click', e => {
  switch (e) {
    case '+':
      a = a + b;
      break;
    case '-':
      a = a - b;
      break;
    case 'x':
      a = a * b;
      break;
    case '/':
      a = a / b;
      break;
  }
  result = true;
  refs.currentValue.textContent = a;
  console.log(a, b, calculationSign);
});
