class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Programmer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}
class Student extends Person {
  constructor(name, age, scores) {
    super(name, age);
    this.scores = scores;
  }
}

let person = new Person("Andi", 20);
let programmer = new Programmer("Anto", 20, ["Js"]);
let student = new Student("kurniawan", 15, [90]);
