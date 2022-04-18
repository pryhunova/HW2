class TodoList {
  items = [];

  add(id, title, description, done) {
    const newTodoItem = new TodoItem(id, title, description, done);
    this.items.push(newTodoItem);
  }

  completeAll() {
    this.items.forEach(item => (item.done = true));
  }
}

class TodoItem {
  constructor(id, title, description, done) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.done = done;
  }
}

const newTodoList = new TodoList();

newTodoList.add(1, 'HTML', 'Website structure', true);
newTodoList.add(2, 'CSS', 'Website styles', true);
newTodoList.add(3, 'JS', 'Website interactivity', true);
newTodoList.completeAll();

console.log(newTodoList);
