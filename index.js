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
