// 성과 이름을 더한 결과 값을 출력해주는 함수
const print = (data) => {
  console.log(data)
}

function name(firstname, lastname, callback){
  callback(firstname + lastname)
}

name("노", "민균", print)

// 두 정수의 곱셈 결과를 출력

function add(num1, num2, callback){
  callback(num1 * num2)
}

add(10, 20, (addnumber) => {console.log(addnumber)})

// const add(num1, num2, callback) => { callback(num1 * num2) }
// add(10, 20, print)

// 두 정수를 받아서 큰 값을 결과를 출력해주는 콜백함수 로직

function bigsmall(num3, num4, callback){
  callback( num3 > num4 ? num3 : num4 )
}

bigsmall(5, 10, print)
