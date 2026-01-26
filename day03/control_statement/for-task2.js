// 1번 문제: 1~100까지 짝수만 출력해보기
// for(let i = 0; i < 100; i++){
//   let num = i + 1
//   let isInteger = !(num % 2)
//   let result = isInteger ? "짝수" : "홀수"

//   if(result === "짝수"){
//     console.log(`${num}는 ${result}`)
//   }
// }

// 2번 문제: 0~9까지 반복 후 "12345678910" 출력하기
// 초기값의 중요성
// 초기값이 0이라면 연산
// result = result + i + 1
// 초기값이 ""이라면 연결
// result = result + i + 1

// let result = ""
// for(let i = 0; i < 10; i++){
//   result += i + 1
// }
// console.log(result)

// 3번 문제: 1~10까지 반복후 i값이 홀수면 "홀수", 짝수만 "짝수" 출력하기
// for(let i = 0; i < 10; i++){
//   let result = (i + 1) % 2 === 0 ? "짝수" : "홀수"
//   console.log(result)
// }

// 4번 문제: 1~20까지 중 3의 배수 출력하기
// for(let i = 0; i < 20; i++){
//   let num = i + 1
//   if(num % 3 === 0){
//     console.log(num)
//   }
// }

// 5번 문제: 1~100까지 누적합 구하기
// let result = 0
// for(let i = 0; i < 100; i++){
//   let num = i + 1
//   result += num
// }
// console.log(result)

// 6번 문제: 1~100까지 홀수만 모두 더해서 출력
// let total = 0;
// for(let i = 0; i < 100; i++){
//   let num = i + 1
//   let isOdd = num % 2 === 1
//   if(isOdd){
//     total += num
//   }
// }
// console.log(total)

// 7번 문제: 1~77까지 수 중 홀수의 개수
// let count = 0;
// for(let i = 0; i < 77; i++){
//   let num = i + 1;
//   let isOdd = num % 2 === 1
//   isOdd && count++
// }

// console.log(count)



