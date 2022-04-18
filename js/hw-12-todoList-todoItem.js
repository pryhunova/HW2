class TodoList {
  items = [];

  completeAll() {
    this.items.forEach(item => (item.done = true));
  }

  add(params) {
    const newTodoItem = new TodoItem(params);
    this.items.push(newTodoItem);
  }
}

class TodoItem {
  constructor(params) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.done = params.done;
  }
}

const newList = new TodoList();

newList.add({ id: 15, title: 'Title', description: 'Description', done: true });
newList.completeAll();
console.log(newList);
