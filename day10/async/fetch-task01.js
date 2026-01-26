// https://jsonplaceholder.typicode.com/posts
// 서버로 데이터 요청 후 post 데이터 중 body 데이터로 바꿔서 출력
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json()) // JSON -> JS
  .then((posts) => posts.map((post) => post.body))

