// 별 찍기
//     *
//    ***
//   *****
//  *******
// *********

// console.log("    *")
// console.log("   ***")
// console.log("  *****")
// console.log(" *******")
// console.log("*********")

// 알고리즘
// 공백문자 4, 별 1
// console.log("    *")
// 공백문자 3, 별 3
// console.log("   ***")
// 공백문자 2, 별 5
// console.log("  *****")
// 공백문자 1, 별 7
// console.log(" *******")
// 공백문자 0, 별 9
// console.log("*********")

const n = 5;

for(let i = 0; i < n; i++){
  let line = ""
  for(let j = 0; j < n - i - 1; j++){
    line += " "
  }
  for(let k = 0; k < 2 * i + 1; k++){
    line += "*"
  }
  console.log(line)
}
// 2 ~ 9 단 만들기

// 2 ~ 9 단 
for(let i = 0; i < 8; i++){
  // 2 ~ 9
  let dan = i + 2;
  for(let j = 0; j < 9; j++){
    // 1 ~ 9
    let num = j + 1
    console.log(`${dan}단: ${dan} * ${num} = ${dan * num}`)
  }
}