function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let catsArr = [];

  for (let line of input) {
    let [name, age] = line.split(" ");
    let cat = new Cat(name, age);
    catsArr.push(cat);
  }

  for (let cat of catsArr) {
    cat.meow();
  }
}
