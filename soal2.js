class Student {
  constructor(name, subjects, score) {
    this.name = name;
    this.subjects = subjects;
    this.score = score;
  }

  sebutkanName() {
    console.log(this.name);
  }
  sebutkanSubjects() {
    console.log(this.subjects);
  }
}

let andi = new Student("Andi", ["Math", "English"], 90);

andi.sebutkanName();
andi.sebutkanSubjects();
