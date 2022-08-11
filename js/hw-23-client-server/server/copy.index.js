import { createServer } from 'http';
import { getTodos, addTodo, deleteTodo } from './todo.service.js';

let todoId = 0;

const server = createServer((req, res) => {
  const url = new URL(`http://${req.headers.host}${req.url}`);
  const method = req.method.toLowerCase();

  if (url.pathname.includes('/todos')) {
    if (url.pathname === '/todos' && method === 'get') {
      res.statusCode = 200;

      res.end(JSON.stringify(getTodos()));
      return;
    }

    if (url.pathname === '/todos' && method === 'post') {
      const newTodo = {
        id: ++todoId,
        description: 'todo item',
      };
      addTodo(newTodo);

      res.statusCode = 201;
      res.end(JSON.stringify(newTodo));
      return;
    }

    if (method === 'delete') {
      const id = +url.pathname.slice(7);

      const result = deleteTodo(id);
      console.log(result);

      res.statusCode = result.status ? 200 : 400;
      res.end(JSON.stringify(result));
      return;
    }
  }

  res.statusCode = 404;
  res.end('Page not found :(');
});

server.listen(8080, () => {
  console.log('Server is started on port 8080');
});
