// 1. 이름을 전달하면 이름을 다섯번 출력해주는 함수
function print(data){
  for(let i = 0; i < 5; i++){ 
    console.log(data)
  }
  return data 
}
let name = print("노민균")

// function print(name){
//   for(let i = 0; i < 5; i++)
//     console.log(name)
// }
// print("노민균")

// 2. 3개를 전달하면 3개를 모두 더해서 반환해주는 함수

function add(plus, Plus, PlUs){
  return plus + Plus + PlUs
}
let PLUS = add(10, 30, 20)
console.log(PLUS)

// function add(num1, num2, num3){
//   if(num2 === undefined){
//     return num1
//   }

//   if(num3 === undefined){
//     return num1 + num2
//   }

//   return num1 + num2 + num3
// }

// let total = add(10, 20, 30)
// console.log(total)

// 3. 성과 이름을 받아서 풀네임을 출력해주는 함수

function fullname(firstname, lastname){
  return firstname + lastname
}
let Fullname = fullname("노", "민균")
console.log(Fullname)

// 4. 2개를 전달 받아서 큰 값을 비교해서 결과를 반환해주는 함수
function isMax(num1, num2){
  if(num1 === num2){
    return "두 수가 같습니다"
  }else if(num1 > num2){
    return `큰 수: ${num1}`
  }else {
    return `큰 수: ${num2}`
  }
}

let result2 = isMax(10, 20)
console.log(result2)

// 5. 1개를 전달 받아서 홀수인지 짝수인지 비교해서 결과를 반환해주는 함수

function isOddOrEven(num1){
  return num1 % 2 ? "홀수" : "짝수"
}

console.log(typeof(isOddOrEven(10)) === "string")