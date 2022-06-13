/* Getting a resource */
const xhrGET = new XMLHttpRequest();
xhrGET.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
xhrGET.send();

xhrGET.onload = () => {
  if (xhrGET.status != 200) {
    console.log(`Error: + ${xhrGET.status}`);
  } else {
    console.log(`It's done, we got: ${xhrGET.response}`);
  }
};

/* Creating a resource */
const xhrPOST = new XMLHttpRequest();

const personConfig = JSON.stringify({
  name: 'Natalie',
  surname: 'Pryhunova',
});

xhrPOST.open('POST', 'https://jsonplaceholder.typicode.com/posts/');
xhrPOST.setRequestHeader('Content-type', 'application/json; charset=utf-8');

xhrPOST.send(personConfig);

xhrPOST.onload = () => {
  if (xhrPOST.status != 201) {
    console.log(`Error: + ${xhrPOST.status}`);
  } else {
    console.log(xhrPOST.response);
  }
};
