if (todoInputRef.value !== '') {
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

  todoValue.innerText = todoInputRef.value;

  todoItem.append(todoCheckbox, todoValue, deleteBtn);
  todoListRef.append(todoItem);

  todoCheckbox.addEventListener('click', () => {
    if (todoCheckbox.checked === true) {
      todoItem.style.textDecoration = 'line-through';
    } else {
      todoItem.style.textDecoration = 'none';
    }
  });

  console.log(todos);
  //deleteBtn.addEventListener('click', () => {});
}
