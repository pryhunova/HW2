const containerRef = document.querySelector('.container');

const todoContainerEl = document.createElement('div');
const todoTitleEl = document.createElement('h1');
const todoInputEl = document.createElement('input');
const todoBtnEl = document.createElement('button');
const todoListEl = document.createElement('ul');

todoTitleEl.textContent = 'Список завдань';
todoInputEl.placeholder = 'Нове завдання';
todoBtnEl.textContent = 'Додати';

todoContainerEl.classList.add('todo-container');
todoTitleEl.classList.add('todo-title');
todoInputEl.classList.add('todo-input');
todoBtnEl.classList.add('todo-button');
todoListEl.classList.add('todos');

containerRef.append(todoContainerEl);
todoContainerEl.append(todoTitleEl, todoInputEl, todoBtnEl, todoListEl);

class TodoList {
  items = [];

  add({ title, done }) {
    const newTodoItem = new TodoItem({ title, done });
    this.items.push(newTodoItem);
  }
  completeAll() {
    this.items.forEach(item => (item.done = true));
  }
}

class TodoItem {
  constructor({ title, done }) {
    this.title = title;
    this.done = done;
  }
}

const newTodoList = new TodoList();

todoBtnEl.addEventListener('click', () => {
  if (todoInputEl.value !== '') {
    const todoItem = document.createElement('li');
    const todoCheckbox = document.createElement('input');
    const inpChecked = document.createElement('label');

    todoCheckbox.type = 'checkbox';
    todoItem.classList.add('todo-item');
    todoCheckbox.classList.add('todo-checkbox');

    todoItem.innerText = todoInputEl.value;
    newTodoList.add({ title: todoInputEl.value, done: false });

    console.log(newTodoList);

    todoListEl.append(todoItem);
    todoItem.append(todoCheckbox, inpChecked);

    todoCheckbox.addEventListener('click', () => {
      if (todoCheckbox.checked == true) {
        todoItem.style.textDecoration = 'line-through';
      } else {
        todoItem.style.textDecoration = 'none';
      }
    });
  }
  todoInputEl.value = '';
});
