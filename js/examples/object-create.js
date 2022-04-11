const Person = {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    return this;
  },

  sayHi() {
    console.log(`Hi! I'm ${this.firstName}`);
  }
};

const person = Object.create(Person).constructor("Nick", "Jonson", 58);
const person1 = Object.create(Person).constructor("Paul", "Smith", 36);
const person2 = Object.create(Person).constructor("Robert", "McAllan", 12);

person.sayHi();
console.log(person.firstName);

// --

const WebDeveloper = Object.create(Person);

WebDeveloper.constructor = function (firstName, lastName, age, skills = []) {
  Person.constructor.apply(this, arguments);
  this.skills = skills;
  return this;
};

WebDeveloper.develop = function () {
  console.log(`${this.firstName} is working!`);
}

const developer = Object.create(WebDeveloper).constructor("Nick", "Jonson", 58, ["html", "css", "js"]);

developer.sayHi();
developer.develop();
console.log(developer.firstName);
console.log(developer.skills);
