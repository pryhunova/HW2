'use strict';

const movies = [
  { id: 1, name: 'Shutter Island', cost: 5.99 },
  { id: 2, name: 'Deadpool', cost: 4.99 },
  { id: 3, name: 'Deadpool 2', cost: 4.99 },
  { id: 4, name: 'Alien', cost: 13.99 },
  { id: 5, name: 'The Shawshank Redemption', cost: 4.99 },
  { id: 6, name: 'Inception', cost: 4.99 },
  { id: 7, name: 'Fight Club', cost: 5.99 },
  { id: 8, name: 'The Matrix', cost: 13.99 },
  { id: 9, name: 'Interstellar', cost: 4.99 },
  { id: 10, name: 'The Silence of the Lambs', cost: 4.99 },
];

const cart = [];

function addToCart(id) {
  const movie = movies.find(movie => movie.id === id);
  return cart.push(movie);
}

function printCheck() {
  cart.map((item, i) => {
    console.log(`${i + 1} ${item.name} цена: ${item.cost}`);
  });
}

function getTotalPrice() {
  const totalPrice = cart.reduce((total, { cost }) => total + cost, 0);
  console.log(`Итого: ${totalPrice}`);
}

addToCart(2);
addToCart(5);
addToCart(8);
printCheck();
getTotalPrice();
