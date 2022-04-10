const hotelRef = document.querySelector('#hotel');

const hotelConfig = {
  accommodation: ['Room', ' Apartments', ' Cottage'],
  transfer: ['Yes', ' No'],
  breakfast: ['Yes', ' No'],
};

const Hotel = {
  constructor(hotelName, capacity) {
    this.hotelName = hotelName;
    this.capacity = capacity;

    greet = function (guestName) {
      guestName = prompt('Please, enter your name:', '');
      hotelRef.insertAdjacentHTML(
        'afterbegin',
        `<p>Hello ${guestName}, wellcome to ${hotelName}.</p>`,
      );
    };
    greet();

    addGuests = function (amount) {
      amount = +prompt('Please, enter the amount of guests.', '');

      if (amount > capacity) {
        hotelRef.insertAdjacentHTML(
          'afterbegin',
          `<p>Sorry, we don't have ${amount} places. There are ${capacity} available places in ${hotelName}.</p>`,
        );
        return;
      } else {
        capacity -= amount;
        hotelRef.insertAdjacentHTML(
          'afterbegin',
          `<p>Amount of guests: ${amount}. There are ${capacity} available places in ${hotelName}.</p>`,
        );
      }
    };
    addGuests();

    createAnOrder = function () {
      const order = {};
      for (let option in hotelConfig) {
        order[option] = prompt(
          `Please, choose the options ${option}: ${hotelConfig[option]}.`,
          '',
        );
        hotelRef.insertAdjacentHTML(
          'afterbegin',
          `<p>${option}: ${order[option]}.<p>`,
        );
      }
      return order;
    };
    createAnOrder();
  },
};

const hotel = Object.create(Hotel).constructor('Odesa Hotel', 50);
// const hote2 = Object.create(Hotel).constructor('Uman Hotel', 25);
