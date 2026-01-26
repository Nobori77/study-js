// 5개 -> 매개변수 5개
// 100개 -> 매개변수 100개

// 100개를 입력하면 100개중에 1의 개수를 찾아주는 함수
// 가변 매개변수(rest parameter)
const myFunc = (...numbers) => {
  console.log(numbers)
}

myFunc(10, 20, 30, 40,)