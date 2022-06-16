class ShoppingList {
  constructor(shopingListName, shopingListAuthor) {
    this.shopingListName = shopingListName;
    this.shopingListAuthor = shopingListAuthor;
    this.maxNumberOfItems = 10;
    this.productList = [];
  }

  addItem(title, count, unit) {
    if (this.list.length >= this.maxListLength) {
      throw new Error(`Список уже полон, ${title} уже не унести...`);
    }

    if (title === undefined || title === '') {
      throw new Error(`Вы не заполнили поле title...`);
    }

    if (count === undefined || count === '') {
      throw new Error(`Вы не заполнили поле count у ${title}...`);
    }

    if (unit === undefined || unit === '') {
      throw new Error(`Вы не заполнили поле unit у ${title}...`);
    }

    this.list.push(new ShoppingListElement(title, count, unit));
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
  constructor(id, title, count, unit) {
    this.id = id;
    this.title = title;
    this.count = count;
    this.unit = unit;
  }
}
