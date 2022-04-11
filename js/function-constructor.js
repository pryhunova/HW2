function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi! I'm ${this.firstName}`);
};

Person.prototype.sayGoodbye = function () {
  console.log("See you soon!");
};

Person.prototype.toString = function () {
  return "Yo! You actually trying convert me to the string! Please don't do that!!"
}

const person = new Person("Nick", "Jonson", 58);
const person1 = new Person("Paul", "Smith", 36);
const person2 = new Person("Robert", "McAllan", 12);

person.sayHi();
person.sayGoodbye();
console.log(person.firstName);

// -

const WebDeveloper = function (firstName, lastName, age, skills = []) {
  Person.apply(this, arguments);
  this.skills = skills;
};

WebDeveloper.prototype = Object.create(Person.prototype);
WebDeveloper.prototype.constructor = WebDeveloper;

WebDeveloper.prototype.develop = function () {
  console.log(`${this.firstName} currently is working...`);
}

const developer = new WebDeveloper("Nick", "Jonson", 58, ["html", "css", "js"]);

developer.sayHi();
developer.develop();
console.log(developer.firstName);
console.log(developer.skills);
