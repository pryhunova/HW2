let itemId = 1;

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
    itemId++;
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
    this.id = itemId;
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

  try {
    newShoppingList.addItem('Кефир', '1', 'л');
    newShoppingList.addItem('Икра консерва', '1', 'шт');
    newShoppingList.addItem('Банан', '1', 'кг');
    newShoppingList.addItem('Мясо', '0,5', 'кг');
  } catch (error) {
    console.log(error);
  }

  try {
    newShoppingList.removeItem('4');
  } catch (error) {
    console.log(error);
  }
  try {
    newShoppingList.addItem('', '1', 'кг');
  } catch (error) {
    console.log(error);
  } finally {
    console.log(newShoppingList.list);
  }
}
makeNewShoppingList();
