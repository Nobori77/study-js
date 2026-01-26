// ??, ?.
// 옵셔널(Optional)
// 값이 없거나 오류가 발생할 수 있는 코드를 오류를 발생시키지 않고 안전하게 접근하는 문법
const name = ""
const bookName = name || "동화책"
console.log(name)
console.log(bookName)

const bookName2 = name ?? "소설책"
console.log(bookName2)


// ?. optional chaining
const movie1 = {
  name: "아바타3",
  detail: {
    price: 50000,
    date: '2025-12-01'
  }
}

// console.log(movie1.detail.title.replace(" ", ""))

// 화면에 값을 출력할 때
// 첫 번째 코드는 오류
console.log(movie1.detail.title)
// 두 번째 코드는 오류가 발생하지 않는다.
console.log(movie1.detail?.title)