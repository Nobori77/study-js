// 화살표 함수 연습
// 모든 함수를 화살표 함수로 정의
// *단 반드시 상수(const) 키워드를 사용해야 한다

// 1. 0과 1 중 무작위로 5개 값을 입력하면 0의 개수와 1의 개수를 반환해주는 함수
// ex) countZero(0, 0, 1, 1, 1)
// ex) 0의 개수 2개, 1개의 3개
const countZeroAndOne = (num1, num2, num3, num4, num5) => {
  let zero = 5
  let one = num1 + num2 + num3 + num4 + num5
  zero -= one
  return `0의 개수 ${zero}개, 1개의 ${one}개`
}

let result1 = countZeroAndOne(0, 0, 1, 1, 1)
console.log(result1)


const countZeroAndOne1 = (num1, num2, num3, num4, num5) => {
  let zero = 5
  let one = 0

  num1 && one++
  num2 && one++
  num3 && one++
  num4 && one++
  num5 && one++

  zero -= one
  return `0의 개수 ${zero}개, 1개의 ${one}개`
}

let result2 = countZeroAndOne1(0, 0, 1, 1, 1)
console.log(result2)

const countZeroAndOne3 = (num1, num2, num3, num4, num5) => {
  let zero = 0
  let one = 0

  if(num1){
    one += 1
  }else{
    zero += 1
  }

  if(num2){
    one += 1
  }else{
    zero += 1
  }

  if(num3){
    one += 1
  }else{
    zero += 1
  }

  if(num4){
    one += 1
  }else{
    zero += 1
  }

  if(num5){
    one += 1
  }else{
    zero += 1
  }

  return `0의 개수 ${zero}개, 1개의 ${one}개`
}

let result3 = countZeroAndOne3(0, 0, 1, 1, 1)
console.log(result3)

// 2. 정수(n)를 넘기면 정수까지 모두 더해주는 함수
// ex) sum(10)
// ex) 55
const sum = (count = 0) => {
  let result = 0
  for(let i = 0; i < count; i++){
    let num = i + 1
    result += num
  }
  return result
}

let result4 = sum(15)
console.log(result4)

sum(15)
sum(10)