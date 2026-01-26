// https://jsonplaceholder.typicode.com/todos
// 1. todos데이터를 요청 후 값으로 가져온 데이터를 제목: title로 변경 후 출력
// ex) 
// 제목: title1~
// 제목: title2~
// 제목: title3~
// const getTodos = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const todos = await response.json()
//   const titles = todos.map((todos) => `제목: ${todos.title}`)
//   console.log(titles)
// }

// getTodos()

// https://jsonplaceholder.typicode.com/comments
// 2. comments데이터를 요청 후 값으로 가져온 데이터 중 email의 아이디만 변경 후 출력
// ex) Eliseo@gardner.biz -> Eliseo

// const getComments = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments")
//   const comments = await response.json()
//   const ids = comments.map((comment) => comment.email.split("@")[0])
//   console.log(ids)
// }

// getComments()

// https://jsonplaceholder.typicode.com/comments
// 3. comments데이터를 요청 후 값으로 가져온 데이터 중 name을 뒤집어서 가져온 후 출력
const getComments2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments")
  const comments = await response.json()
  const reversedNames = comments.map((comment) => comment.name.split("").reverse().join(""))
  console.log(reversedNames)
}

getComments2()