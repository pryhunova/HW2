import { createReadStream } from 'fs';
import { createServer } from 'http';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { StringDecoder } from 'string_decoder';
import { v4 as uuidv4 } from 'uuid';

const __dirname = dirname(fileURLToPath(import.meta.url));

let orders = [];
let newOrder;
let orderIdCounter = uuidv4();
let orderStatusCounter = 0;
const eventsOfOrder = [
  'New order',
  'Order accepted for work',
  'Packing your order',
  'Order delivered',
];

const pizzaTrackerSSEHandler = (req, res, orderId) => {
  //event stream
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const findOrder = orders.find(item => item.id === orderId);

  if (!findOrder) {
    // event type 'message'
    res.write('event: order-not-found\n'); // \n - перенос строки
    res.write('data: null\n'); // нет данных
    res.write(`id: ${orderId}`);
    res.write(`\n`); // в конце обязательный перенос строки
    res.end();
    return;
  }

  // send status
  const intervalId = setInterval(() => {
    if (findOrder.status !== eventsOfOrder[3]) {
      res.write('event: pizza-order-status-update\n');
      res.write(`id: ${orderId}\n`);
      res.write(`data: ${findOrder.status}\n`);
      res.write(`\n`);
    } else if (findOrder.status === 'Order delivered') {
      res.write('event: delivered\n');
      res.write(`id: ${orderId}\n`);
      res.write('data: null\n');
      res.write(`\n`);
      res.end();
      clearInterval(intervalId);
      orders = orders.filter(order => order.id !== orderId);
    }
  }, 500);
};

const orderCreate = (url, method, buffer, req, res) => {
  if (url.pathname === '/orderPizza' && method === 'post') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 201;
    newOrder = {
      id: orderIdCounter,
      description: buffer,
      status: eventsOfOrder[0],
    };

    const changeOrderStatusInterval = setInterval(() => {
      if (orderStatusCounter > eventsOfOrder.length - 1) {
        clearInterval(changeOrderStatusInterval);
        orderStatusCounter = 0;
        return;
      }

      newOrder.status = eventsOfOrder[orderStatusCounter++];
    }, 1500);

    orders.push(newOrder);

    res.end(JSON.stringify(newOrder));
  }
};

const httpServer = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const method = req.method.toLowerCase();
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  req.on('data', function (data) {
    buffer += decoder.write(data);
  });

  req.on('end', function () {
    buffer += decoder.end();
    orderCreate(url, method, buffer, req, res);
  });

  if (url.pathname === '/sse') {
    pizzaTrackerSSEHandler(req, res, orderIdCounter);
    return;
  }

  //render event stream
  const fileStream = createReadStream(join(__dirname, '../client/index.html'));
  fileStream.pipe(res);
});

httpServer.listen(8080, () => console.log('Server is started on port 8080'));
