'use strict';

const hotelSelector = document.querySelector('.hotel');

const Hotel = function (hotelName, capacity) {
  this.hotelName = hotelName;
  this.capacity = capacity;
  this.guestCount = 0;

  this.greet = function () {
    let guestName = prompt('Please enter your name');
    console.log(`Hello ${guestName}, wellcome to ${this.hotelName}`);
  };

  this.addGuests = function () {
    let amount = +prompt('Please enter the number of guests');
    this.guestCount += amount;
    this.capacity -= amount;
    console.log(
      `Amount of guests: ${this.guestCount}. There are ${this.capacity} available places in ${this.hotelName}`,
    );
  };
};

const hotel = new Hotel('Odesa Hotel', 30);
//console.log(hotel.addGuests());
