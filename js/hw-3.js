'use strict';

let firstOperand = parseInt(prompt('Введите первое число'));
let operator = prompt('Введите один из операторов: "- + * /"');
let secondOperand = parseInt(prompt('Введите второе число'));
let result;

// проверяет условие и показывает результат операции
function calculatorResult() {
  if (firstOperand && secondOperand) {
    alert(`Результат: ${firstOperand}${operator}${secondOperand}= ${result}`);
  } else if (Number.isNaN(firstOperand) || Number.isNaN(secondOperand)) {
    alert('Используйте только числа!');
  }
}

//проверяет оператор
function operatorChecks() {
  switch (operator) {
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
      alert(`Мы не можем выполнить действие с оператором ${operator}`);
  }
  return calculatorResult();
}

operatorChecks();
