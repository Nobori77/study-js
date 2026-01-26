// 단항 연산자

let num = 10
// console.log(++num)
// console.log(num++)
// console.log(num)

let isBoolean = false;
// console.log(!isBoolean)
// 값이 있을때 true, 없을 때 false
// ! 연산자의 결과값은 반드시 boolean 타입이다.
// console.log(!10)
// confirm.log(!0)
// confirm.log(!num)

let num1 = 100
let num2 = 17

console.log(num1 + num2)//117
console.log(num1 - !num2)//100
console.log(num1 * num2)//1700

// **나머지 연산자 (%)
// console.log(10 % 3)

// 몫 연산자 (/) = 나누기
// console.log(10 / 3)

// 할당 연산자
// 누적복합연산자
let money = 0
money += 100000
// money = money = 100000
money /= 300
money *= 10
console.log(money)


// 관계 연산자
console.log(10 == "10")
console.log(10 === "10")

let num3 = 11
let num4 = 10
console.log(11 != 12)
console.log(num3 != 11)

console.log(num3 <= num4)
console.log(num4 < num3)

// 논리 연산자
// || (or)
// && (and)

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

let isTrue = 10 != 11;

console.log(isTrue && 10 == 10) // true
console.log(isTrue && 10 != 10) //false
console.log(!isTrue || 10 != !10)  //true
console.log(!isTrue || isTrue)  //false

// 논리 연산자의 특징
// 초기값
console.log(10 != 10 || "홍길동")
console.log("장보고" || "홍길동")

let data =  0
10 != 10 && ++data
console.log(data)

console.log(10 || 11)
console.log(10 && 11)

// 삼항 연산자(?:)
// 조건식이 1개일 때
let result = true ? "true일 때" : "false일 때"
console.log(result)


