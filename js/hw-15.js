const containerRef = document.querySelector('.container');

const titleElement = document.createElement('h1');
const pElement = document.createElement('p');
const inputElement = document.createElement('input');
const buttonElement = document.createElement('button');

titleElement.textContent = 'Наталия Прыгунова';
pElement.textContent = 'Создаём страницу с элементами без использования html';
buttonElement.style.margin = '10px';
buttonElement.textContent = 'Ввод';

buttonElement.addEventListener('click', () => {
  alert(inputElement.value);
  inputElement.value = '';
});

containerRef.append(titleElement, pElement, inputElement, buttonElement);
