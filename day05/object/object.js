// 객체의 선언

 const user1 = new Object();
 const user2 = {}

 console.log(user1)
 console.log(user2)

 const user3 = {
  name: "유진",
  age: 27,
  color:"노랑"
 }  
console.log(user3)
console.log(["1", "2", "3", "4", "5", "6"][4])

//1. 대괄호 접근법
// 객체 ["key이름"]
// 변수 사용이 가능

let age = "age"
console.log(user3[age])

// 2. 닷 접근법
console.log(user3.age)

// user3의 이름을 본인의 이름으로 변경
// 객체의 가장 큰 특징
// key가 있으면 수정
// key가 없으면 추가

user3.name = "민균"
console.log(user3)