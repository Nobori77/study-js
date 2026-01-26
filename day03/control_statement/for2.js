// break 키워드
// for(let i = 0; i < 10; i++){
//   let num = i +1;
//   console.log(num)

//   if(num === 5){
//     break
//   }

// }


// continue 키워드
for(let i = 0; i < 10; i++){
  let num = i +1;
  
  if(num === 5){
    continue;
  }
  console.log(num)
}

// 1번 문제: 1~100까지 짝수만 출력해보기
for(let i = 0; i < 100; i++){
  let num = i + 1
  let isInteger = !(num % 2)
  let result = isInteger ? "짝수" : "홀수"

  if(result === "짝수"){
    console.log(`${num}는 ${result}`)
  }
}


