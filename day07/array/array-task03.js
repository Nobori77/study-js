// 1. 1~10까지 누적합 구하기
const arr = new Array(10).fill(0).map((_, i) => i + 1)
const total = arr.reduce((acc, curr) => acc + curr, 0)
console.log(total)

// 2. 1~50까지 짝수만 배열에 담고 배열안에 값에 3을 곱한값으로 변경 후 출력
new Array(50)
  .fill(0)
  .map((data, i) => i + 1)
  .filter((data) => data % 2 === 0)
  .map((data) => data * 3)
  .forEach((data) => console.log(data))

// 3. 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬하기
const arr1 = [10, 20, 30, 40, 50]
arr1.sort((a, b) => b - a)
console.log(arr1)

// 4. 1~10까지 배열에 담고 5보다 크다면 값을 2배로 변경 후 출력하기
new Array (10)
  .fill(0)
  .map((datA, i) => i + 1)
  .filter((datA) => datA > 5)
  .map((datA) => datA * 2)
  .forEach((datA) => console.log(datA))
  
// 5. 1~30까지 배열에 담고 홀수 값들만 "*" 붙여서 출력하기
// ex) const arrTask1 = 1*3*5*7*9*11*13...
const arrTask1 = new Array(30).fill(0)
  .map((dAta, i) => i + 1)
  .filter((dAta) => dAta % 2 === 1)
  .join("*")
  console.log(arrTask1)

  // 6. arrTask1에 들어간 *을 제거하고 배열에 담아 기존에 값을 2배로 변경 후 모두 출력하기
  const arrdeletTask1 = arrTask1.split("*")
  .map((dAta) => dAta * 2)
  .forEach((dAta) => console.log(dAta))

// 7. 1~20까지 배열에 담고 배열의 든어간 값 중 뒤에서 5개 값만 더해서 출력하기
const arrTask2 = new Array(20)
  .fill(0)
  .map((data, i) => i + 1)
  // console.log(arrTask2)
  const result = arrTask2.slice(-5).reduce((acc, curr) => acc + curr, 0)
  console.log(result)

// filter, for, for of, for in, forEach, reduce, map, while, if, switch사용 금지
// 8. 들어간 글자 개수 맞추기
// ex) "abcdrweasdad", "a"
// "a" -> 3개

// .split()

const data = "abcdrweasdad";

const countChar1 = (str, c) => {
  return str.split(c).length - 1
}

console.log(countChar1(data, "a"))

const countChar2 = (str, c) => {
  return str.length - str.replaceAll(c, "").length
}

console.log(countChar2(data, "a"))

const countChar3 = (str, c) => {
  const sortedString = str.split("").sort().join("")
  return sortedString.lastIndexOf(c) - sortedString.indexOf(c) + 1
}

console.log(countChar3(data, "a"))