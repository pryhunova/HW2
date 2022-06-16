let elementId = 1;

class ShoppingList {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.maxListLength = 4;
    this.list = [];
  }

  addItem(title, count, unit) {
    if (this.list.length >= this.maxListLength) {
      throw new Error(`Превысили допустимое количество.`);
    }

    if (title === undefined || title === '') {
      throw new Error(`Заполните название продукта.`);
    }

    if (count === undefined || count === '') {
      throw new Error(`Заполните количество в продукте ${title}`);
    }

    if (unit === undefined || unit === '') {
      throw new Error(`Укажите единицу измерения в продукте ${title}`);
    }

    this.list.push(new ShoppingListItem(title, count, unit));
    this.id++;
  }

  removeItem(id) {
    if (!this.list.find(elem => elem.id === +id)) {
      throw new Error(`Нет элемента с id №${id}...`);
    }

    this.list = this.list.filter(elem => elem.id !== +id);
  }
}

class ShoppingListItem {
  constructor(title, count, unit) {
    this.id = elementId;
    this.title = title;
    this.count = count;
    this.unit = unit;
  }
}

function makeNewShoppingList() {
  const newShoppingList = new ShoppingList(
    'Список покупок',
    'Наташа Прыгунова',
  );
  newShoppingList.addItem('Кефир', '1', 'л');
  newShoppingList.addItem('Икра консерва', '1', 'шт');
  newShoppingList.addItem('Банан', '1', 'кг');
  newShoppingList.addItem('Мясо', '0,5', 'кг');
  // newShoppingList.addItem('Молоко', '2', 'л');

  console.log(newShoppingList.list);
}
makeNewShoppingList();
