'use strict';
const buttonRef = document.querySelector('#btn');
const hotelRef = document.querySelector('#hotel');

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

  for (let option in hotel.orderConfig) {
    order[option] = prompt(
      `Please, choose the options ${option}: ${hotel.orderConfig[option]}.`,
    );
  }

  if (amount > hotel.capacity) {
  } else {
    hotel.capacity -= amount;
  }

  const objectValue = {
    guestName,
    amount,
    order,
  };

  hotel.orderList.push(objectValue);
  renderNewOrderList(objectValue);
});

const renderNewOrderList = newOrder => {
  const divWrapper = document.createElement('div');
  divWrapper.className = 'order-wrapper';

  const createGuestName = document.createElement('p');
  createGuestName.innerText = `Guest name: ${newOrder.guestName}`;

  const createAmountOfGuests = document.createElement('p');
  createAmountOfGuests.innerText = `Amount of guests: ${newOrder.amount}`;

  const createNewOrderList = document.createElement('ul');

  for (const key in newOrder.order) {
    const ordetItem = document.createElement('li');
    ordetItem.innerText = `${key}: ${newOrder.order[key]}`;

    createNewOrderList.append(ordetItem);
  }

  divWrapper.append(createGuestName, createAmountOfGuests, createNewOrderList);
  hotelRef.append(divWrapper);
};
