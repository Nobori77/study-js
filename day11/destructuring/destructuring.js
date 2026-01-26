// const arr1 = Array.of(1, 2, 3, 4)
// const arr2 = new Array(4).fill(0).map((_, i) => i + 1)

// console.log(arr1)
// console.log(arr2)

// ///onst [one, two, three, four] = arr1
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)

// 구조분해할당

const user = {
  name: "홍길동",
  age: 20,
  address: "서울시 강남",
  hobbies: {
    one: "코딩",
    two: "객체지향형 코딩",
    three: "함수지향형 코딩"
  }
}

const {name, age, address, hobbies} = user
const {one, two, three} = hobbies

// onsole.log(name)
// console.log(hobbies)
// console.log(three)

// 매개변수
// 유저의 정보를 받으면 유저의 이름을 출력해주는 함수

const printUserName = ({name}) => {
  // console.log(name)
}

// 유저의 정보를 받으면 유저의 나이를 출력해주는 함수

const printUserAge1 = ({age}) => { return console.log(age)}
const printUserAge2 = ({age}) => console.log(age)
// const printUserAge3 = {age} => console.log()  // 권장하지 않는 방법

// printUserAge2(user)

// fetch()
// https://jsonplaceholder.typicode.com/users

const getUsers = async () => {
  const respones = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await respones.json()
  users.forEach(({user, email, phone}) =>{
    console.log("name", name)
    console.log("email", email)
    console.log("phone", phone)
  })
}

getUsers()