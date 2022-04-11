const buttonRef = document.querySelector('#btn');
const hotelRef = document.querySelector('#hotel');

const orderList = [];
const orderConfig = {
  accommodation: ['Room', 'Apartments', 'Cottage'],
  transfer: ['Yes', 'No'],
  breakfast: ['Yes', 'No'],
};

const Hotel = {
  constructor(hotelName, capacity) {
    this.hotelName = hotelName;
    this.capacity = capacity;

    buttonRef.addEventListener('click', () => {
      greet = function (guestName) {
        guestName = prompt('Please, enter your name:', '');
        hotelRef.insertAdjacentHTML(
          'beforeend',
          `<p>Hello, ${guestName}! Wellcome to ${hotelName}.</p>`,
        );
        orderList.push(guestName);
        return;
      };
      greet();

      createAnOrder = function () {
        const order = {};
        for (let option in orderConfig) {
          order[option] = prompt(
            `Please, choose the options ${option}: ${orderConfig[option]}.`,
            '',
          );
          hotelRef.insertAdjacentHTML(
            'beforeend',
            `<p>${option}: ${order[option]}<p>`,
          );
        }
        return orderList.push(order);
      };

      addGuests = function (amount) {
        amount = +prompt('Please, enter the amount of guests.', '');
        if (amount > capacity) {
          hotelRef.insertAdjacentHTML(
            'beforeend',
            `<p>Sorry, we don't have ${amount} places. There are ${capacity} available places in ${hotelName}.</p>`,
          );
          orderConfig.push(amount, capacity);
        } else {
          capacity -= amount;
          hotelRef.insertAdjacentHTML(
            'beforeend',
            `<p>Amount of guests: ${amount}. There are ${capacity} available places in ${hotelName}.</p>`,
          );
          createAnOrder();
          return orderList.push(amount, capacity);
        }
      };
      addGuests();
    });
    console.log(orderList);
  },
};

const hotel = Object.create(Hotel).constructor('Odesa Hotel', 50);
