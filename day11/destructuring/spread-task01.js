// 1~10까지
// 20~30까지
// 50~60까지 
// 각각 들어가있는 배열을 만들고,
// 3개의 배열을 스프레드 문법으로 합치기
const arr1 = new Array(10).fill(0).map((_, i) => i + 1)
const arr2 = new Array(11).fill(0).map((_, i) => i + 20)
const arr3 = new Array(11).fill(0).map((_, i) => i + 50)

const arr4 = [...arr1, ...arr2, ...arr3]

console.log(arr4)

const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const number2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const number3 = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60]

const number4 = number1.concat(number2, number3)
const number5 = [...number1, ...number2, ...number3]

console.log(number4)
console.log(number5)