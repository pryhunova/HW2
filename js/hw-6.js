'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  let question = +prompt('Введите число');

  if (Number.isNaN(question)) {
    alert('Используйте только числа!');
  } else {
    isEven();
    isPrime();
  }
  function isEven() {
    if (question % 2 == 0) {
      alert('Вы ввели чётное число');
    }
  }

  function isPrime() {
    for (let i = 2; i < question; i++) {
      if (question % i === 0) return false;
    }
    return alert('Вы ввели простое число');
  }
});
