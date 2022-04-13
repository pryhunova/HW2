'use strict';
const buttonRef = document.querySelector('#btn');
const hotelRef = document.querySelector('#hotel');
const orderOptionsRef = document.querySelector('#order-options');

const hotel = {
  hotelName: 'Odesa Hotel',
  capacity: 50,
  orderList: [],
  orderConfig: {
    accommodation: ['Room', 'Apartments', 'Cottage'],
    transfer: ['Yes', 'No'],
    breakfast: ['Yes', 'No'],
  },
};

buttonRef.addEventListener('click', () => {
  const guestName = prompt('Please, enter your name:', '');
  const amount = +prompt('Please, enter the amount of guests.', '');
  const order = {};

  function addOrderToHTML() {
    hotelRef.insertAdjacentHTML(
      'beforebegin',
      `<h2>Hello, ${guestName}! Wellcome to ${hotel.hotelName}.</h2>`,
    );
    if (amount > hotel.capacity) {
      hotelRef.insertAdjacentHTML(
        'beforebegin',
        `<p>Sorry, we don't have ${amount} places. There are ${hotel.capacity} available places in ${hotel.hotelName}.</p>`,
      );
    } else {
      hotel.capacity -= amount;
      hotelRef.insertAdjacentHTML(
        'beforebegin',
        `<p>Amount of guests: ${amount}. There are ${hotel.capacity} available places in ${hotel.hotelName}.</p>`,
      );
      chooseOrderOptions();
    }
  }

  function chooseOrderOptions() {
    for (let option in hotel.orderConfig) {
      order[option] = prompt(
        `Please, choose the options ${option}: ${hotel.orderConfig[option]}.`,
        '',
      );
      orderOptionsRef.insertAdjacentHTML(
        'beforeend',
        `<li>${option}: ${order[option]}</li>`,
      );
    }
  }
  hotel.orderList.push(guestName, amount, hotel.capacity, order);
  addOrderToHTML();
});

console.log(hotel.orderList);
