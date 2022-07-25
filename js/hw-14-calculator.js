class Calculator {
  constructor(previousValueEl, currentValueEl) {
    this.previousValueEl = previousValueEl;
    this.currentValueEl = currentValueEl;
    this.allClear();
  }

  allClear() {
    this.currentValue = '';
    this.previousValue = '';
    this.operator = undefined;
  }

  backspace() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    if (this.currentValue === '') {
      this.currentValue = 0;
    }
  }

  appendNumber(number) {
    if (number === ',' && this.currentValue.includes(',')) return;
    this.currentValue = this.currentValue.toString() + number.toString();
  }

  operatorChecks(operator) {
    if (this.currentValue === '') return;
    if (this.currentValue !== '') {
      this.compute();
    }
    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = '';
  }

  compute() {
    let result;
    const firstOperand = parseFloat(this.previousValue);
    const secondOperand = parseFloat(this.currentValue);

    if (isNaN(firstOperand) || isNaN(secondOperand)) return;

    switch (this.operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }
    this.currentValue = result;
    this.operator = undefined;
    this.previousValue = '';
  }

  updateDisplay() {
    this.currentValueEl.innerText = this.currentValue;

    if (this.operator != null) {
      this.previousValueEl.innerText = `${this.previousValue} ${this.operator}`;
    } else {
      this.previousValueEl.innerText = '';
    }
  }
}

const refs = {
  numberButtons: document.querySelectorAll('[data-number]'),
  operationButtons: document.querySelectorAll('[data-operation]'),
  equalsButton: document.querySelector('[data-equals]'),
  allClearButton: document.querySelector('[data-all-clear]'),
  backspaceButton: document.querySelector('[data-backspace]'),
  previousValueEl: document.querySelector('[data-previous-operand]'),
  currentValueEl: document.querySelector('[data-current-operand]'),
};

const calculator = new Calculator(refs.previousValueEl, refs.currentValueEl);

refs.numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

refs.operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.operatorChecks(button.innerText);
    calculator.updateDisplay();
  });
});

refs.equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

refs.allClearButton.addEventListener('click', () => {
  calculator.allClear();
  calculator.updateDisplay();
});

refs.backspaceButton.addEventListener('click', () => {
  calculator.backspace();
  calculator.updateDisplay();
});
