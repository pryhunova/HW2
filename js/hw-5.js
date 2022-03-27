'use strict';

const movies = [
  { id: 1, name: 'Fast and Furious', cost: 5.99 },
  { id: 2, name: 'Fast and Furious 2', cost: 3.99 },
  { id: 3, name: 'Fast and Furious 4', cost: 4.99 },
  { id: 4, name: 'Shrek', cost: 12.99 },
];

const cart = [];

function addToCart(id) {
  cart.push(movies.id);
  return cart;
}

function printCheck() {
  // your solution here...
}

addToCart(2);
console.log(addToCart());
addToCart(4);

printCheck();

/*Вам нужно будет реализовать две функции для магазина фильмов напрокат: 
одну для добавления товаров в корзину(она должна называться addToCart) и еще одну для формирования чека(printCheck).

Нужно чтобы при вызове функции addToCart в неё можно было передать уникальный идентификатор
(или по - простому id - шник) фильма.После чего фильм с таким айдишником должен должен попасть в массив товаров с корзиной.

Функция printCheck должна просто вывести всё что есть в корзине в консоль, без id, но с порядковым номером.

Выходной формат должен быть следующим:
№ -- Название фильма -- $цена */
