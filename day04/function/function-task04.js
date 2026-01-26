// * 값은 모두 변수에 담을 것
// 브론즈
// 1. 3개의 정수를 받아서 3개를 모두 빼주는 함수

const thirdNumber = (num1, num = 0, num3 = 0) => {
  return num1 - num2 - num3
}
let num = thirdNumber(10, 20, 30)

console.log(num)

// const subtract = (num1, num2 = 0, num3 = 0) => {
//   return num1 - num2 - num3
// }

// let result1 = subtract(10, 20, 30)
// console.log(result1)

// 2. 어떤 값을 받으면 값을 출력해주는 함수

function Number(num4){
  return num4
}
let Num = Number(13)
console.log(Num)

// const print = ( data ) => { console.log(data) }

// 3. 이름과 나이를 전달하면 이름, 나이, 만나이를 출력해주는 함수

const nameAge = (data, data1) => {
  let age = data1 - 2
  return `${data}님의 나이는 ${data1}살이며 만나이는 ${age}살입니다.`
}
let result = nameAge("노민균", 30)
console.log(result)

// const printIntroduce = (name, age) => { 
//   let info = `${name}님의 나이: ${age}, 만 나이: ${age - 1}`
//   console.log(info) 
// }

// 실버
// 1. 홍길동을 n번 출력해주는 함수

function manyname(data2){
  for(let i = 0; i < 5; i++){
    console.log(data2)
  }
}
  manyname("홍길동")

// const printHongByCount = (count) => {
//   for(let i = 0; i < count; i++){
//     console.log("홍길동")
//   }
// }

// 2. 어떤 값을 전달하면 그 값까지 모두 더해주는 함수

const plus = (data3) => {
  let sum = 0;
  for(let i = 0; i <= data3; i++){
    sum += i
  }
  return sum
}
const result2 = plus(100)
console.log(result2)

// const sum = (n) => {
//   let total = 0
//   for(let i = 0; i < n; i++){
//     let num = n + 1
//     total += num
//   }
//   return total
// }

// let result2 = sum(150)

// 골드
// 1. 1~n까지 중 홀수만 출력해주는 함수

function printOddNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOddNumbers(20);

// const printOdd = (count) => {
//   for(let i = 0; i < count; i++){
//     let num = i + 1;
//     if(num % 2 === 0){
//       continue;
//     }
//     console.log(num)
//   }
// }


// 2. 1~n까지 중 짝수의 합을 더하고 
// 만약 n값이 100이 넘는다면 100까지만 더한 값을 반환해주는 함수
const sumEven = (count) => {
  count = count > 100 ? 100 : count
  let total = 0;
  for(let i = 0; i < count; i++){
    let num = i + 1
    if(!(num % 2)){
      total += num
    }
  }
  return total
}

let result3 = sumEven(100)
console.log(result3)

// 3. 문자열과 찾을 문자를 입력 받고
// 문자열에서 문자의 개수를 반환해주는 함수
// ex) apple, p
// p: 2개
const findCharCount = (content, char) => {
  let count = 0
  for(let i = 0; i < content.length; i++){
    content[i] === char && count++
  }
  return `${char}: ${count}개`
}

let result4 = findCharCount("apple", "p")
console.log(result4)


// 플레티넘
// 1. 값을 3개 입력받아서 제일 큰 값과 작은 값을 알려주는 함수 
const getMinAndMax = (...numbers) => {
  let min = numbers[0]
  let max = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length; j++){
      if(max < numbers[j]){
        max = numbers[j]
      }
      if(min > numbers[j]){
        min = numbers[j]
      }
    }
  }
}

getMinAndMax(10, 20, 30)

// 2. 문자열을 입력하고, 문자열에서 지울 문자를 입력받아 지워주는 함수
// ex) myFuc("apple", a) 
// 결과: pple
const removeChar = (content, char) => {
  let result = ""
  for(let i = 0; i < content.length; i++){
    if(content[i] !== char){
      result += content[i]
    }
  }
  return result
}

let result5 = removeChar("apple", "a")
console.log(result5)

// 다이아
// 1. 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)
const changeToInteger = (hangle) => {
  const hangles = "공일이삼사오육칠팔구"
  let result = ""
  for(let i = 0; i < hangle.length; i++){
    result += hangles.indexOf(hangle.charAt(i))
  }
  return result
}

let result6 = changeToInteger("일공이사")
console.log(result6)


// const changeToIntegerByWhile = (hangle) => {
//   const hangles = "공일이삼사오육칠팔구"
//   let result = ""
//   let count = 0
//   while(true){
//     if(count === hangle.length){
//       break
//     }
//     result += hangles.indexOf(hangle.charAt(count))
//     count++
//   }
//   return result;
// }

// let result8 = changeToIntegerByWhile("일공이오")
// console.log(result8)

// 2. 정수를 한글로 바꿔주는 함수 (1024 -> 일공이사)
const changeToHangle = (number) => {
  number = String(number)
  const hangles = "공일이삼사오육칠팔구"
  let result = ""
  for(let i = 0; i < number.length; i++){
    result += hangles.charAt(number.charAt(i))
  }
  return result
}

let result7 = changeToHangle(7788)
console.log(result7)