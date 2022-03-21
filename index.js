const greetings = 'Приветствую!';
alert(greetings);

let userName = prompt('Представьтесь, пожалуйста:');
let userAge = prompt('Укажите Ваш возраст:');

if (!parseInt(userAge)) {
  alert('Возраст нужно писать числом.');
} else if (userName <= 0) {
  alert('Вы не указали имя.');
} else if (userName.trim().length && userAge.trim().length > 0) {
  alert(`Добро пожаловать, ${userName}. Ваш возраст: ${userAge}`);
}

// const greetingMessage = 'Здоровенькі були!';

// alert(greetingMessage);

// let userName = prompt('Як вас звати?');
// let userAge = parseInt(prompt('Cкільки вам років?'));

// if (userName.trim().length && userAge) {
//   console.log(`Вітаю пане ${userName}. Вам ${userAge} років!`);
// } else if (Number.isNaN(userAge)) {
//   alert('Вкажіть будь-ласка вік числами!');
// } else if (!userName.trim().length) {
//   alert('Введіть хоча б першу літеру вашого імені!');
// }
