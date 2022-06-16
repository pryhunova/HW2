let elementId = 1;

class ShoppingList {
  constructor(title, author, maxListLength) {
    this.title = title;
    this.author = author;
    this.maxListLength = maxListLength;
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
    elementId++;
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

const newShoppingList = new ShoppingList('Покупки', 'Наташа Прыгунова', '4');

(() => {
  try {
    newShoppingList.addItem('', '3', 'шт');
  } catch (ex) {
    console.log(ex);
  }

  try {
    newShoppingList.addItem('Кефир', '3', 'л');
  } catch (ex) {
    console.log(ex);
  }

  try {
    newShoppingList.addItem('Банан', '', 'кг');
  } catch (ex) {
    console.log(ex);
  }

  try {
    newShoppingList.removeItem('7');
  } catch (ex) {
    console.log(ex);
  }

  try {
    newShoppingList.addItem('Мясо', '', 'кг');
  } catch (ex) {
    console.log(ex);
  } finally {
    console.log(newShoppingList.list);
  }
})();
