// 심화 문제
// 1번 문제: 0~10까지 5만 빼고 출력
// for(let i = 0; i < 10; i++){
//   let num = i + 1;
//   if(num === 5) { continue; }
//   console.log(num)
// }

// 2번 문제: "012340123401234"
// % 5
// let result = ""
// for(let i = 0; i < 15; i++){
//   result += i % 5
// }
// console.log(result)

// 이중 for문
// for(let i = 0; i < 3; i++){
//   for(let i = 0; i < 5; i++){
//     result += i
//   }
// }
// console.log(result)

// 3번 문제: 1~10까지 제곱값 구하기
// for(let i = 0; i < 10; i++){
//   let num = i + 1;
//   // console.log(num * num)
//   // 파워 연산자(거듭제곱)
//   console.log(num ** 2)
// }

// 4번 문제: 1~100까지 7의 배수의 개수 세기
// let count = 0;
// for(let i = 0; i < 100; i++){
//   let num = i + 1;
//   if(num % 7 !== 0){
//     continue;
//   }
//   count += 1
// }
// console.log(count)

// 5번 문제: 1~5까지 반복후 아래 결과 만들기 
// false, true, false, true, false
// for(let i = 0; i < 5; i++){
//   let num = i
//   console.log(!!(num % 2))
// }

// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
// let result = ""
// for(let i = 0; i < 5; i++){
//   // if(i === 4){
//   //   result += "1"
//   // }else {
//   //   result += "0"
//   // }

//   let num = i + 1;
//   result += parseInt(num / 5)
// }

// console.log(result)

// let result= ""
// for(i=0; i < 5; i++){
//   let num = i + 1
//   result += Number((num % 5 === 0))
// }
// console.log(result)  


// 7번 문제: 1~20중 10~15를 제외하고 출력하기
for(let i = 0; i < 20; i++){
  let num = i + 1;
  if(num >= 10 && num <= 15){ continue; }
  console.log(num)
}

// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
let oddTotal = 0;
let evenTotal = 0;

for(let i = 0; i < 100; i++){
  let num = i + 1
  let isOdd = num % 2 === 1
  if(isOdd){
    oddTotal += num
  }else{
    evenTotal += num
  }
}

let result = oddTotal - evenTotal
console.log(result)