//학생 추상화
//학생 객체화

class Student {
  constructor(name, age, area, character){
    this.name = name;
    this.age = age;
    this.area = area;
    this.character = character;
  }
}

const user1 = new Student("김철수", 15, "이태원", "착함")
const user2 = new Student("김영희", 15, "한남동", "나쁨")
const user3 = new Student("홍길동", 17, "용문동", "착함")
const user4 = new Student("김아무개", 19, "동대문", "착함")

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)