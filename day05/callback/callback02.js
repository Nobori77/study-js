// 성과 이름을 받아서 풀네임을 만들고 풀네임에 님을 붙여서 출력
const pirnT = (data) => {
  console.log(data)
}

const fullname = (firstname, lastname, callback) => {
  callback(firstname + lastname + "님")
}

fullname('노', '민균', pirnT)

// const add = (data1, data2, callback) => {
//   callback(data1 + data2)
// }

// const addNim = (data, callback) => {
//   callback(data + "님")
// }

// const print = (data) => {
//   console.log(data)
// }

// add("홍", "길동", (fullName) => {
//   addNim(fullName, (data) => {
//     console.log(data)
//   })
// })