const BASE_API = 'http://localhost:8080/todos';

const todoContainerRef = document.querySelector('.todo-container');
const todoInputRef = document.querySelector('.todo-input');
const todoListRef = document.querySelector('.todo-list');

let todos = [];

const removeTodo = id => {
  fetch(`${BASE_API}/${id}`, {
    method: 'DELETE',
  })
    .then(() => getTodos())
    .catch(() => console.log("Can't be deleted! The task was not found."));
};

const renderTodos = () => {
  todoListRef.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    const todoValue = document.createElement('label');
    const deleteBtn = document.createElement('button');

    todoCheckbox.type = 'checkbox';
    todoItem.classList.add('todo-item');
    todoCheckbox.classList.add('todo-checkbox');
    todoValue.classList.add('todo-task');
    deleteBtn.classList.add('todo-delete', 'material-icons');
    deleteBtn.textContent = 'delete';
    todoValue.innerText = todo.title;

    todoCheckbox.addEventListener('click', () => {
      if (todoCheckbox.checked === true) {
        todoItem.style.textDecoration = 'line-through';
      } else {
        todoItem.style.textDecoration = 'none';
      }
    });
    deleteBtn.addEventListener('click', () => removeTodo(todo.id));

    todoItem.append(todoCheckbox, todoValue, deleteBtn);
    todoListRef.append(todoItem);
  });
};

const getTodos = async () => {
  try {
    const response = await fetch(BASE_API);
    const data = await response.json();

    todos = data;
    renderTodos();
  } catch (e) {
    console.log('Failed to load todo list!');
  }
};

getTodos();

todoContainerRef.addEventListener('submit', e => {
  e.preventDefault();

  const title = e.target.querySelector('#title').value;
  if (title === '') return;

  fetch(BASE_API, {
    method: 'POST',
    body: JSON.stringify({ title }),
  })
    .then(() => getTodos())
    .catch(() => alert('Failed to add task!'));

  e.target.reset();
});
