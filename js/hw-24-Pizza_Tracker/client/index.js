const BASE_API = 'http://localhost:8080/sse';
const orderBtnRef = document.getElementById('order-btn');
const inputRef = document.getElementById('order-input');
const targetBlock = document.querySelectorAll('.statusBar');
const output = document.querySelector('section');

orderBtnRef.addEventListener('click', () => {
  postRequest();

  const eventSource = new EventSource(BASE_API);

  eventSource.addEventListener('order-not-found', () => {
    alert("Sorry, we didn't find your order!");
    console.log('CLOSING CONNECTION ON THE CLIENT');
    eventSource.close();
  });

  eventSource.addEventListener('pizza-order-status-update', message => {
    output.innerText = `Oh, your pizza now rich status: ${message.data}`;
  });

  eventSource.addEventListener('delivered', () => {
    output.innerText = 'Bon Appetit';
    eventSource.close();
  });
});

async function postRequest() {
  const response = await fetch('http://localhost:8080/orderPizza', {
    method: 'POST',
    body: JSON.stringify(inputRef.value),
  });

  inputRef.value = '';
  const data = await response.json();
  console.log(data);
}
