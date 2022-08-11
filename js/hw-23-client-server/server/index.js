import { createServer } from 'http';
import { StringDecoder } from 'string_decoder';
import { v4 as uuidv4 } from 'uuid';
import { getTodos, addTodo, deleteTodo } from './todo.service.js';

const handler = (url, buffer, response, method) => {
  if (url.pathname.includes('/todos')) {
    if (url.pathname === '/todos' && method === 'get') {
      response.statusCode = 200;
      response.end(JSON.stringify(getTodos()));
      return;
    }

    if (url.pathname === '/todos' && method === 'post') {
      const data = JSON.parse(buffer);

      const newTodo = {
        id: uuidv4(),
        title: data.title,
      };

      addTodo(newTodo);

      response.statusCode = 201;
      response.end(JSON.stringify(newTodo));
      return;
    }

    if (url.pathname.includes('/todos/') && method === 'delete') {
      const id = url.pathname.slice(7);
      const result = deleteTodo(id);

      response.statusCode = result.status ? 200 : 400;
      response.end(JSON.stringify(result));
      return;
    }
  }

  response.statusCode = 404;
  response.end('Page not found!');
};

const httpServer = createServer((request, response) => {
  const url = new URL(`http://${request.headers.host}${request.url}`);
  const decoder = new StringDecoder('utf8');
  const method = request.method.toLocaleLowerCase();
  let buffer = '';

  response.setHeader('Access-Control-Allow-Origin', '*');

  request.on('data', data => {
    buffer += decoder.write(data);
  });

  request.on('end', () => {
    buffer += decoder.end();
    handler(url, buffer, response, method);
  });
});

httpServer.listen(8080, () => console.log('Server is started on port 8080!'));
