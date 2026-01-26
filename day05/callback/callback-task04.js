// 1. 문자열을 받아서 반대로 순서를 바꾸고 출력
const reverse = (content, callback) => {
  let result = ""
  for(let i = 0; i < content.length; i++){
    result += content.charAt(content.length - i - 1)
  }
  callback(result)
}

reverse("abace", (result) => { console.log(result)})

// 2. 사용자가 입력한 값까지 누적 합한 후 결과값에 5를 곱하고 반환
const sum = (count, callback) => {
  let total = 0;
  for(let i = 0; i < count; i++){
    let num = i + 1;
    total += num
  }
  return callback(total)
}

const multipleBy5 = (data, callback) => {
  return callback(data * 5)
}

const multipleBy2 = (data) => {
  return data * 2
}

// 결과 값에 * 2
let result = sum(10, (total) => {
  return multipleBy5(total, multipleBy2)
})
console.log(result)

