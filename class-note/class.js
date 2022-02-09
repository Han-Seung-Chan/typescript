function People(name, age) {
  this.name = name;
  this.age = age;
}
const you = new People('재석', 50);
console.log(you);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const cho = new Person('세호', 30);
console.log(cho);
