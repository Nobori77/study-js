function Animal2(name, age, species, feed){
  this.name = name;
  this.age = age;
  this.species = species;
  this. feed = feed;
}

Animal2()

class Animal { 

  static age = 10

  constructor(name, age, species, feed){
    this.name = name || "";
    this.age = age || 0;
    this.species = species || "";
    this.feed = feed || "";
  }
}


const rabbit = new Animal("부니", 1, "포유류", "누네띠네")
const cat = new Animal("냥아치", 2, "고양이", "츄르")
const dog = new Animal("댕댕이", 3, "강아지", "개껌")
console.log(rabbit.age)
console.log(cat.age)
console.log(dog.age)
console.log(Animal.age)