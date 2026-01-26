// 두 정수를 더하고 결과값에 10을 더한 값을 반환

// const add = (num1, num2, callback) => {
//   callback(num1 + num2)
// }

// const plus = (data, callback) => {
//   callback (data + 10)
// }

// add(10,20, (total) => {
//   plus(total, (plusTotal) => {console.log(plusTotal)
//   })
// })

// 두 정수를 더하고 결과값에 10을 더한 값을 반환
// ex) 10, 20 
// 30 + 10
// 40
const add = (num1, num2, callback) => {
  return callback(num1 + num2)
}

const add10 = (data) => {
  return data + 10
}

let result = add(10, 20, add10)
console.log(result)
