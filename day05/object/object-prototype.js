// 프로토타입
// 일반 함수 o
// 화살표 함수 x

function Employee(name, age, position){
  this.name = name
  this.age = age
  this.position = position
}

const user1 = new Employee("홍길동", 20, "사원")
const user2 = new Employee("이순신", 30, "대리")
const user3 = new Employee("장보고", 40, "사원")

console.log(user1)
console.log(user2)
console.log(user3)