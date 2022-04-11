class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHi() {
    console.log("HI!");
  }
}

const person = new Person("Nick", "Jonson", 58);
const person1 = new Person("Paul", "Smith", 36);
const person2 = new Person("Robert", "McAllan");

person.sayHi();
console.log(person.firstName);
console.log(typeof Person); // function

// --

class WebDeveloper extends Person {
  constructor(firstName, lastName, age, skills = []) {
    super(firstName, lastName, age);
    this.skills = skills;
  }

  develop() {
    console.log(`${this.firstName} currently is working ...`);
  }
}

const developer = new WebDeveloper("Nick", "Jonson", 58, ["html", "css", "js"]);
developer.sayHi();
developer.develop();
console.log(developer.firstName);
console.log(developer.skills);