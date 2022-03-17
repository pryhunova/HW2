const greetings = "Приветствую!";
alert(greetings);

let userName = prompt("Представьтесь, пожалуйста:");
let userAge = prompt("Укажите Ваш возраст:");

if (userName.length && userAge.length > 0) {
  alert(`Добро пожаловать, ${userName}. Ваш возраст: ${userAge}`);
} else {
  alert("Вы ввели не все данные!");
}
