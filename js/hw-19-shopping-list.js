let itemId = 1;

class ShoppingList {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.amount = 4;
    this.list = [];
  }

  addItem(title, count, unit) {
    if (this.list.length >= this.amount) {
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
  constructor(title, amount, unit) {
    this.id = itemId;
    this.title = title;
    this.amount = amount;
    this.unit = unit;
  }
}

const newShoppingList = new ShoppingList('Список покупок', 'Наташа Прыгунова');

function makeNewShoppingList() {
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
    shoppingListMarckup();
  }
}

function shoppingListMarckup() {
  const wrapperEL = document.querySelector('.wrapper');

  for (const iterator of newShoppingList.list) {
    const createItemEl = document.createElement('p');
    wrapperEL.appendChild(createItemEl);
    createItemEl.innerText = `${iterator.title}, количество = ${iterator.amount}, ${iterator.unit}`;
  }
}

makeNewShoppingList();
